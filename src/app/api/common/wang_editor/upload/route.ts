import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs'
import { randomUUID } from "crypto";

export const POST = async (request: NextRequest) => {
  const data = await request.formData()
  const fileName = await SaveFilled(data.get('file') as File)
  return NextResponse.json({
    "errno": 0, // 注意：值是数字，不能是字符串
    "data": {
        "url": fileName, // 图片 src ，必须
        // "alt": "yyy", // 图片描述文字，非必须
        // "href": "zzz" // 图片的链接，非必须
    }
})
}

const SaveFilled = async (blob: File) => {
  // 1、生成上传路径
  const dirName = '/uploads/' + dayjs().format('YYYY-MM-DD')
  // 2、组装上传目录地址
  const uploadDir = path.join(process.cwd(), 'public' + dirName)
  // 3、创建目录
  fs.mkdirSync(uploadDir, {
    recursive: true
  })
  // 4、生成随机图片名称
  const fileName = randomUUID() + '.png'
  // 5、blob转arrayBuffer
  const arrayBuffer = await blob.arrayBuffer()
  // 6、组装图片全路径
  const allDir = uploadDir + '/' + fileName
  // 7、写入图片
  fs.writeFileSync(allDir, new DataView(arrayBuffer))
  // 8、返回图片地址
  return dirName + '/' + fileName
}
