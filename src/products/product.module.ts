import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [ProductService, PrismaService],
  })
  export class ProductModule {}