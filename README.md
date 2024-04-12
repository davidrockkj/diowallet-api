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
Imaginando que no passo anterior eu passei o endereço e a porta até a minha casa, nesse passo irei abrir uma porta 'banheiro' ao usuário e dizer o que ele pode fazer lá. Ele pode receber uma requisição 'req' e retornar uma resposta 'res'

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