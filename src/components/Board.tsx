"use client";

import React from "react";

function Board() {
  function handleDragOver(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    const section = event.target as HTMLElement;
  }

  function handleTaskDrop(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    const droppedElement = document.getElementById(
      event.dataTransfer.getData("text")
    );
    (event.target as HTMLElement).appendChild(droppedElement!);
  }
  return (
    <section className="w-full p-4  rounded-md  h-full grid grid-cols-3 gap-8">
      <section className="border-2 border-gray-200 bg-gray-50 rounded-md  h-full flex flex-col gap-2  p-2">
        <h2 className="p-4 text-center font-mono font-medium font-xl">TO DO</h2>
        <section
          className="flex-auto w-full flex flex-col gap-2"
          onDragOver={handleDragOver}
          onDrop={handleTaskDrop}
        >
          <span
            className="border-2 w-full bg-yellow-200 rounded-md p-2"
            id="task-1"
            draggable
            onDragStart={(e: React.DragEvent<HTMLSpanElement>) => {
              e.dataTransfer.setData("text", (e.target as HTMLSpanElement).id);
            }}
          >
            {" "}
            Draggable 1
          </span>
          <span
            className="border-2 w-full bg-blue-200 rounded-md p-2"
            id="task-2"
            draggable
            onDragStart={(e: React.DragEvent<HTMLSpanElement>) => {
              e.dataTransfer.setData("text", (e.target as HTMLSpanElement).id);
            }}
          >
            {" "}
            Draggable 2
          </span>
          <span
            className="border-2 w-full bg-green-200 rounded-md p-2"
            id="task-3"
            draggable
            onDragStart={(e: React.DragEvent<HTMLSpanElement>) => {
              e.dataTransfer.setData("text", (e.target as HTMLSpanElement).id);
            }}
          >
            {" "}
            Draggable 3
          </span>
          <span
            className="border-2 w-full bg-red-200 rounded-md p-2"
            id="task-4"
            draggable
            onDragStart={(e: React.DragEvent<HTMLSpanElement>) => {
              e.dataTransfer.setData("text", (e.target as HTMLSpanElement).id);
            }}
          >
            {" "}
            Draggable 4
          </span>
        </section>
      </section>
      <section className="border-2 border-gray-200 bg-gray-50 rounded-md  h-full flex flex-col gap-2  p-2">
        <h2 className="p-4 text-center font-mono font-medium font-xl">
          In Progress
        </h2>
        <section
          className="flex-auto w-full flex flex-col gap-2"
          onDragOver={handleDragOver}
          onDrop={handleTaskDrop}
        ></section>
      </section>
      <section className="border-2 border-gray-200 bg-gray-50 rounded-md  h-full flex flex-col gap-2  p-2">
        <h2 className="p-4 text-center font-mono font-medium font-xl">
          Completed
        </h2>
        <section
          className="flex-auto w-full flex flex-col gap-2"
          onDragOver={handleDragOver}
          onDrop={handleTaskDrop}
        ></section>
      </section>
    </section>
  );
}

export default Board;
