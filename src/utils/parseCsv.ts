import { ItemProps } from "../types";

export const parseCSV = (data: string): ItemProps[] | undefined => {

    if (!data) {
        return []
    }

    try {

        return data
            .trim()
            .split('\n')
            .map((line) => {
                const [createdAtStr, filename] = line.split(';');
                return { createdAt: new Date(createdAtStr), filename };
            });
    } catch (e) {
        throw new Error('Error occured while parsing data')
    }
}