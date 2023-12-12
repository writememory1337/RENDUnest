import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): string;
    getByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
    updateByUUID(uuid: string, updateProductDto: UpdateProductDto): Promise<{
        message: string;
        data: any;
    }>;
}
