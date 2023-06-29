import { IPhoto } from "./IPhoto";

export interface IItem {
    id: number;
    name: string;
    size: string;
    color: string;
    gender: string;
    available: boolean;
    url: string;
    photos: IPhoto[];
}