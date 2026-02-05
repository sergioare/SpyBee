import { mockData } from "@/utils/data/mockData";
import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((res) => setTimeout(res, 800));

  return NextResponse.json({
    data: mockData,
  });
}