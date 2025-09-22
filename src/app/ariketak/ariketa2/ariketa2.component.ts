// ariketa2.component.ts
import { Component } from '@angular/core';
// import IWorker bere kokapena zehaztuz
import { IWorker } from './IWorker';
// import GenderEnum bere kokapena zehaztuz
import { GenderEnum } from './GenderEnum';

@Component({
  selector: 'app-ariketa2',
  imports: [],
  templateUrl: './ariketa2.component.html',
  styleUrl: './ariketa2.component.css'
})
export class Ariketa2Component {

  workers: IWorker[] = [
    {
      id: 1,
      name: "1. Langilea",
      age: 20,
      gender: GenderEnum.M,
      salary: 20000
    },
    {
      id: 2,
      name: "2. Langilea",
      age: 20,
      gender: GenderEnum.M,
      salary: 20000
    },
    {
      id: 3,
      name: "3. Langilea",
      age: 20,
      gender: GenderEnum.M,
      salary: 20000
    }
  ];
  // lehenengo ariketa
  workerAriketa1: IWorker | undefined = this.getWorkerById(1);

  getWorkerById(idWorker: number): IWorker | undefined {
    return this.workers.find(worker => worker.id == idWorker)
  }

  // bigarren ariketa
  workerAriketa2: IWorker | undefined;

}
