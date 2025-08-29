# NoSQL-Café

Este projeto é um exercício prático que demonstra o uso do Redis como um banco
de dados NoSQL para gerenciar um carrinho de compras de uma cafeteria online. A
aplicação permite que os usuários adicionem itens ao carrinho e finalizem o
pedido, que é então armazenado no Redis.

## Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ryguigas0/espm-nosql-cafe
    cd espm-nosql-cafe
    ```
2.  **Inicie o contêiner do Redis com o Docker Compose:**
    ```bash
    docker-compose up -d
    ```
3.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor:**
    ```bash
    npm start
    ```

Depois de seguir estes passos, a aplicação estará rodando em `http://localhost:3000`.
