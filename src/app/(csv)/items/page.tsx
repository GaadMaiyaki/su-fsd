"use client";

import SortDropdown from "@/components/common/select-dropdown";
import ItemList from "@/components/item-list";
import {ItemProps, SortOrder} from "@/types";
import {
  sortByCreatedAtAsc,
  sortByFilenameAsc,
  sortByFilenameDesc,
} from "@/utils";
import {useEffect, useState} from "react";

export default function Items() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.CreatedAt);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("/api/getCsvItems");
      const data: ItemProps[] = await res.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const sortedItems = (() => {
    switch (sortOrder) {
      case SortOrder.CreatedAt:
        return sortByCreatedAtAsc(items);
      case SortOrder.FilenameAsc:
        return sortByFilenameAsc(items);
      case SortOrder.FilenameDesc:
        return sortByFilenameDesc(items);
      default:
        return items;
    }
  })();

  const sortOptions = [
    {value: SortOrder.CreatedAt, label: "Sort by Created At (Asc)"},
    {value: SortOrder.FilenameAsc, label: "Sort by Filename (Asc)"},
    {value: SortOrder.FilenameDesc, label: "Sort by Filename (Desc)"},
  ];

  return (
    <div>
      <h1 className="text-center py-5 text-[1.5em]">Parse and Sort CSV App</h1>

      <div className="flex justify-center">
        <SortDropdown
          options={sortOptions}
          selected={sortOrder}
          onChange={setSortOrder}
        />
      </div>

      <div className="mt-10 px-[2em]">
        <ItemList data={sortedItems} />
      </div>
    </div>
  );
}
