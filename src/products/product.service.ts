import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import NormalizedResponse from 'src/utils/normalized-response';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  public async create(createProductDto: CreateProductDto) {
    return new NormalizedResponse(
      `Product ${createProductDto.name} has been registered`,
      await this.prisma.products.create({
        data: {
          Name: createProductDto.name,
          Description: createProductDto.description,
          Price: createProductDto.price,
          Author: {
            connect: {
              UUID: createProductDto.owner_uuid,
            },
          },
        },
      }),
    ).toJSON();
  }
  findAll() {
    return 'Doit retourner Tous les PRODUCTS'
  }
  public async getProductsByUserUUID(userUUID: string) {
    return new NormalizedResponse(
      `Products of user '${userUUID}' uuid has been found`,
      await this.prisma.products.findMany({
        where: {
          Author: {
            UUID: userUUID,
          },
        },
      }),
    ).toJSON();
  }

  public async deleteProductsByUserUUID(userUUID: string) {
    return new NormalizedResponse(
      `Products for user '${userUUID}' uuid has been deleted`,
      await this.prisma.products.deleteMany({
        where: {
          Author: {
            UUID: userUUID,
          },
        },
      }),
    ).toJSON();
  }

  public async getByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been found`,
      await this.prisma.products.findUnique({
        where: {
          UUID: uuid,
        },
      }),
    ).toJSON();
  }

  public async updateByUUID(uuid: string, updateProductDto: UpdateProductDto) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been updated`,
      await this.prisma.products.update({
        where: {
          UUID: uuid,
        },
        data: {
          Name: updateProductDto.name,
          Description: updateProductDto.description,
          Price: updateProductDto.price,
        },
      }),
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid} has been deleted'`,
      await this.prisma.products.delete({ where: { UUID: uuid } }),
    ).toJSON();
  }
}