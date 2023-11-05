import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

// 编辑
export const PUT = async (request: NextRequest, { params }: any) => {
  const { id } = params // 路由中的参数
  const data = await request.json() // 请求体中的数据

  await prisma.article.update({
    where: { id },
    data
  })

  return NextResponse.json({
    success: true,
    errorMessage: '修改成功',
    data: {}
  })
}

// 删除
export const DELETE = async (request: NextRequest, { params }: any) => {
  const { id } = params
  console.log(id);

  await prisma.article.delete({
    where: { id }
  })
  return NextResponse.json({
    success: true,
    errorMessage: '删除成功',
    data: {}
  })
}