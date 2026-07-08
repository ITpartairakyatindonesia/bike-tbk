import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const documentType = body?._type

    if (documentType === 'homePage') {
      revalidateTag('home-page', 'default')
      return NextResponse.json({ revalidated: true, tag: 'home-page' })
    }

    // Fallback: revalidate home page for any content change
    revalidateTag('home-page', 'default')
    return NextResponse.json({ revalidated: true, tag: 'home-page' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid request body', error: String(error) },
      { status: 400 }
    )
  }
}
