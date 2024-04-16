# diowallet-api

### 1 - Instalando o 'Express'
npm i express

### 2 - Instalando o 'nodemon' em ambiente de desenvolviment
npm i -D nodemon

## server.js

### 3 - Criando 'server.js' o servidor principal da aplicação
src > server.js

### 4 - Importando o Express
Para importar o Express from 'express' é preciso que o projeto seja modular. Para isso, ir em 'package.json' e adicione o 'type: module'

### 5 - Armazenando a execução do Express
Armazenando a execução do Express. Tudo que tiver no Express será armazenado na constante 'app'

### 6 - Criando a primeira rota
Ligue o meu servidor e fique ouvindo na porta 5000 e coloque uma mensagem pra o usuário

### 7 - Abrindo a porta '.get'
Imaginando que no passo anterior eu passei o endereço e a porta até a minha casa, nesse passo irei abrir uma porta 'banheiro' ao usuário e dizer o que ele pode fazer lá. Ele pode receber uma requisição 'req' e retornar uma resposta 'res' ( o código foi removido, pois seu lugar é em '/routes')
// 7 - Abrindo a porta '.get'
// app.get("/banheiro", (req, res) => {
//   res.send("Faça suas necessidades")
// })

## Atualizar o server automaticamente
Neste ponto, se o servidor já estiver ligado, não será possível encontrar a rota '/banheiro' pois ele não atualizou. Para contornar esta situação e fazer o server acompanhar as mudanças, devemos rodar o server com o nodemon **npx nodemon src/server.js**

## Requisições
Usando a extensão **Thunder Client** no VSCode para fazer as requisições

## Arquitetura
Arquitetura em camadas: escolhida porque é de fácil manutenção, com arquivos isolados. Dessa maneira, cada camada terá a sua responsabilidade.

Em **src**,

- **config:** onde vai ser configurado o banco de dados;
- **controllers:** os controladores de requisição e resposta (funções) - pegam e tratam a requisição para então devolver uma resposta. Porém, só haverá uma resposta se o banco devolver algo;
- **service:** valida a requisição a partir da regra de negócio;
- **repositories:** arquivos que acessam o banco de dados;
- **routes:** arquivos que possuem o nome da rota,que mapeiam quais são os acessos que vão existir na API.

As **rota** vai chamar o **controller** que vai administrar a entrada e saída. O **service** vai validar a regra de negócio dos dados, o **repositories** vai acessar o **banco de dados**, que por sua vez, vai inserir essas informações. E então a resposta percorre o caminho contrário.


## /Routes
Aqui serão construídas as rotas do sistema.

### 8 - authRoutes.js
Importando o pacote de 'Router' do 'Express';

### 9 - const authRouter - (authRouter.js)
Recebendo a execução do pacote 'Router()'

### 10 - Criar um novo usuário - (authRouter.js)
Toda criação utiliza o método **Post**.
Essa rota '/signup' chama um controller 'authController' que terá a função 'signup'

### 11 - Exportando o Router - (authRouter.js)
Exportando, de maneira padrão, para conseguir importar no servidor

### 12 - Importando o Router - (server.js)
import authRouter from "./routes/authRoutes.js";

### 13 - Implementando authRouter - (server.js)
app, use essa rota (que no caso seria a rota do passo 12)



## Controllers

### 14 - authController.js
Ele vai ter o gerenciamento de requisições e respostas, através de uma função

### 15 - Criando a função signup
Ela pode receber uma requisição **req** e uma resposta **res**.
Exportando como objeto 'export default { signup }'

### 16 - Armazenando as informações do fomulário
```js
const body = req.body; 
```
Tudo que vem do formulário será armazenado na const 'body'

### 17 - Validando as informações
Para validar, será preciso ir a um serviço 'authService' que irá chamar sua função 'signup', diferente da 'signup' do Controller.

### 18 - Importando o Controller


## Services

## 19 - Criando a função 'signup' do Service