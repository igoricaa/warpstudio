import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  const tags = ['project', 'aboutUs', 'services', 'photography', 'vfx'];

  for (const tag of tags) {
    revalidateTag(tag);
  }

  return NextResponse.json(`Tags: ${tags} revalidated!`);
}
