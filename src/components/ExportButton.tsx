
import { saveAs } from 'file-saver';

export const ExportButton = () => {
  const handleExport = () => {
    // Sample data for detected individuals
    const detectedIndividuals = [
      { id: 1, position: { x: 143.2, y: 78.5, z: 12.4 }, status: "walking" },
      { id: 2, position: { x: 267.8, y: 122.3, z: 12.4 }, status: "crouching" },
      { id: 3, position: { x: 198.6, y: 215.7, z: 4.2 }, status: "lying" }
    ];
    
    // Convert to JSON
    const dataStr = JSON.stringify(detectedIndividuals, null, 2);
    
    // Create a blob and save the file
    const blob = new Blob([dataStr], { type: 'application/json' });
    saveAs(blob, `wifind-detection-data-${new Date().toISOString().slice(0, 10)}.json`);
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Export Data
    </button>
  );
};
