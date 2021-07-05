import { Controller, Get, Param } from '@nestjs/common';
import { RecupererAlimentUsercase } from '../../../usecase/recuperer-aliment.usercase';
import { RecupererAlimentCommand } from '../../../usecase/commands/recuperer-aliment.command';
import { Aliment } from '../../../domain/frigo/aliment/aliment.model';

@Controller('aliments')
export class AlimentController {
  constructor(
    private readonly recupererAlimentUsercase: RecupererAlimentUsercase,
  ) {}

  @Get(':codebarre')
  async recupererAliment(
    @Param('codebarre') codebarre: string,
  ): Promise<Aliment> {
    const recupererAlimentCommand = new RecupererAlimentCommand();
    recupererAlimentCommand.codebarre = codebarre;
    return await this.recupererAlimentUsercase.execute(recupererAlimentCommand);
  }
}
