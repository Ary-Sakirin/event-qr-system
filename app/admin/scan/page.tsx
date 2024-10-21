"use client";

import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function AdminScanPage() {
  const [scanResult, setScanResult] = useState("");
  const [scanStatus, setScanStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    event_name: string;
    event_date: string;
  } | null>(null);

  const handleScan = async (result: string | null) => {
    if (result) {
      setScanResult(result);
      try {
        const response = await fetch(`/api/check-user?id=${result}`);
        const data = await response.json();
        if (response.ok && data.status === "success") {
          setScanStatus("success");
          setUserData(data.user);
        } else {
          setScanStatus("error");
          setUserData(null);
        }
      } catch (error) {
        console.error("Error checking user:", error);
        setScanStatus("error");
        setUserData(null);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Scan User QR Code
        </h1>
        <QrReader
          onResult={(result) => {
            if (result) {
              handleScan(result.getText());
            }
          }}
          constraints={{ facingMode: "environment" }}
          className="mb-4"
        />
        {scanResult && (
          <div className="mt-4 text-center">
            <p>Scanned User ID: {scanResult}</p>
            {scanStatus === "success" && userData && (
              <div>
                <p className="text-green-600 font-semibold">
                  User can join the event
                </p>
                <div className="mt-2 text-left">
                  <p className="text-sm text-gray-600">Name: {userData.name}</p>
                  <p className="text-sm text-gray-600">
                    Email: {userData.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    Event: {userData.event_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Date: {new Date(userData.event_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
            {scanStatus === "error" && (
              <p className="text-red-600 font-semibold">
                User cannot join the event
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
