
const SettingsView = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-2xl mb-4">Settings</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl mb-3">3D View Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Background Color</label>
              <select className="bg-gray-800 text-white p-2 rounded">
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Scale Factor</label>
              <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" 
                className="w-full" />
            </div>
            <div>
              <label className="block text-sm mb-2">Rendering Quality</label>
              <select className="bg-gray-800 text-white p-2 rounded">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
