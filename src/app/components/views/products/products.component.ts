import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items = [
    {id: 1, name: 'Televisão', price: 1500.30, image: "https://moveislinhares.vteximg.com.br/arquivos/ids/160285-800-800/108466-5.jpg?v=637190105909070000://brastemp.vtexassets.com/arquivos/ids/223742/Imagem-1_0.jpg?v=637699029302300000"},
    {id: 2, name: 'Geladeira', price: 2500, priceWithDescount: 2300.00, image: "https://brastemp.vtexassets.com/arquivos/ids/223742/Imagem-1_0.jpg?v=637699029302300000"},
    {id: 3, name: 'Iphone X', price: 4000, priceWithDescount: 3800.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629842709000"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
