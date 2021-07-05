import { Controller, Get, Param, Post } from '@nestjs/common';
import { RecupererFrigoUsercase } from '../../../usecase/recuperer-frigo.usercase';
import { RecupererFrigoCommand } from '../../../usecase/commands/recuperer-frigo.command';
import { CreerFrigoUsercase } from '../../../usecase/creer-frigo.usercase';
import { Frigo } from '../../../domain/frigo/frigo';

@Controller('frigos')
export class FrigoController {
  constructor(
    private readonly recupererFrigoUsercase: RecupererFrigoUsercase,
    private readonly creerFrigoUsercase: CreerFrigoUsercase,
  ) {}

  @Get(':id')
  async recupererFrigo(@Param('id') id: number): Promise<Frigo> {
    const recupererFrigoCommand = new RecupererFrigoCommand();
    recupererFrigoCommand.id = id;
    return await this.recupererFrigoUsercase.execute(recupererFrigoCommand);
  }

  @Post('/')
  async creerFrigo(): Promise<Frigo> {
    return await this.creerFrigoUsercase.execute();
  }
}
