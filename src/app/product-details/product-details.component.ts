import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'awbw-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productDetail?: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct | undefined) {
    if (!product){
      return '';
    }
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedProductClasses(product: IProduct |undefined) {
    if (!product) {
      return [];
    }

    // Option 1: return an Object
    // { strikethrough: product.discount > 0, red: product.discount > 0 }

    // Option 2: return a string
    /*
    if (product.discount > 0) {
      return 'strikethrough red';
    }
    else{
      return '';
    }
    */

    // Option 3: return an array of strings
    if (product.discount > 0) {
      return ['strikethrough', 'red'];
    }
    else{
      return [];
    }
  }

  buyButtonClicked(product: IProduct | undefined) {
    if (!product) {
      return;
    }

    this.buy.emit();
  }
}
