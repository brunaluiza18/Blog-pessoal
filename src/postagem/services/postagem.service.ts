import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { postagem } from "../entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";


@Injectable() // indica que a classe é de servico e pode ser inserida/injetada em outras classes
export class PostagemService{

    //iniciando ferramentas para a classe de servico
    constructor(
        @InjectRepository(postagem) // pode chamar os metodos de uma classe repository
        private postagemRepository: Repository<postagem>
    ) { }

   async findA11(): Promise<postagem[]> {

    return await this.postagemRepository.find()

   }
   
   async findById(id: number):Promise<postagem>{
    const postagem = await this.postagemRepository.findOne({
        where: { id }
    })
      if(!postagem)
        throw new HttpException ('Postagem nao encontrada', HttpStatus.NOT_FOUND)
      

      return postagem 
   }

   async findA11ByTitulo(titulo: string): Promise<postagem[]> {
    return await this.postagemRepository.find({
        where:{
            titulo: ILike(`%${titulo}%`)
        }
    })
   }

   async create(postagem: postagem): Promise<postagem> {
    return await this.postagemRepository.save(postagem)
   }

   async update(postagem: postagem): Promise<postagem> {

    await this.findById(postagem.id)

    return await this.postagemRepository.save(postagem)

   }

   async delete(id: number): Promise<DeleteResult> {
    await this.findById(id)
    return await this.postagemRepository.delete(id)
   }

}
