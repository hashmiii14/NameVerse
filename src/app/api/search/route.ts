import { NextResponse } from 'next';
import { queryNamesServer, getNameBySlug } from '@/lib/data/namesHelper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const gender = searchParams.get('gender') || 'All';
  const origin = searchParams.get('origin') || 'All';
  const religion = searchParams.get('religion') || 'All';
  const language = searchParams.get('language') || 'All';
  const letter = searchParams.get('letter') || 'All';
  const limit = parseInt(searchParams.get('limit') || '50', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  // If searching for an exact slug lookup
  const slug = searchParams.get('slug');
  if (slug) {
    const item = getNameBySlug(slug);
    if (item) {
      return NextResponse.json({ success: true, data: item });
    }
    return NextResponse.json({ success: false, error: 'Name not found' }, { status: 404 });
  }

  const { results, total } = queryNamesServer(
    { searchQuery: q, gender, origin, religion, language, letter },
    Math.min(limit, 200),
    offset
  );

  return NextResponse.json({
    success: true,
    total,
    count: results.length,
    results
  });
}
