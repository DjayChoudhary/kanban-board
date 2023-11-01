import React from "react";

function Header() {
  return (
    <header className="font-mono px-4 pt-4 pb-3 flex gap-12 items-center w-full border-b-2 border-gray-300">
      <span className="text-2xl font-medium">Kanban Board</span>
      <button className="bg-blue-600 hover:bg-opacity-95 rounded-md text-slate-50 px-4 py-2">
        + Create Task
      </button>
    </header>
  );
}

export default Header;
