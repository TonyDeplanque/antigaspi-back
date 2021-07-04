import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { RecupererFrigoUsercase } from '../../../usecase/recuperer-frigo.usercase';
import { RecupererFrigoCommand } from '../../../usecase/commands/recuperer-frigo.command';
import { FrigoRepository } from '../../../domain/frigo/frigo.repository.interface';
import { CreerFrigoUsercase } from '../../../usecase/creer-frigo.usercase';
import { Frigo } from '../../../domain/frigo/frigo';

@Controller('frigos')
export class FrigoController {
  private recupererFrigoUsercase: RecupererFrigoUsercase;
  private creerFrigoUsercase: CreerFrigoUsercase;

  constructor(
    @Inject('FrigoRepository')
    frigoRepository: FrigoRepository,
  ) {
    this.recupererFrigoUsercase = new RecupererFrigoUsercase(frigoRepository);
    this.creerFrigoUsercase = new CreerFrigoUsercase(frigoRepository);
  }

  @Get(':id')
  recupererFrigo(@Param('id') id: number): Frigo {
    const recupererFrigoCommand = new RecupererFrigoCommand();
    recupererFrigoCommand.id = id;
    return this.recupererFrigoUsercase.execute(recupererFrigoCommand);
  }

  @Post('/')
  creerFrigo(): Frigo {
    return this.creerFrigoUsercase.execute();
  }
}
