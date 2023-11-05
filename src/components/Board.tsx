"use client";

import { useWorkItemDispatch, useWorkItemSelector } from "@/redux/hooks";
import { WorkItemState } from "@/redux/slices/workItemSlice";
import React from "react";

function Board() {
  const workItems = useWorkItemSelector(
    (state) => state.workitemsReducer.workitems
  );
  const dispatch = useWorkItemDispatch();

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
          onDragLeave={(e) => {
            console.log("leaveing");
            console.log(e.target);
          }}
          onDragEnter={(e) => {
            console.log("entering");
            console.log(e.target);
          }}
        >
          {workItems.map((workItem) => (
            <WorkItem key={workItem.id} workItem={workItem} />
          ))}
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

function WorkItem({ workItem }: { workItem: WorkItemState }) {
  return (
    <span
      className={`border-2 w-full rounded-md p-2 ${workItem.color}`}
      id={workItem.id}
      draggable
      onDragStart={(e: React.DragEvent<HTMLSpanElement>) => {
        e.dataTransfer.effectAllowed = "move";

        e.dataTransfer.setData("text", (e.target as HTMLSpanElement).id);
      }}
    >
      {workItem.title}
    </span>
  );
}

export default Board;
