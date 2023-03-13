import { Jogador } from './interfaces/jogador.interface';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];

    private readonly logger = new Logger(JogadoresService.name);

    async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void>{

        this.logger.log(criarJogadorDto);
        
    }

    private criar(criarJogadorDto: CriarJogadorDto): void{

        const { nome, telefoneCelular, email} = criarJogadorDto;

        const jogador: Jogador = {
            
           _id: uuidv4(), 
           nome: nome,
           telefoneCelular: telefoneCelular,
           email: email
        }

    }
}
