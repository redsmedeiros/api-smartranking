/* eslint-disable prettier/prettier */
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('api/v1/jogadores')
export class JogadoresController {
  // eslint-disable-next-line prettier/prettier
  
  @Post()
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto, ) {
    
    const { email } = criarJogadorDto;

    return JSON.stringify(`
     {
      "nome": ${email}
     } 
    `);
  }
}
