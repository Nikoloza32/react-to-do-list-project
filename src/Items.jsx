import React from "react";
import { SingleItems } from "./SingleItems";

export const Items = ({ removeItem, items }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItems key={item.id} item={item} removeItem={removeItem} />
        );
      })}
    </div>
  );
};
