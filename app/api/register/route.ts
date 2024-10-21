import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function POST(request: Request) {
  const { name, email } = await request.json()
  
  const db = getDb()
  
  try {
    const insertUser = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
    const insertRegistration = db.prepare('INSERT INTO registrations (user_id, event_id) VALUES (?, ?)')

    const result = db.transaction(() => {
      const userResult = insertUser.run(name, email)
      const userId = userResult.lastInsertRowid
      insertRegistration.run(userId, 1) // Assuming event_id 1 for our sample event
      return userId
    })()

    return NextResponse.json({ id: result })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}