import { createSlice } from "@reduxjs/toolkit";

interface WorkItemState {
  id: string;
  title: string;
  description: string;
  color: "red" | "yellow" | "green" | "blue";
  status: "todo" | "in-progress" | "completed";
}

interface User {
  id: string;
  username: string;
}

interface WorkItemsState {
  workitems: WorkItemState[];
  user: User;
}

const initialWorkItems: WorkItemState[] = [
  {
    id: "1",
    title: "Draggable Work 1",
    description: "This is a sample Description for Draggable Work 1",
    color: "yellow",
    status: "todo",
  },
  {
    id: "2",
    title: "Draggable Work 3",
    description: "This is a sample Description for Draggable Work 3",
    color: "blue",
    status: "todo",
  },
  {
    id: "3",
    title: "Draggable Work 3",
    description: "This is a sample Description for Draggable Work 3",
    color: "green",
    status: "todo",
  },
  {
    id: "4",
    title: "Draggable Work 4",
    description: "This is a sample Description for Draggable Work 4",
    color: "red",
    status: "todo",
  },
];

const initialState: WorkItemsState = {
  user: {
    id: "1",
    username: "Dhananjay Choudhary",
  },
  workitems: initialWorkItems,
};

export const workItemSlice = createSlice({
  name: "workitem",
  initialState,
  reducers: {
    createWorkItem: (state, action) => {},
  },
});

export default workItemSlice.reducer;
