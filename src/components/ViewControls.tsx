
import { rotate3d, zoomIn, zoomOut, pan, reset, exportData, analyze, measure } from "lucide-react";
import { Button } from "./ui/button";

export const ViewControls = () => {
  return (
    <div className="flex gap-2 mt-4">
      <Button variant="secondary" size="sm" className="bg-gray-700 hover:bg-gray-600">
        <rotate3d className="w-4 h-4 mr-2" />
        Rotate 3D
      </Button>
      <Button variant="secondary" size="sm" className="bg-gray-700 hover:bg-gray-600">
        <zoomIn className="w-4 h-4 mr-2" />
        Zoom
      </Button>
      <Button variant="secondary" size="sm" className="bg-gray-700 hover:bg-gray-600">
        <pan className="w-4 h-4 mr-2" />
        Pan
      </Button>
      <Button variant="secondary" size="sm" className="bg-gray-700 hover:bg-gray-600">
        <reset className="w-4 h-4 mr-2" />
        Reset View
      </Button>
      <Button variant="secondary" size="sm" className="bg-gray-700 hover:bg-gray-600">
        <exportData className="w-4 h-4 mr-2" />
        Export Data
      </Button>
      <Button variant="secondary" size="sm" className="bg-gray-700 hover:bg-gray-600">
        <analyze className="w-4 h-4 mr-2" />
        Analyze
      </Button>
      <Button variant="secondary" size="sm" className="bg-gray-700 hover:bg-gray-600">
        <measure className="w-4 h-4 mr-2" />
        Measure
      </Button>
    </div>
  );
};
