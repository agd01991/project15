import { Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../models/myproducts.model';

@Pipe({
  name: 'surnameFilter'
})
export class SurnameFilterPipe implements PipeTransform {

  transform(workers: MyWorker[], nameFilter: string): MyWorker[] {
    if (nameFilter === '') {
      return workers;
    } else {
      let filteredWorkers = workers.filter(
        
        (item) => item.surname.indexOf(nameFilter) !== -1
      )
    }
  }

}
