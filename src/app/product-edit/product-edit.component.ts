import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { HttpProductService } from '../shared/service/http-product.service';
import { TestProductsService } from '../shared/service/test-products.service';
import { MyWorker, MyWorkerType } from '../shared/models/myproducts.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {


  personForm: FormGroup;
  disabledForms = false;
  @Output() addProduct = new EventEmitter<MyWorker>();
  @Input() title: string;

  myWorkerType = MyWorkerType;

  constructor(private testProductsService: TestProductsService, private httpProductService: HttpProductService) { }

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
      ]),
    })
  }

  async onAddProduct() {
    this.addProduct.emit(this.personForm.value);
  }
}
