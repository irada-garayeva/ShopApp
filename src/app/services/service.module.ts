import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, ProductService, CategoryService],
})
export class ServiceModule {}
