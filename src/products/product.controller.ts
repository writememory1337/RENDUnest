import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products') //decorateur de controller //préfixe global du controlleur (products) localhost3000/products/chemin, nest préfixe toutes les routes contenues dans le conteroller avec products
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  public create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  public findAll() {
    return this.productService.findAll();
  }

  @Get('')
  public getByUUID(@Param('uuid') uuid: string) {
    return this.productService.getByUUID(uuid);
  }
  @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateByUUID(uuid, updateProductDto);
  }
}