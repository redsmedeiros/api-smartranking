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

    constructor(){}

    async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void>{

        const { email } = criarJogadorDto;

        const jogadorEncontrado = await this.jogadores.find( jogador => jogador.email === email);

        if(jogadorEncontrado){
            return await this.atualizar(jogadorEncontrado, criarJogadorDto);
        }else{
            await this.criar(criarJogadorDto);
        }

      
        
    }

    async consultarJogadores(): Promise<Jogador[]>{
        
        return await this.jogadores;
    }


    //metodo auxiliar

    private criar(criarJogadorDto: CriarJogadorDto): void{

        const { nome, telefoneCelular, email} = criarJogadorDto;

        const jogador: Jogador = {
            
           _id: uuidv4(), 
           nome: nome,
           telefoneCelular: telefoneCelular,
           email: email,
           ranking: 'A',
           posicaoRanking: 1,
           urlFotoJogador: "www"
        }

        this.logger.log(JSON.stringify(jogador));

        this.jogadores.push(jogador);

    }

    private atualizar(jogadorEncontrado: Jogador, criarJogadorDto: CriarJogadorDto): void{

        const { nome } = criarJogadorDto;

    }
}
