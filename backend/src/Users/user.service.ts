import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectModel } from "@nestjs/sequelize";
import { createUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRipository: typeof User) {

    }
    async createUser(dto: createUserDto) {
        const user = await this.userRipository.create(dto);
        return user
    }
    async getUsers() {
        const users = await this.userRipository.findAll()
        return users;
    }
}