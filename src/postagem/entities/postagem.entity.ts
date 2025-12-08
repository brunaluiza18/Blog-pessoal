import { IsNotEmpty } from "class-validator"
import { Tema } from "src/tema/entities/tema.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_postagem"}) //incando que a classe é uma entitidade/model
export class postagem{

@PrimaryGeneratedColumn() // Chave primaria e auto incremental
 id: number

@IsNotEmpty() // Validador de objeto
@Column({ length: 100, nullable: false }) // Regra do MySql - NOT NULL
 titulo: string

@IsNotEmpty() // Validador de objeto
@Column({ length: 1000, nullable: false }) // Regra do MySql - NOT NULL
texto: string

@OneToMany(() => postagem, (postagem) => postagem.tema)
postagem: postagem[]

@UpdateDateColumn()
    data: Date 

@ManyToOne(() => Tema, (tema) => tema.postagem,{// Define um relacionamento MUITOS para UM (ManyToOne)
    onDelete: "CASCADE"// Garante que ao deletar um Tema, todas as Postagens associadas a ele sejam removidas automaticamente
})
tema: Tema // Cria o atributo "tema" na entidade atual onde sera criada uma chave estrangeira (FK) no banco de dados

}