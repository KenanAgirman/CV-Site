import {JSX} from "react";

export interface Sections {
    id: string;
    label: string;
}
// dans api-interface.ts
export interface Coding {
    name: string;
    icon?: JSX.Element;
    color?: string;
}

export interface Languages {
    name:string,
}

export interface Databasse {
    name:string,
    icon?: JSX.Element;
    color?: string;

}
export interface Project {
    id: number;
    title: string;
    description: string;
    photos: string[];
    link:string;
}