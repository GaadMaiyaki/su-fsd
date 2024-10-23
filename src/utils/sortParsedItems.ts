import { ItemProps } from "@/types";

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
        return a.filename.localeCompare(b.filename, undefined, { numeric: true });
    });
}

export const sortByFilenameDesc = (items: ItemProps[]): ItemProps[] => {
    if (items.length <= 0) return [];

    return sortByFilenameAsc(items).reverse();
}
