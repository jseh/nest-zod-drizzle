import { Body, Controller, Get, Inject, Post, Query, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto, createCatSchema } from '../dtos/create-cat.dto';
import { ZodValidationPipe } from '../dtos/zod-validation.pipe';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '../db/schema';
// import { usuarios } from '../db/schema';
import { createQueryparamsDto, QueryparamsDto } from '../dtos/queryparams.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('DB_PROD') private db: MySql2Database<typeof schema>,
  ) {}

  @Get()
  async getHello() {
    // const d = await this.db.select().from(usuarios);
    // console.log(d);
    return 'ok';
  }

  @UsePipes(new ZodValidationPipe(createCatSchema))
  @Post('/zod')
  nameFunc(@Body() dto: CreateCatDto): string {
    console.log(dto);
    return 'ok';
  }

  @UsePipes(new ZodValidationPipe(createQueryparamsDto))
  @Get('/zod')
  nameFunc2(@Query() dto: QueryparamsDto): string {
    console.log(dto);
    return 'ok';
  }


}
