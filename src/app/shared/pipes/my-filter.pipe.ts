import { isNgTemplate } from '@angular/compiler';
import { Input, IterableDiffers, Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../models/myproducts.model';
import { HttpProductService } from '../service/http-product.service';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(workers: MyWorker[], nameFilter: string): MyWorker[] {

    if (nameFilter === '') {
        return workers;
    } else {
      // let filterWorker = workers.filter(
      //   (item) => item.firstName.indexOf(nameFilter) !== -1
      // );
      let filterWorker = workers.filter(function(itemName, itemSurname) {
        if (itemName.firstName.includes(nameFilter)) {
          return itemName.firstName.indexOf(nameFilter) !== -1;
        }
        else if (itemName.surname.includes(nameFilter)) {
          return itemName.surname.indexOf(nameFilter) !== -1;
        }
      })
      return filterWorker;
    }
  }

}
