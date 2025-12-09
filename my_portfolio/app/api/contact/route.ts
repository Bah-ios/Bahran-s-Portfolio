import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
// If you want to save messages to DB, define a Contact model in lib/models.ts and import it here.

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    // 1. Connect to DB
    await dbConnect();

    // 2. Here you would typically save to MongoDB or send an email via NodeMailer/SendGrid
    console.log("Contact Form Received:", { name, email, message });

    // For now, we simulate success
    return NextResponse.json({ success: true, message: 'Message received' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}