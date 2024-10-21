import { getDb } from "@/lib/db";
import { QRCodeSVG } from "qrcode.react";

async function getUser(id: string) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT users.*, events.name as event_name, events.date as event_date
    FROM users
    JOIN registrations ON users.id = registrations.user_id
    JOIN events ON registrations.event_id = events.id
    WHERE users.id = ?
  `);
  return stmt.get(id);
}

export default async function QRPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold mb-6">User Not Found</h1>
          <p className="text-gray-600">The requested user does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Your Event QR Code</h1>
        <QRCodeSVG
          value={user.id.toString()}
          size={256}
          className="mx-auto mb-4"
        />
        <p className="text-gray-600 mb-2">
          Present this QR code at the event entrance
        </p>
        <p className="text-sm text-gray-500">Name: {user.name}</p>
        <p className="text-sm text-gray-500">Email: {user.email}</p>
        <p className="text-sm text-gray-500 mt-4">Event: {user.event_name}</p>
        <p className="text-sm text-gray-500">
          Date: {new Date(user.event_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
