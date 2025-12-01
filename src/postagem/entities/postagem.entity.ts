import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

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

@UpdateDateColumn()
    data: Date 

}