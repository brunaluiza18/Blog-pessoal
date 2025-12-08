import { TemaService } from './../../tema/services/tema.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    findA11(): Promise<postagem[]> {
        throw new Error("Method not implemented.");
    }
    constructor(
        @InjectRepository(postagem)
        private postagemRepository: Repository<postagem>,
        private temaService: TemaService
    ) { }

    async findAll(): Promise<postagem[]> {
        return await this.postagemRepository.find({
            relations:{
                tema: true
            }
        });
    }

    async findById(id: number): Promise<postagem> {

        let postagem = await this.postagemRepository.findOne({
            where: {
                id
            },
            relations:{
                tema: true
            }
        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async findByTitulo(titulo: string): Promise<postagem[]> {
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                tema: true
            }
        })
    }

    async create(postagem: postagem): Promise<postagem> {
       
        if (postagem.tema){
            
            let tema = await this.temaService.findById(postagem.tema.id)

            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
            
            return await this.postagemRepository.save(postagem);

        }

        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: postagem): Promise<postagem> {
        
        let buscaPostagem: postagem = await this.findById(postagem.id);

        if (!buscaPostagem || !postagem.id)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        if (postagem.tema){
            
            let tema = await this.temaService.findById(postagem.tema.id)
                
            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
                
            return await this.postagemRepository.save(postagem);
    
        }
        
        return await this.postagemRepository.save(postagem);
    }
    
    async delete(id: number): Promise<DeleteResult> {
        
        let buscaPostagem = await this.findById(id);

        if (!buscaPostagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);

    }

}