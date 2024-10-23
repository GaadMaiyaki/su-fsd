import { ItemProps } from "@/types";

const getFilenameParts = (filename: string): Array<string | number> => {
    return filename.split(/(\d+)/).map((part) =>
        Number.isNaN(Number(part)) ? part : Number(part)
    );
};


export const sortByCreatedAtAsc = (items: ItemProps[]): ItemProps[] => {
    if (items.length <= 0) return [];

    return [...items].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA.getTime() - dateB.getTime();
    });
};
export const sortByFilenameAsc = (items: ItemProps[]): ItemProps[] => {
    if (items.length <= 0) return [];


    return [...items].sort((a, b) => {

        const partsA = getFilenameParts(a.filename);
        const partsB = getFilenameParts(b.filename);

        for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
            const valA = partsA[i] ?? "";
            const valB = partsB[i] ?? "";

            if (valA !== valB) {
                if (typeof valA === "number" && typeof valB === "number") {
                    return valA - valB;
                }
                return valA.toString().localeCompare(valB.toString());
            }
        }
        return 0;

    });
}

export const sortByFilenameDesc = (items: ItemProps[]): ItemProps[] => {
    if (items.length <= 0) return [];

    return sortByFilenameAsc(items).reverse();
}
