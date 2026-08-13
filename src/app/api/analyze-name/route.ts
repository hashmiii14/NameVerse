import { NextResponse } from 'next/server';
import { getPrebuiltOrDynamicName } from '@/lib/data/prebuiltNames';
import { NameAnalysis } from '@/types/name';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, lang = 'en' } = body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'A valid name string is required.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    
    // Retrieve structured analysis using dynamic engine
    const analysis: NameAnalysis = getPrebuiltOrDynamicName(cleanName);

    return NextResponse.json({
      success: true,
      lang,
      data: analysis
    });
  } catch (error) {
    console.error('Error analyzing name:', error);
    return NextResponse.json(
      { error: 'An error occurred while analyzing the name.' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('q');

  if (!name) {
    return NextResponse.json({ error: 'Query parameter q is required' }, { status: 400 });
  }

  const analysis = getPrebuiltOrDynamicName(name);
  return NextResponse.json({ success: true, data: analysis });
}
