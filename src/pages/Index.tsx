
import { Navigation } from "@/components/Navigation";
import { TerrainView } from "@/components/TerrainView";
import { SystemStatus } from "@/components/SystemStatus";
import { DetectionDetails } from "@/components/DetectionDetails";
import { ViewControls } from "@/components/ViewControls";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex h-screen">
        {/* Left Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-white">WiFind SDLS Interface</h1>
              <p className="text-sm text-gray-400">v2.0.7 [SDLS Engine 4.2]</p>
            </div>
            <div className="text-right text-sm text-gray-400">
              28 Mar 2025 | 14:32:45 | UTC-04:00
            </div>
          </div>

          {/* 3D View Container */}
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">3D Real-Time Terrain View</h2>
              <SystemStatus />
            </div>
            
            <div className="h-[600px] relative bg-gray-900 rounded-lg overflow-hidden">
              <TerrainView />
              <div className="absolute top-4 left-4 bg-gray-800/80 px-3 py-1 rounded text-sm">
                Terrain Elevation: 12.4m
              </div>
              <div className="absolute top-4 right-4 bg-gray-800/80 px-3 py-1 rounded text-sm">
                Scan Area: 320m² | Depth Range: 0-25m | Precision: ±0.3m
              </div>
            </div>
            
            <ViewControls />
          </div>
        </div>

        {/* Right Panel */}
        <DetectionDetails />
      </div>
    </div>
  );
};

export default Index;
