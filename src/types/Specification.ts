import { Attribute } from './Attribute';

export type Specification = {
    id: string; // 20 chars
    name: string; // 40 chars
    version: number;
    attributes: Attribute[]
};