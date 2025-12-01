import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { postagem } from "../entities/postagem.entity";

@Controller("/portagens")   // indica que a classe é uma controller
export class postagemController {

    constructor(private readonly postagemService: PostagemService) { }

    @HttpCode(HttpStatus.OK) // monta a resposa http para front com status 200
    @Get() // indica qual tipo de requesicao esse metodo é executado
    findA11(): Promise<postagem[]> {
        return this.postagemService.findA11( )

    }

}