// IWorker.ts
import { GenderEnum } from './GenderEnum'

export interface IWorker {
    id: number,
    name: string;
    age: number;
    gender: GenderEnum;
    salary: number;
}
