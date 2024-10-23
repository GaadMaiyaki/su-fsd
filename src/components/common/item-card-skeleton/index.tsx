const ItemCardSkeleton = () => {
  return (
    <div className="flex items-start  bg-slate-600 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:opacity-90 duration-75 ease-in-out">
      <div className="flex items-start bg-slate-600 p-4 rounded-lg shadow-sm cursor-pointer animate-pulse">
        <div className="w-10 h-10 bg-gray-500 rounded-md"></div>

        <div className="ml-2 space-y-2">
          <div className="w-24 h-4 bg-gray-500 rounded"></div>
          <div className="w-40 h-6 bg-gray-500 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardSkeleton;
