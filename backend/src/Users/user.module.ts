import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./user.controller";
import { AppService } from "./user.service";
import { User } from "./users.model";


@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [SequelizeModule.forFeature([User])]
})

export class UserModule {

}