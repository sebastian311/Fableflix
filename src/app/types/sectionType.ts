import { BookType } from "./bookType";

export interface SectionType {
    id: string;
    previousSectionId: string;
    nextSectionId: string;
    items: BookType[]
}