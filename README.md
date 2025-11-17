Projeto afim de aplicar o conhecimento de backend/frontend.

Estrutura do projeto:

1- Temos o arquivo package.json pra controlar as dependencias do projeto que são:
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "helmet": "^8.1.0",
    "morgan": "^1.10.1",
    "pg": "^8.16.3"

2- Routes é a pasta que terá as rotas da API definidas para uso.

3- Controllers é a pasta que recebera as requisições e passam a logica para services.

4- Services tera as funções do projeto

4- Middlewares terá a função de tratar erros, autenticação e validação.

5- Models sera usado para definir a estrutura dos dados.