"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/themeSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav>
      <button onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
