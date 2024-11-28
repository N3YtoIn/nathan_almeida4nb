| Version        | Dev             | Project        |
|----------------|-----------------|----------------|
|1.0             |Nathan. A        |Back-End        |

### Link do Front-End
https://github.com/GabeeDevs/FinalProjectFront

### ⚠ Front-End feito junto com o [GabeeDevs](#https://github.com/GabeeDevs) ⚠

---

#  📚 BookStore 📚 #
O projeto "BookStore" inclui funcionalidades de Gerenciamento de Usuários, como login e register, para autenticação e cadastro, além do registro de livros em um banco de dados. Tudo foi desenvolvido utilizando TypeScript no padrão MVC, integrando o Back-end ao Front-end para garantir funcionalidade, segurança e organização do sistema.

## Índice
- [📚 BookStore 📚](#-bookstore-)
  - [Índice](#índice)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
    - [Back-End](#back-end)
    - [Front-End](#front-end)
    - [Requisitos](#requisitos)
  - [Funcionalidades Implementadas](#funcionalidades-implementadas)
    - [Gerenciamento de Usuários](#gerenciamento-de-usuários)
    - [Gerenciamento de Livros](#gerenciamento-de-livros)
    - [Arquitetura MVC](#arquitetura-mvc)
    - [Banco de Dados Estruturado](#banco-de-dados-estruturado)
  - [Funcionalidades Não Implementadas](#funcionalidades-não-implementadas)
    - [Interface Avançada](#interface-avançada)
    - [Autenticação Avançada](#autenticação-avançada)
    - [Escalabilidade para Grande Volume](#escalabilidade-para-grande-volume)
    - [Testes Automatizados Completos](#testes-automatizados-completos)
    - [Controle de Permissões Avançado](#controle-de-permissões-avançado)
  - [Instalação do Projeto](#instalação-do-projeto)
    - [Clonando Projeto e Instalando Dependencias](#clonando-projeto-e-instalando-dependencias)
    - [Configurando Banco de Dados e Iniciando o Servidor](#configurando-banco-de-dados-e-iniciando-o-servidor)
    - [Comandos de Teste](#comandos-de-teste)
    - [Utilizando o Front-End](#utilizando-o-front-end)
  - [Agradecimentos](#agradecimentos)

---

## Sobre o Projeto

O projeto "BookStore" foi desenvolvido como parte dos aprendizados obtidos durante as aulas do curso de Análise e Desenvolvimento de Sistemas na Faculdade Unifecaf. Seu principal objetivo foi proporcionar uma compreensão prática sobre como estruturar um banco de dados utilizando TypeScript, seguindo o padrão arquitetural MVC (Model-View-Controller).

Incluiu funcionalidades de Gerenciamento de Usuários, permitindo a implementação de operações como login e register, essenciais para autenticação e registro de novos usuários no sistema. Além disso, foi desenvolvido o módulo de registro e gerenciamento de livros, onde os dados das obras literárias podem ser armazenados e consultados.

Essas funcionalidades foram implementadas de forma integrada ao banco de dados e ao modelo MVC, garantindo a separação clara entre a lógica de negócios, a manipulação de dados e a interface com o usuário. O objetivo foi criar um sistema funcional, seguro e escalável, proporcionando uma experiência completa de aprendizado e aplicação prática dos conceitos de desenvolvimento de software.


## Tecnologias Utilizadas
### Back-End
- **Node.js**  
- **Express.js**  
- **TypeScript**  
- **PostgreSQL**  
- **Jest**
- **Supertest**

### Front-End
- **HTML5**
- **CSS3**
- **JavaScript**

### Requisitos
- **Visual Studio Code**
- **Node.JS - Version 18 ou Superior**
- **PostgreSQL - Atualizar em "bookstore/src/config/database.ts" com uma conexão externa**


## Funcionalidades Implementadas
### Gerenciamento de Usuários

- Cadastro (Register) e Login de usuários.
- Validação de credenciais para autenticação.
  
### Gerenciamento de Livros

- Registro e consulta de livros no banco de dados.
- Organização e estruturação dos dados dos livros.
- Integração Back-end e Front-end:
- Comunicação eficiente entre o banco de dados e a interface de usuário.
  
### Arquitetura MVC

- Implementação seguindo o padrão Model-View-Controller para maior organização e escalabilidade.

### Banco de Dados Estruturado

- Utilização de um banco de dados relacional para armazenar informações de usuários e livros.


## Funcionalidades Não Implementadas
### Interface Avançada

- O projeto não prioriza a criação de um design visual sofisticado, focando mais na funcionalidade do sistema.

### Autenticação Avançada

- Não foram implementados recursos como autenticação por OAuth, dois fatores (2FA) ou recuperação de senha.

### Escalabilidade para Grande Volume

- O sistema foi projetado para aprendizado e pode não suportar grandes volumes de dados ou alto tráfego sem ajustes.

### Testes Automatizados Completos

- Embora tenha sido testado com o Front-end, não inclui um conjunto robusto de testes automatizados.
  
### Controle de Permissões Avançado

- Não possui níveis de permissão diferenciados para usuários (ex.: administrador vs. cliente).


## Instalação do Projeto
### Clonando Projeto e Instalando Dependencias

- Inicie o Git no seu VSCODE:  
`git init`

- Clone o Reposítorio do Projeto:  
`git clone https://github.com/N3YtoIn/nathan_almeida4nb`

- Acesse a pasta:  
`cd bookstore`

- Instale as implementação que precisarão para o funcionamento do código:  
`npm install express pg`   
`npm install --save-dev typescript jest @types/jest ts-jest supertest @types/express`   
`npm install cors`

### Configurando Banco de Dados e Iniciando o Servidor

- Verifique se a Conexão do Postgree está Online
- Configure a conexão alterando o campo `const connectionString = '';` com sua conexão externa.
- Utilize os comandos abaixo para criar as tabelas em SQL para o seu banco de dados
`npx ts-node src/migrations/bookMigrations.ts`  
`npx ts-node src/migrations/userMigrations.ts`

- Caso tenha seguido tudo corretamente, inicie o servidor com o comando:  
`npx ts-node src/server.ts`

### Comandos de Teste

- Utilize os Arquivos 'requestBooks.http' localizado em "bookstore/src/services/requestBooks.http" para utilizar as requisições de livros.

- Utilize os Arquivos 'requestUsers.http' localizado em "bookstore/src/services/requestUsers.http" para utilizar as requisições de livros.

### Utilizando o Front-End

- Com os comando funcionando e com o servidor ainda inicializado, acesse o link do front-end anexado no inicio do projeto para utilização em HTML.


## Agradecimentos

Agradecemos por utilizar o banco de dados do projeto **BookStore**, resultado de muito aprendizado e dedicação. Aproveitamos para parabenizar o professor **Afonso** por suas excelentes aulas, que foram fundamentais para o desenvolvimento deste trabalho, e à Faculdade **UNIFECAF** por proporcionar uma formação de qualidade. Este projeto reflete o conhecimento adquirido e a prática de conceitos essenciais no curso de Análise e Desenvolvimento de Sistemas.

"Projeto desenvolvido por **Nathan Almeida Brito**, no 4º semestre do curso de **Análise e Desenvolvimento de Sistemas**, durante as aulas de **Back-End** na Faculdade **UNIFECAF**."