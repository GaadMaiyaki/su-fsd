"use client";

import ItemCardSkeleton from "@/components/common/item-card-skeleton";
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
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<ItemProps[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.CreatedAt);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/getCsvItems");
        const data: ItemProps[] = await res.json();
        setItems(data);
      } catch (e) {
      } finally {
        //this artificial latency is just to showcase the skeleton loader. NOte: loading an external csv should not require this in order to achieve same.
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
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

      {isLoading ? (
        <div className="mt-10 px-[2em] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({length: 12}).map((_,i) => (
            <ItemCardSkeleton key={i}/>
          ))}
        </div>
      ) : (
        <div className="mt-10 px-[2em]">
          <ItemList data={sortedItems} />
        </div>
      )}
    </div>
  );
}
