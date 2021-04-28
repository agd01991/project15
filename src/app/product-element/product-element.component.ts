import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
// import { worker } from 'cluster';
import { MyWorker } from '../shared/models/myproducts.model';
import { HttpProductService } from '../shared/service/http-product.service';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.scss']
})
export class ProductElementComponent implements OnInit {

  @Input() title: string;
  @Input() workers: MyWorker[];
  @Output() deleteWorker = new EventEmitter<number>();

  nameFilter: string = '';

  constructor(public httpProductService: HttpProductService) { }

  ngOnInit(): void {
    this.getData();

  }

  async getData() {
    try {
      this.workers = await this.httpProductService.getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async onDeleteWorker(id: number) {
    try {
      await this.httpProductService.removeProduct(id).subscribe(
        () => console.log(`Worker with ID: ${id} deleted`),
        (err) => console.log(err)
      );
      this.deleteWorker.emit(id);
      this.getData();
    } catch (err) {
      console.log(err);
    } finally {
      this.getData();
    }
  }
}
