import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from '../shared/models/myproducts.model';
import { HttpProductService } from '../shared/service/http-product.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.scss']
})
export class EditWorkerComponent implements OnInit {

  personForm: FormGroup;
  disabledForms = false;

  workers: MyWorker[];

  id: number;
  name: string;
  surname: string;
  type = 0;
  phone: string;
  myWorkerType = MyWorkerType;

  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() editById = new EventEmitter<number>();
  @Output() deleteWorker = new EventEmitter<number>();

  @Output() addProduct = new EventEmitter<MyWorker>();

  constructor(public httpProductService: HttpProductService) { }

  ngOnInit(): void {

    this.personForm = new FormGroup({
      id: new FormControl({ value: 0, disabled: this.disabledForms }, [
        Validators.required,
      ]),
      firstName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      surname: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      type: new FormControl({ value: 0, disabled: this.disabledForms }, [
        Validators.required,
      ]),
      phone: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ])
    })
  }

  async getData() {
    try {
      this.workers = await this.httpProductService.getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async onEditWorker(id: number) {
    try {
      await this.httpProductService.removeProduct(id).subscribe(
        () => console.log(`Worker with ID: ${id} deleted`),
        (err) => console.log(err)
      );
      await this.httpProductService.postProduct(this.personForm.value);
      console.log(`Worker with ID: ${id} has added`);
      this.deleteWorker.emit(id);
      this.addProduct.emit(this.personForm.value);
    } catch (err) {
      console.log(err);
    }
    finally {
      this.getData();
    }
  }
}
