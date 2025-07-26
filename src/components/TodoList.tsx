import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import Calender from "./Calender";

const items = [
  { id: 1, text: "Lorem ipsum dolor sit amet.", checked: false },
  { id: 2, text: "Consectetur adipiscing elit.", checked: false },
  { id: 3, text: "Sed do eiusmod tempor incididunt.", checked: false },
  { id: 4, text: "Ut labore et dolore magna aliqua.", checked: true },
  { id: 5, text: "Ut enim ad minim veniam.", checked: false },
  { id: 6, text: "Quis nostrud exercitation ullamco laboris.", checked: false },
  { id: 7, text: "Nisi ut aliquip ex ea commodo consequat.", checked: false },
  { id: 8, text: "Duis aute irure dolor in reprehenderit.", checked: false },
  { id: 9, text: "In voluptate velit esse cillum dolore.", checked: false },
  { id: 10, text: "Eu fugiat nulla pariatur.", checked: true },
  {
    id: 11,
    text: "Excepteur sint occaecat cupidatat non proident.",
    checked: false,
  },
  {
    id: 12,
    text: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    checked: false,
  },

  { id: 13, text: "Lorem ipsum dolor sit amet.", checked: true },
  { id: 14, text: "Consectetur adipiscing elit.", checked: false },
  { id: 15, text: "Sed do eiusmod tempor incididunt.", checked: true },
  { id: 16, text: "Ut labore et dolore magna aliqua.", checked: false },
  { id: 17, text: "Ut enim ad minim veniam.", checked: true },
  { id: 18, text: "Quis nostrud exercitation ullamco laboris.", checked: true },
  { id: 19, text: "Nisi ut aliquip ex ea commodo consequat.", checked: false },
  { id: 20, text: "Duis aute irure dolor in reprehenderit.", checked: false },
];

const TodoList = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      {/* Calender */}
      <Calender />
      <ScrollArea className="max-h-[400px] overflow-y-auto mt-4">
        {/* list items */}
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <Card key={item.id} className="p-4 ">
              <div className="flex items-center  gap-4">
                <Checkbox id={`item-${item.id}`} />
                <label
                  htmlFor={`item-${item.id}`}
                  className="text-sm text-muted-foreground"
                >
                  {item.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
