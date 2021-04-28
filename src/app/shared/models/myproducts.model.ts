export interface MyWorker {
  firstName: string;
  surname: string;
  type: number;
  phone: string;
  id?: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}
