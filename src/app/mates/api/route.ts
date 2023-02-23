import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  console.log("got request")
  return await NextResponse.json({ mate: "Amelia" });
}
