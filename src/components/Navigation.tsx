
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "Live View", path: "/" },
  { name: "Settings", path: "/settings" },
  { name: "About WiFind", path: "/about" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="w-48 bg-gray-800 p-4">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => navigate(item.path)}
          className={cn(
            "w-full text-left px-4 py-2 rounded mb-2 transition-colors",
            location.pathname === item.path
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
