
import { Navigation } from "@/components/Navigation";
import { TerrainView } from "@/components/TerrainView";
import { SystemStatus } from "@/components/SystemStatus";
import { DetectionDetails } from "@/components/DetectionDetails";
import { ExportButton } from "@/components/ExportButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex h-screen">
        <Navigation />
        
        <div className="flex-1 p-4 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-white">WiFind SDLS Interface</h1>
              <p className="text-sm text-gray-400">v1.0 [SDLS Engine] | 0.9 GHz</p>
            </div>
            <div className="text-right text-sm text-gray-400">
              28 Mar 2025 | 14:32:45 | UTC-04:00
            </div>
          </div>

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
            </div>
            
            <div className="flex justify-start mt-4">
              <ExportButton />
            </div>
          </div>
        </div>

        <DetectionDetails />
      </div>
    </div>
  );
};

export default Index;
