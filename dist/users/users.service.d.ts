import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): string;
    getByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
    updateByUUID(uuid: string, updateUserDto: UpdateUserDto): Promise<{
        message: string;
        data: any;
    }>;
    deleteByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
}
