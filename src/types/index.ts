export type ItemProps = {
    createdAt: string;
    filename: string;
}

export enum SortOrder {
    CreatedAt = 'createdAt',
    FilenameAsc = 'filenameAsc',
    FilenameDesc = 'filenameDesc',
}

