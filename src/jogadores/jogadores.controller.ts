import { JogadoresService } from './jogadores.service';
/* eslint-disable prettier/prettier */
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
  // eslint-disable-next-line prettier/prettier

  constructor(private readonly jogadoresService: JogadoresService){}
  
  @Post()
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto, ) {

    await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
  }

  @Get()
  async consultarJogadores(): Promise<Jogador[]>{

    return this.jogadoresService.consultarJogadores();
  }
}
