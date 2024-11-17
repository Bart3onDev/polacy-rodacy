"use client";

import { Switch } from "@/components/ui/switch";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const DarkModeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleUserTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    if (theme === "dark") {
      setTheme("light");
      return;
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    console.log("THEME", theme);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-row m-2 gap-1.5">
      <Sun />
      <Switch
        id="dark-mode-toggle"
        aria-label="Toggle dark mode"
        checked={theme === "dark"}
        onCheckedChange={toggleUserTheme}
      />
      <Moon />
    </div>
  );
};

export default DarkModeToggler;
