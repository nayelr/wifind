
export const DetectionDetails = () => {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <div className="mb-6">
        <h3 className="text-lg mb-2">Detection Details</h3>
        <p className="text-sm mb-4">Persons Detected: 3</p>
        
        <h4 className="text-sm text-gray-400 mb-2">Location Coordinates:</h4>
        <ul className="text-sm space-y-1">
          <li>• Person 1: X:143.2, Y:78.5, Z:12.4</li>
          <li>• Person 2: X:267.8, Y:122.3, Z:12.4</li>
          <li>• Person 3: X:198.6, Y:215.7, Z:4.2</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-gray-400 mb-2">Movement Status:</h4>
        <ul className="text-sm space-y-1">
          <li className="text-green-400">• Person 1: Active [Walking]</li>
          <li className="text-yellow-400">• Person 2: Minimal [Crouching]</li>
          <li className="text-red-400">• Person 3: Stationary [Lying]</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-gray-400 mb-2">Signal Quality:</h4>
        <p className="text-sm">• Strong (92.7%) | SNR: 18.3dB</p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-gray-400 mb-2">Scan Parameters:</h4>
        <ul className="text-sm space-y-1">
          <li>• Frequency: 2.4GHz/5GHz</li>
          <li>• Resolution: High (0.5m)</li>
          <li>• Scan Rate: 12Hz</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm text-gray-400 mb-2">Last Updated:</h4>
        <p className="text-sm">• 5 seconds ago [Auto-refresh]</p>
      </div>
    </div>
  );
};
