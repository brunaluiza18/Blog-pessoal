import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { postagem } from "../entities/postagem.entity";

@Controller("/postagens")   // indica que a classe é uma controller
export class postagemController {

    constructor(private readonly postagemService: PostagemService) { }

    @HttpCode(HttpStatus.OK) // monta a resposa http para front com status 200
    @Get() // indica qual tipo de requesicao esse metodo é executado
    async findA11(): Promise<postagem[]> {
        return this.postagemService.findA11( )

    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK) //
    findById(@Param('id',ParseIntPipe) id: number): Promise<postagem> {
        return this.postagemService.findById(id)

    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByA11Titulo(@Param('titulo')titulo: string): Promise<postagem[]> {
        return this.postagemService.findByTitulo(titulo)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: postagem): Promise<postagem> {
        return this.postagemService.create(postagem)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    upadate(@Body() postagem: postagem): Promise<postagem> {
        return this.postagemService.update(postagem)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id)
    }
}
