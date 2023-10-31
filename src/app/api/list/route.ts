import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json({
    code: 0,
    success: true,
    data: [{
      id: 0,
      name: 'test1'
    }, {
      id: 1,
      name: 'test2'
    }]
  })
}