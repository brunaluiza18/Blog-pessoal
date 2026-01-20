# Blog Pessoal - API REST 🚀

Este é o projeto de Back-end do Blog Pessoal, uma API robusta desenvolvida para gerenciar postagens, temas e utilizadores. O projeto foca em segurança, escalabilidade e boas práticas de desenvolvimento.

## 🛠️ Tecnologias Utilizadas
* **Node.js** com framework **NestJS**
* **TypeScript**
* **TypeORM** (Mapeamento Objeto-Relacional)
* **MySQL** (Base de dados)
* **Swagger** (Documentação da API)
* **Bcrypt** (Criptografia de senhas)

## 🔑 Funcionalidades
- **Autenticação:** Sistema de Login com geração de Token JWT.
- **Segurança:** Proteção de rotas e armazenamento seguro de palavras-passe.
- **CRUD Completo:** Criação, Listagem, Atualização e Eliminação de Postagens e Temas.
- **Relacionamentos:** Implementação de relações One-to-Many entre Temas e Postagens.

## 📖 Como executar o projeto
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure a sua base de dados MySQL no ficheiro `.env`.
4. Execute o projeto: `npm run start:dev`.
5. Aceda à documentação Swagger em: `http://localhost:4000/swagger`.
