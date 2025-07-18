import { useState } from "react";

export default function QueryInput({ onSubmit, loading }) {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4 bg-white shadow-md rounded mb-4">
      <textarea
        rows={4}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a legal question..."
        className="w-full border p-2 rounded"
      />
      <button
        onClick={() => onSubmit(query)}
        disabled={loading || query.trim() === ""}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
}
