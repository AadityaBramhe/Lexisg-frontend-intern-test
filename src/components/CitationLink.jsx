export default function CitationLink({ citation }) {
  return (
    <div className="bg-gray-100 p-3 rounded text-sm">
      <p className="italic">“{citation.text}”</p>
      <a
        href={citation.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-2 inline-block"
      >
        Source: {citation.source}
      </a>
    </div>
  );
}
