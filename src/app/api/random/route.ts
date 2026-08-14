import { NextResponse } from 'next';
import { getAllNames } from '@/lib/data/namesHelper';

export async function GET() {
  const names = getAllNames();
  if (!names || names.length === 0) {
    return NextResponse.json({ success: false, error: 'No names available' }, { status: 500 });
  }

  // Pick a random interesting record
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomItem = names[randomIndex];

  return NextResponse.json({
    success: true,
    slug: randomItem.slug,
    name: randomItem.name,
    meaning: randomItem.meaning,
    origin: randomItem.origin,
    gender: randomItem.gender
  });
}
