
export const SystemStatus = () => {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        System Status:
        <span className="inline-flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-1" />
          Active
        </span>
      </div>
      <div>Sensors: 3/3</div>
      <div className="flex items-center gap-1">
        Signal Strength:
        <div className="flex gap-0.5">
          <div className="w-2 h-4 bg-red-500" />
          <div className="w-2 h-4 bg-red-500" />
          <div className="w-2 h-4 bg-red-500" />
        </div>
      </div>
    </div>
  );
};
