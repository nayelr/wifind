
import { Navigation } from "@/components/Navigation";
import { useViewSettings } from "../context/ViewSettings";

const SettingsView = () => {
  const {
    backgroundColor,
    scaleFactor,
    renderingQuality,
    setBackgroundColor,
    setScaleFactor,
    setRenderingQuality
  } = useViewSettings();

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Navigation />
      
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl mb-4">Settings</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl mb-3">3D View Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Background Color</label>
                <select 
                  className="bg-gray-800 text-white p-2 rounded"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value as 'dark' | 'light')}
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Scale Factor: {scaleFactor.toFixed(1)}</label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2" 
                  step="0.1" 
                  value={scaleFactor}
                  onChange={(e) => setScaleFactor(parseFloat(e.target.value))}
                  className="w-full" 
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Rendering Quality</label>
                <select 
                  className="bg-gray-800 text-white p-2 rounded"
                  value={renderingQuality}
                  onChange={(e) => setRenderingQuality(e.target.value as 'high' | 'medium' | 'low')}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
