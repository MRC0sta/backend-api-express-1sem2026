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

### Comandos prisma

Instalacoes
- npm i prisma -D
- npm i dotenv -D

Mysql e Mariadb

Init
npx prisma init --datasource-provider mysql --output ../generated/prisma/prisma

npm install @prisma/client @prisma/adapter-mariadb mariadb