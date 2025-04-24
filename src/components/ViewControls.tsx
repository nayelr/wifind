
import { Download } from "lucide-react";
import { Button } from "./ui/button";

export const ViewControls = () => {
  const handleExport = () => {
    const detectedPeople = [
      { id: 1, position: { x: 143.2, y: 78.5, z: 12.4 }, status: "walking" },
      { id: 2, position: { x: 267.8, y: 122.3, z: 12.4 }, status: "crouching" },
      { id: 3, position: { x: 198.6, y: 215.7, z: 4.2 }, status: "lying" }
    ];
    
    const blob = new Blob([JSON.stringify(detectedPeople, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'detected-coordinates.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="flex gap-2 mt-4">
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={handleExport}
      >
        <Download className="w-4 h-4 mr-2" />
        Export Data
      </Button>
    </div>
  );
};
