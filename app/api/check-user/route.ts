import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  const db = getDb()
  
  try {
    const stmt = db.prepare(`
      SELECT users.*, registrations.status, events.name as event_name, events.date as event_date
      FROM users
      JOIN registrations ON users.id = registrations.user_id
      JOIN events ON registrations.event_id = events.id
      WHERE users.id = ? AND events.id = 1
    `)
    const user = stmt.get(id)

    if (user && user.status === 'registered') {
      return NextResponse.json({ 
        status: 'success', 
        user: { 
          name: user.name, 
          email: user.email,
          event_name: user.event_name,
          event_date: user.event_date
        } 
      })
    } else {
      return NextResponse.json({ status: 'error', message: 'User not found or not registered' }, { status: 403 })
    }
  } catch (error) {
    console.error('Check user error:', error)
    return NextResponse.json({ error: 'Failed to check user status' }, { status: 500 })
  }
}