import ItemCardSkeleton from "@/components/common/item-card-skeleton";

const Loading = () => {
  return (
    <div className="mt-10 px-[2em] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({length: 12}).map((_, i) => (
        <ItemCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default Loading;
