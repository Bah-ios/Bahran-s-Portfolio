import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Content } from '@/lib/models';

export async function GET() {
  await dbConnect();
  
  // Clear old data to avoid duplicates
  await Content.deleteMany({ section: 'footer' });

  await Content.create({
    section: 'footer',
    title: 'IT BERRIES',
    body: 'Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra.'
  });

  return NextResponse.json({ message: 'Database seeded successfully' });
}