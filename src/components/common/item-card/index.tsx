import FileIcon from "@/components/icons/file";
import {ItemProps} from "@/types";

const ItemCard = ({createdAt, filename}: ItemProps) => {
  return (
    <div className="flex items-start  bg-slate-600 p-4 rounded-lg shadow-sm cursor-pointer hover:opacity-90 duration-75 ease-in-out">
      <FileIcon />

      <div className="ml-2">
        <h2 className="text-[0.9em] text-gray-100">{createdAt}</h2>
        <p className="mb-1 text-[1em] text-gray-100 font-semibold">
          {filename}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
