import { Component, OnInit, Optional } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/models/myproducts.model';
import { HttpProductService } from './shared/service/http-product.service';
import { MyFirstService } from './shared/service/my-first.service';
import { TestProductsService } from './shared/service/test-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'project14';

  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  constructor(
    private myFirstService: MyFirstService,
    private testProductsService: TestProductsService,
    private httpProductService: HttpProductService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type);
  }

  async getData() {
    try {
      this.workers = await this.httpProductService.getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async onAddProduct(event: MyWorker) {
    try {
      await this.httpProductService.postProduct(event);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  async onEditWorker(event: MyWorker) {
    try {
      await this.httpProductService.postProduct(event);
    } catch (err) {
      console.log(err);
    }
    finally {
      this.getData();
    }
  }
}
