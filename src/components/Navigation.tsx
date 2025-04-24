
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", active: false },
  { name: "Live View", active: true },
  { name: "Analysis", active: false },
  { name: "History", active: false },
  { name: "Settings", active: false },
  { name: "System", active: false },
  { name: "Help", active: false },
];

export const Navigation = () => {
  return (
    <nav className="w-48 bg-gray-800 p-4">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={cn(
            "w-full text-left px-4 py-2 rounded mb-2 transition-colors",
            item.active
              ? "bg-red-500 text-white"
              : "text-gray-300 hover:bg-gray-700"
          )}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
};
