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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const normalized_response_1 = require("../utils/normalized-response");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const createdUser = new normalized_response_1.default(`User ${createUserDto.pseudo} has been created`, await this.prisma.users.create({
            data: {
                Pseudo: createUserDto.pseudo,
                Mail: createUserDto.mail,
            },
        }));
        return createdUser.toJSON();
    }
    findAll() {
        return `This action returns all users`;
    }
    async getByUUID(uuid) {
        const gettedUser = new normalized_response_1.default(`User ${uuid} has been found`, await this.prisma.users.findUnique({
            where: {
                UUID: uuid,
            },
        }));
        return gettedUser.toJSON();
    }
    async updateByUUID(uuid, updateUserDto) {
        const updatedUser = new normalized_response_1.default(`User ${updateUserDto.pseudo} has been updated`, await this.prisma.users.update({
            where: {
                UUID: uuid,
            },
            data: {
                Pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
                Mail: !!updateUserDto.mail ? updateUserDto.mail : undefined,
            },
        }));
        return updatedUser.toJSON();
    }
    async deleteByUUID(uuid) {
        const deletedUser = new normalized_response_1.default(`User ${uuid} has been deleted`, await this.prisma.users.delete({
            where: {
                UUID: uuid,
            },
        }));
        return deletedUser.toJSON();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map