"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const normalized_response_1 = require("../utils/normalized-response");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        return new normalized_response_1.default(`Product ${createProductDto.name} has been registered`, await this.prisma.products.create({
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
        })).toJSON();
    }
    findAll() {
        return 'Doit retourner Tous les PRODUCTS';
    }
    async getProductsByUserUUID(userUUID) {
        return new normalized_response_1.default(`Products of user '${userUUID}' uuid has been found`, await this.prisma.products.findMany({
            where: {
                Author: {
                    UUID: userUUID,
                },
            },
        })).toJSON();
    }
    async deleteProductsByUserUUID(userUUID) {
        return new normalized_response_1.default(`Products for user '${userUUID}' uuid has been deleted`, await this.prisma.products.deleteMany({
            where: {
                Author: {
                    UUID: userUUID,
                },
            },
        })).toJSON();
    }
    async getByUUID(uuid) {
        return new normalized_response_1.default(`Product for '${uuid}' uuid has been found`, await this.prisma.products.findUnique({
            where: {
                UUID: uuid,
            },
        })).toJSON();
    }
    async updateByUUID(uuid, updateProductDto) {
        return new normalized_response_1.default(`Product for '${uuid}' uuid has been updated`, await this.prisma.products.update({
            where: {
                UUID: uuid,
            },
            data: {
                Name: updateProductDto.name,
                Description: updateProductDto.description,
                Price: updateProductDto.price,
            },
        })).toJSON();
    }
    async deleteByUUID(uuid) {
        return new normalized_response_1.default(`Product for '${uuid} has been deleted'`, await this.prisma.products.delete({ where: { UUID: uuid } })).toJSON();
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map