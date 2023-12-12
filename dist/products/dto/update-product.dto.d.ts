import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/common").Type<Omit<CreateProductDto, "owner_uuid">>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    name: string;
    description: string;
    price: number;
}
export {};
