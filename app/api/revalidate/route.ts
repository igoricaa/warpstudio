import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  const tags = ['project'];

  for (const tag of tags) {
    revalidateTag(tag);
  }

  return NextResponse.json('Projects revalidated!');
}
