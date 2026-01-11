"use client";

import React, { useState } from "react";

export default function EstimateCard() {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [size, setSize] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simple placeholder estimation logic: numeric size * 100
    const numericSize = parseFloat(size as string) || 0;
    const cost = Math.max(200, Math.round(numericSize * 100));
    setEstimate(cost);
  }

  return (
    <div
      className="max-w-md w-full bg-primary-100 rounded-sm shadow-sm"
    >
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-md border-secondary"
      >
        <h3
          className="text-lg font-semibold mb-4 text-accent-800"
        >
          Estimate shipment cost
        </h3>

        <label className="block text-sm font-medium mb-1 text-accent-800">To</label>
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Destination market"
          className="w-full px-3 py-2 rounded mb-3 outline-none border-secondary"
        />

        <label className="block text-sm font-medium mb-1">From</label>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Origin"
          className="w-full px-3 py-2 rounded mb-3 outline-none border-secondary"
        />

        <label className="block text-sm font-medium mb-1">
          Estimated size (kg)
        </label>
        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="e.g. 12.5"
          inputMode="decimal"
          className="w-full px-3 py-2 rounded mb-3 outline-none border-secondary"
        />

        <button
          type="submit"
          className="w-full text-white font-medium py-2 rounded bg-secondary"
        >
          Estimate cost
        </button>

        {estimate !== null && (
          <div
            className="mt-4 p-3 rounded text-sm"
            style={{ background: "rgba(0,0,0,0.03)" }}
          >
            <strong>Estimated cost:</strong> KSh {estimate.toLocaleString()}
            <div className="text-xs text-gray-600">
              To: {to || "-"} • From: {from || "-"}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
