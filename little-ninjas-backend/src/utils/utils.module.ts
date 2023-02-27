import { Module, Global} from '@nestjs/common';
import { JwtHelper } from './jwt.helper';

const services = [JwtHelper];

@Global()
@Module({
    providers: [...services],
    exports: services,
})
export class UtilsModule { }
