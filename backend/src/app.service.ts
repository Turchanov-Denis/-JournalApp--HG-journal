import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
export class AppService {
    getQuest(): string {
        return 'Rafu  quest'
    }
}