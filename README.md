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

### Cadastrar um usuário:

- **POST** --> `/user/create`

```json
{
  "name": "Flavia Oliveira",
  "email": "flavia.oliveira@gmail.com"
}
```

Siga a hierarquia do objeto exemplificada acima. Segue abaixo uma tabela com os valores aceitos pelo corpo da requisição:

| Nome  | Valor       | Descrição         | Obrigatório | Padrão |
| ----- | ----------- | ----------------- | ----------- | ------ |
| name  | string(35)  | Nome do usuário   | &check;     |        |
| email | string(255) | E-mail do usuário | &check;     |        |

Não é possível criar dois usuários com o mesmo e-mail.

### Editar cadastro de um usuário:

- **PUT** --> `/user/update/:user_id`

No caminho da requisição substitua `:user_id` pelo ID do usuário que deseja editar.

```json
{
  "name": "Joyce Sampaio",
  "email": "joyce.sampaio@gmail.com"
}
```

| Nome  | Valor       | Descrição         | Obrigatório | Padrão |
| ----- | ----------- | ----------------- | ----------- | ------ |
| name  | string(35)  | Nome do usuário   |             |        |
| email | string(255) | E-mail do usuário |             |        |

### Obter um usuário pelo ID:

- **GET** --> `/user/get_id/:user_id`

No caminho da requisição substitua `:user_id` pelo ID do usuário que deseja retornar.

### Pesquisar por usuários:

Retorna uma lista de usuários segundo o valor da busca.

- **GET** --> `/user/search/:search`

No caminho da requisição substitua `:search` pelo termo a ser buscado.

Você pode buscar pelo **nome** ou **e-mail** de um usuário.

A busca é feita por um termo em qualquer posição do campo, ou seja, não importa se você buscou por um termo completo ou por parte dele, será retornado.

### Excluir um usuário:

- **DELETE** --> `/user/delete/:user_id`

No caminho da requisição substitua `:user_id` pelo ID do usuário que deseja excluir.

### Cadastrar uma categoria:

- **POST** --> `/category/create`

```json
{
  "name": "Supermercado",
  "description": "Destinado ao comércio de alimentos, bebidas, utensílios domésticos, produtos pet e, às vezes, eletrônicos e utensílios domésticos."
}
```

Siga a hierarquia do objeto exemplificada acima. Segue abaixo uma tabela com os valores aceitos pelo corpo da requisição:

| Nome        | Valor       | Descrição              | Obrigatório | Padrão |
| ----------- | ----------- | ---------------------- | ----------- | ------ |
| name        | string(35)  | Nome da categoria      | &check;     |        |
| description | string(150) | Descrição da categoria |             | _null_ |

### Editar cadastro de uma categoria:

- **PUT** --> `/category/update/:category_id`

No caminho da requisição substitua `:category_id` pelo ID do categoria que deseja editar.

```json
{
  "name": "Departamento",
  "description": "Destinado ao comércio de sapatos, roupas, acessórios, cosméticos, jóias, artigos de decoração, camas, mesas, banho e muito mais."
}
```

| Nome        | Valor       | Descrição              | Obrigatório | Padrão |
| ----------- | ----------- | ---------------------- | ----------- | ------ |
| name        | string(35)  | Nome da categoria      |             |        |
| description | string(150) | Descrição da categoria |             | _null_ |

### Obter uma categoria pelo ID:

- **GET** --> `/category/get_id/:category_id`

No caminho da requisição substitua `:category_id` pelo ID do categoria que deseja retornar.

### Excluir uma categoria:

- **DELETE** --> `/category/delete/:category_id`

No caminho da requisição substitua `:category_id` pelo ID do categoria que deseja excluir.
