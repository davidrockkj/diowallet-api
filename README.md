# diowallet-api

### 1 - Instalando o 'Express'
npm i express

### 2 - Instalando o 'nodemon' em ambiente de desenvolviment
npm i -D nodemon

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