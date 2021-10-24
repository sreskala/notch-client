export interface Post {
    id: number;
    title: string;
    description: string;
    category: string;
    dateCreated: Date;
    dateUpdated?: Date;
}