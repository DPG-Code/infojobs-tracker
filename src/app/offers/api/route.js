import { NextResponse } from 'next/server'

const infoJobsToken = process.env.NEXT_PUBLIC_INFOJOBS_TOKEN ?? ''

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${infoJobsToken}`,
      'Access-Control-Allow-Origin': '*'
    }
  }

  const res = await fetch(
    `https://api.infojobs.net/api/9/offer?q=${query}`,
    config
  )
  const response = await res.json()

  return NextResponse.json({ response })
}
