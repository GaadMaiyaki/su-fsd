export type ItemProps = {
    createdAt: Date;
    filename: string;
}

export enum SortOrder {
    CreatedAt = 'createdAt',
    FilenameAsc = 'filenameAsc',
    FilenameDesc = 'filenameDesc',
}

