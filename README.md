# Edu-Tech

Edu-Tech é uma plataforma educacional interativa construída com Vue.js e Nuxt.js para o frontend, e um backend baseado em Node.js com GraphQL, PostgreSQL e Redis.

## Como rodar a aplicação

### Frontend

1. Clone o repositório frontend:

   ```bash
   git clone <repo_url>
   ```

2. Acesse o diretório do frontend:

   ```bash
   cd EDU-TECH
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Como o backend roda na porta 3000, configurei o frontend para rodar na porta 3001:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação no navegador:
   ```bash
   http://localhost:3001
   ```

### Backend

1. Clone o repositório backend:

   ```bash
   git clone https://github.com/skore-io/challenge
   ```

2. Acesse o diretório do backend:

   ```bash
   cd backend
   ```

3. Instale o Docker e o Docker Compose, caso ainda não tenha.

4. Suba os serviços necessários (PostgreSQL e Redis):

   ```bash
   docker-compose up -d
   ```

5. Instale as dependências do projeto:

   ```bash
   nvm use && npm install
   ```

6. Configure o banco de dados:

   ```bash
   npm run db:migrate && npm run db:seed
   ```

7. Inicie o servidor:

   ```bash
   npm run start:dev
   ```

8. Acesse o Playground do GraphQL:
   👉 [http://localhost:3000/graphql](http://localhost:3000/graphql)

### Corrigindo o CORS no backend

Para permitir que o frontend consuma a API, foi necessário configurar o CORS no backend com a seguinte linha de código:

```javascript
app.enableCors({
  origin: 'http://localhost:3001',
})
```

### Rodando os testes

1. No Front-End, para rodar os testes:

   ```bash
   npm run test
   ```
