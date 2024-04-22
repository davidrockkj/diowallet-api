# diowallet-api

### 1 - Instalando o 'Express'
```powershell
npm i express
```

### 2 - Instalando o 'nodemon' em ambiente de desenvolviment
```powershell
npm i -D nodemon
```

## server.js

### 3 - Criando 'server.js' o servidor principal da aplicação
```powershell
src > server.js
```

### 4 - Importando o Express
Para importar o Express from 'express' é preciso que o projeto seja modular. Para isso, ir em 'package.json' e adicione o 'type: module'

### 5 - Armazenando a execução do Express
Armazenando a execução do Express. Tudo que tiver no Express será armazenado na constante 'app'

### 6 - Criando a primeira rota
Ligue o meu servidor e fique ouvindo na porta 5000 e coloque uma mensagem pra o usuário

### 7 - Abrindo a porta '.get'
Imaginando que no passo anterior eu passei o endereço e a porta até a minha casa, nesse passo irei abrir uma porta 'banheiro' ao usuário e dizer o que ele pode fazer lá. Ele pode receber uma requisição 'req' e retornar uma resposta 'res' ( o código foi removido, pois seu lugar é em '/routes')
// 7 - Abrindo a porta '.get'
```js
app.get("/banheiro", (req, res) => {
  res.send("Faça suas necessidades")
})
```

## Atualizar o server automaticamente
Neste ponto, se o servidor já estiver ligado, não será possível encontrar a rota '/banheiro' pois ele não atualizou. Para contornar esta situação e fazer o server acompanhar as mudanças, devemos rodar o server com o nodemon 
```powershell
npx nodemon src/server.js
```

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
Armazenando a informação na constante 'resService'.

### 18 - Importando o Controller


## Services

### 19 - Criando a função 'signup' do Service

### 20 - importando o authService no authController

### 21 - Enviando a resposta da função

### 23 - Falando para o App usar JSON
Aqui é uma etapa muito importante. Pois, dizer ao Express que ele precisa estar pronto para receber arquivos em JSON e antes da rota 'app.use(authRouter)', que precisa que o JSON esteja habilitado. <br/>
A ordem em que ele é chamado importa, então ele deve vir entre a construção do *app* (express) e a *rota*. <br/>

O que acontece é o seguinte:
0 - Rodar o server 'npx nodemon src/server.js' <br/>
1 - Abrir o **Thunder Client** <br/>
2 - Criar uma **New Collection** a partir do menu, ao lado do input *filter collections* <br/>
  ![Criando New Collection](/src/screenshot/newCollection.png) aqui eu criei uma chamada *DioWallet* para esse projeto <br/>
3 - Crio uma nova request **POST** para **localhost:5000/banheiro** que é a porta que estamos usando nesse projeto <br/>
  ![Rota SIGNUP](/src/screenshot/rotaSignup.png) obs.: Não se usa form, se usa **JSON**<br/>
4 - Bato na rota '/signup', que tem um arquivo de **POST** <br/>
5 - '/signup' chama 'authController' <br/>
6 - Controller pegou o 'body' na requisição e enviou para o 'authService' <br/>
7 - O Service retornou o 'body' pro Controller na variável 'resService' <br/>
8 - O Controller retornou a variável para a rota <br/>
9 - Devolveu para o client (com o thunder client) <br/>


# Banco de Dados
Setup do MongoDB Atlas no Express

## MongoDB Atlas
Para criar o Banco de dados, estaremos utilizando o MongoDB Atlas, que é um serviço gratuito em nuvem.

1- Entrar no site do ![MongoDB Atlas](https://www.mongodb.com/) <br/>

2- Criar um novo projeto. No meu caso será chamado **diowallet**
  ![NovoProjeto](/src/screenshot/novoProjetoMDB.png) <br/>

3- Avance as próximas etapas até que chegue a parte do **Create a Deployment** <br/>

4- Escolha uma máquina gratuita (por motivos óbvios) e as próximas configurações foram as seguintes (São Paulo para ter um tempo de resposta menor):
  ![configMDB1](/src/screenshot/configMDB1.png) <br/>

5- Configurações de segurança
  ![configMDB2](/src/screenshot/configMDB2.png) clique em **Create Database User** <br/>

5- Método de conexão
  ![configMDB2](/src/screenshot/configMDB2.png) será **Drivers**, através da ODM **Mongoose** que gerencia as conexões de banco de dados para MongoDB <br/>
  ![configMDB3](/src/screenshot/configMDB3.png) ao selecionar o Driver como **Mongoose**, ele trará o comando para instalação do mesmo na aplicação
  ```powershell
  npm install mongoose
  ```


## Config
### database.js
Criando a configuração do banco de dados.

### 24 - Importando o mongoose - (database.js)

### 25 - Adicionando a URL de conexão com o MongoDB - (database.js)
```js
const mongoUrl = "mongodb+srv://admin:<password>@diowallet-cluster.nmprwtj.mongodb.net/?retryWrites=true&w=majority&appName=diowallet-cluster";
```
Note que nessa string existe uma parte **<password>** que é o local da senha que definimos na criação do banco de dados. Nesse caso, podemos substitui pela senha configurada

### 26 - Conectando com o MongoDB - (database.js)
Essa função **connect** devolve uma promessa (promisse) que pode demorar. Porém, o javascript e não espera nada, sai executando linha após linha. Por isso é necessário colocar o **await** antes da chamada. <br/>
PORÉM, o await **PRECISA** vir abaixo de uma função assíncrona, com isso adicionaremos **async** na função **connectDb()**
```js
export async function connectDb();
```

Ainda, não sabemos o que acontece no *MongoDB Atlas* (ou banco de dados qualquer), então é necessário fazer um **try** e um **catch**. <br/>

A leitura fica tipo: *tente conectar no mongoose. Se não der certo, jogue um erro ao **catch***

### 27 - Desconectando o banco de dados - (database.js)

### 28 - Importando e Rodando a função de conexão com o Banco de Dados  - (server.js)


## Configurando Variáveis de Ambiente
Por exemplo: A *conection string* que estamos usando possui dados extremamente delicados e não é legal deixar exposto mesmo que no back-end.
```js
"mongodb+srv://admin:admin@diowallet-cluster.nmprwtj.mongodb.net/?retryWrites=true&w=majority&appName=diowallet-cluster"
```

Para isso, existe o conceito de **Variáveis de Ambiente**, que são variáveis que configuramos em cada ambiente que estivermos.


### 29 - Criando o '.env' na raiz do projeto

### 30 - Movendo a connection string de 'database.js' para '.env'
Além de mover, implementando em 'database.js'. <br/>
Até o momento atual ele não irá funcionar. É necessário fazer o uso de uma biblioteca para conseguir acessar o arquivo '.env' em qualquer máquina. Lembrando que o '.env' não é versionado.

### 31 - Instalando o 'dotenv'
```powershell
npm i dotenv
```

### 32 - Importando o 'dotenv' em 'database.js'
```js
import "dotenv/config";
```

### 33 - Ajustando o implemento '.env' - (database.js)
No processo do Node tem um arquivo '.env'. Dentro do arquivo tem uma variável 'DATABASE_URI'.
```js
process.env.DATABASE_URI
```

### 34 - Passando a porta como variável de ambiente - (server.js) (.env)
E importando o '.env'; <br/>
Concatenando o console.log com template string para mostrar a porta


## Schemas com Mongoose
Definir como o usuário deve ser criado. No mongoDB, cada documento é um usuário dentro da collection.

Nessa pasta teremos um modelo para vários documentos que serão construídos.

Ele irá servir para que possamos criar, ler, atualizar, deletar **(CRUD)** cada documento da *Collection (tabelas)*. E a *collection* é acessada pelo **UserSchema**.

### 35 - schemas/User.js

### 36 - Criando uma constante
com o mongoose (irá aparecer a opção de importar com o mongoose)

### 37 - Configura o Schema a partir de um objeto
```js
const UserSchema = new Schema({
  // 37 - Configurando o Schema a partir de um objeto
  name: { type: String, required: true },
  email: { type: String, unique:true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
});
```

Dentro de **name**, por exemplo, definimos o tipo como *String* e como campo obrigatório através do *required*.<br/>
A diferença em **email** é a propriedade *unique*, para não ter o mesmo e-mail para outro usuário.<br/>
**createdAt**: o momento em que a conta foi criada. O *default: Date.now()* indica o momento "atual" em que ela foi criada, tirando a necessidade de se ter um *required*. <br/>
O Schema terá um ID. Porém, o ID de cada documento é gerado automaticamente pelo *mongoose*

### 38 - Exportando o Schema
Fala-se que o Schema é um *modelo* que no **Banco de Dados** vai ser chamado de **users**, referente ao *UserSchema*.
```js
export default model("users", UserSchema);
```

Ou seja, toda vez que for dado um comando:
```js
UserSchema.create
```
ele irá criar um novo usuário a partir do que foi configurado anteriormente
