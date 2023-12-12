import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): string;
    getProductsByUserUUID(userUUID: string): Promise<{
        message: string;
        data: any;
    }>;
    deleteProductsByUserUUID(userUUID: string): Promise<{
        message: string;
        data: any;
    }>;
    getByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
    updateByUUID(uuid: string, updateProductDto: UpdateProductDto): Promise<{
        message: string;
        data: any;
    }>;
    deleteByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
}
