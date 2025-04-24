
import { 
  Rotate3D,
  ZoomIn,
  MoveHorizontal,
  RotateCcw,
  Download,
  LineChart,
  Ruler
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const ViewControls = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex gap-2 mt-4">
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={() => navigate('/rotate')}
      >
        <Rotate3D className="w-4 h-4 mr-2" />
        Rotate 3D
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={() => navigate('/zoom')}
      >
        <ZoomIn className="w-4 h-4 mr-2" />
        Zoom
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={() => navigate('/pan')}
      >
        <MoveHorizontal className="w-4 h-4 mr-2" />
        Pan
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={() => navigate('/reset')}
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset View
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={() => navigate('/export')}
      >
        <Download className="w-4 h-4 mr-2" />
        Export Data
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={() => navigate('/analyze')}
      >
        <LineChart className="w-4 h-4 mr-2" />
        Analyze
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        className="bg-gray-700 hover:bg-gray-600"
        onClick={() => navigate('/measure')}
      >
        <Ruler className="w-4 h-4 mr-2" />
        Measure
      </Button>
    </div>
  );
};
