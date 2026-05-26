import { NextResponse } from 'next/server';

const OZ_TO_GRAM = 31.1035;

async function fetchMetalPrices() {
  try {
    const res = await fetch('https://mintedmetal.com/api/prices.json', {
      next: { revalidate: 900 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchInrRate() {
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.rates.INR || null;
  } catch {
    return null;
  }
}

export async function GET() {
  const [metalData, inrRate] = await Promise.all([fetchMetalPrices(), fetchInrRate()]);

  const fallback = {
    gold24: { value: '₹72,450', change: '+₹240', changePercent: '+0.33%', up: true },
    gold22: { value: '₹66,410', change: '+₹220', changePercent: '+0.33%', up: true },
    silver: { value: '₹84,200', change: '-₹150', changePercent: '-0.18%', up: false },
    platinum: { value: '₹32,150', change: '+₹50', changePercent: '+0.16%', up: true },
    timestamp: Date.now(),
  };

  if (!metalData || !inrRate) return NextResponse.json(fallback);

  const { gold, silver, platinum } = metalData.metals;

  const goldUsdPerGram = gold.price / OZ_TO_GRAM;
  const silverUsdPerGram = silver.price / OZ_TO_GRAM;
  const platinumUsdPerGram = platinum.price / OZ_TO_GRAM;

  const prevGoldUsdPerGram = gold.previousPrice / OZ_TO_GRAM;
  const prevSilverUsdPerGram = silver.previousPrice / OZ_TO_GRAM;
  const prevPlatinumUsdPerGram = platinum.previousPrice / OZ_TO_GRAM;

  const gold24InrPer10g = Math.round(goldUsdPerGram * 10 * inrRate);
  const gold22InrPer10g = Math.round(gold24InrPer10g * 0.916);
  const silverInrPerKg = Math.round(silverUsdPerGram * 1000 * inrRate);
  const platinumInrPer10g = Math.round(platinumUsdPerGram * 10 * inrRate);

  const gold24Prev = Math.round(prevGoldUsdPerGram * 10 * inrRate);
  const gold22Prev = Math.round(gold24Prev * 0.916);
  const silverPrev = Math.round(prevSilverUsdPerGram * 1000 * inrRate);
  const platinumPrev = Math.round(prevPlatinumUsdPerGram * 10 * inrRate);

  const calcChange = (current: number, prev: number) => {
    const diff = current - prev;
    const pct = prev > 0 ? (diff / prev) * 100 : 0;
    return {
      change: `${diff >= 0 ? '+' : ''}₹${Math.abs(diff).toLocaleString('en-IN')}`,
      changePercent: `${diff >= 0 ? '+' : ''}${pct.toFixed(2)}%`,
      up: diff >= 0,
    };
  };

  const formatValue = (val: number) => `₹${val.toLocaleString('en-IN')}`;

  return NextResponse.json({
    gold24: { value: formatValue(gold24InrPer10g), ...calcChange(gold24InrPer10g, gold24Prev) },
    gold22: { value: formatValue(gold22InrPer10g), ...calcChange(gold22InrPer10g, gold22Prev) },
    silver: { value: formatValue(silverInrPerKg), ...calcChange(silverInrPerKg, silverPrev) },
    platinum: { value: formatValue(platinumInrPer10g), ...calcChange(platinumInrPer10g, platinumPrev) },
    timestamp: Date.now(),
  });
}
