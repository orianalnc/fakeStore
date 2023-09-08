import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  products!: Products;
  id: number = 0;

  constructor(public productsServices: ProductsService, private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.productsServices
      .getDetail(this.id)
      .subscribe((response: Products) => {
        //console.log(response.results)
        this.products = response;
        console.log('Personaje Detail ', this.products);

      });


  }

  onBack() {
    this.router.navigate(['products']).catch((e) => console.error(e));
  }

}
