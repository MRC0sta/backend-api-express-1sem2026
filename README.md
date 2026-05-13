# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
- O que é Node.js?
- O que é NPM?
- O que é Express.js?
- Como mudar o formato de importação de "require" (padrão common.js) para module -> package.json e mudar para: "type": "module"
- O que é HTTP?
- Quais os métodos de requisição HTTP e para que serve cada um deles?
- Para que serve o router do Express?
- O que é um padrão de projeto?
- O que é o padrão de projeto MVC?
- Qual a responsabilidade de cada Camada?
- O que é um ORM?
- Quais as vantagens de utilizar um ORM?
- Como utilizar parametros de Url?
- O que é Middleware? (Exemplo Logger)

--------- Próximos Tópicos

-Validação de Dados com Zod
    -Para que serve a biblioteca do Zod?
    -Para que serve a função Partial?
    -Qual a diferença do parse para o safeParse?
-Tratamento de Erros
    -Qual o papel do ErrorHandler?
    -Quais errors devem ser tratados pelo ErrorHandler e quais devem ser tratados no try catch do controller?
    -Quais os parametros de entrada de um middleware de ErrorHandler?
-Query Params (/user/?name=matheus)
    - Como capturar um parametro query da url no Controller?
    - Para que sao utilizados em geral os query params?

-Autenticação com JWT

Comandos Prisma
-Instalação
npm i prisma -D
npm i dotenv para Mysql e Mariadb npm install @prisma/client @prisma/adapter-mariadb mariadb

-Inicia o Prisma
npx prisma init --datasource-provider mysql --output ../generated/prisma

-Gera o banco de dados a partir do schema do prisma
npx prisma db push

-Gera o schema do prisma a partir do banco de dados
npx prisma db push

-Gerar as funções para interagir com os modelos mapeados no schema
npx prisma generate