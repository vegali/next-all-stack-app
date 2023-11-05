import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const page = parseInt(request.nextUrl.searchParams.get('page') as any) || 1
  const size = parseInt(request.nextUrl.searchParams.get('size') as any) || 10
  const title = request.nextUrl.searchParams.get('title') || ''

  const data = await prisma.article.findMany({
    where: {
      title: {
        contains: title
      }
    },
    orderBy: {
      createAt: 'desc'
    },
    take: size,
    skip: size * (page - 1)
  })
  const total = await prisma.article.count({
    where: {
      title: {
        contains: title
      }
    }
  })
  return NextResponse.json({
    success: true,
    data: {
      list: data
    },
    pages: Math.ceil(total / size),
    total
  })
}

export const POST = async (request: NextRequest) => {
  const data = await request.json()
  await prisma.article.create({
    data,
  })
  return NextResponse.json({
    success: true,
    errorMessage: '创建成功',
    data: {}
  })
}