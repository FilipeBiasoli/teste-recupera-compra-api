# Teste Recupera Compra - API

Esse repositório contém a API do teste para a empresa **Recupera Compra**.

## Indíce

- [Observações](#observações)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Rotas](#rotas)

## Observações

- Instale a extenção [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) no seu Visual Studio Code para manter uma consistência na formatação do código.

## Requisitos

- [NodeJS (v16.14.0)](https://nodejs.org/en/)
- [MySQL (v8.0.31)](https://www.mysql.com/)

## Instalação

Para iniciar as configurações clone o projeto

```bash
git clone https://github.com/FilipeBiasoli/teste-recupera-compra-api.git
```

Acesse a pasta raiz do projeto e instale as dependências:

```cmd
npm install
```

**Variáveis de ambiente:**

Configure as variáveis de ambiente criando um arquivo `.env` na raíz do projeto, usando o arquivo `.env.example` como referência. Preencha as credenciais referentes a _Server Connection_ com as informações de seu ambiente. Caso o valor seja vazio, deixe em branco.

**Banco de dados**

Ainda no arquivo `.env` preencha as credenciais referentes a _Database SQL Connection_ com as informações do seu banco de dados. Caso o valor seja vazio, deixe em branco.

Crie seu banco de dados:

```cmd
npm run create_database
```

Crie/atualize as tabelas do seu banco de dados executando o comando de _Data Migration_:

```cmd
npm run migrations
```

Execute o comando de _Database Seeding_ para preencher/atualizar o banco de dados com o conjunto de informações essenciais e de exemplo:

```cmd
npm run seeds
```

Inicie o projeto:

```cmd
npm start
```

## Rotas
