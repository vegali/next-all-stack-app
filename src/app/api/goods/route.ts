import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = await prisma.goods.findMany({
    orderBy: {
      createAt: 'desc'
    }
  })
  console.log(data);

  return NextResponse.json({
    success: true,
    errorMessageMessage: '获取成功',
    data
  })
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  console.log(data);

  await prisma.goods.create({
    data
  })
  return NextResponse.json({
    success: 'true',
    errorMessage: '创建成功',
    data: {}
  })
}