const express = require("express");
const bodyParser = require("body-parser");
const checkTokenMiddleware = require('./checkTokenMiddleware');
const generateToken = require('./generate16DigitToken');

const app = express();
app.use(bodyParser.json());

const checkIdade = (req, res, next) => {
  if (req.body.age <= 17) {
    return res.json({
      message: "Unauthorized"
    });
  }
  next();
};

const salutationsUser = (req, res) => {
  res.status(200).json({
    message: `Hello, ${req.body.name}`
  });
};

//  Crie uma rota POST /signup
//    A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
//    Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
//    Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK , e o JSON { token: '<token-aleatorio>' } .
const crypto = require('crypto');

app.post("/signup", (req,res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) return res.status(401).json({
    message: "missing fields"
  });

  const myToken = generateToken();
  const secondToken = (crypto.randomBytes(8).toString('hex')).toUpperCase();

  return res.status(200).json({
    token: `${myToken}`,
    token2: `${secondToken}`
  });
});

app.use(checkTokenMiddleware);

//  Crie uma rota GET /ping
//    Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get("/ping", (_req, res) => {
  res.json(
    {
      message: 'pong'
    }
  )
});

//  Crie uma rota POST /hello
//    Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//    Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
// app.post("/hello", (req, res) => {
//   res.status(200).json({
//     message: `Hello, ${req.body.name}`
//   });
// });

app.post("/hello", salutationsUser);

//  Crie uma rota POST /greetings
//    Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
//    Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
//    Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
app.post("/greetings", checkIdade, salutationsUser);

//  Crie uma rota PUT /users/:name/:age .
//    Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res.json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`
  })
});

// Crie uma API de dados das personagens de Simpsons
//  Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
//  Utilize o modulo fs do Node para ler/escrever arquivos.
//  Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
//  Caso dê tudo certo, a resposta deve voltar com status 200 OK .
//  Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .
const rescue = require("express-rescue");
const { readSimpsons } = require('./readWriteSimpsons');

app.get('/simpsons', rescue(async (_req, res) => {
  const simpsonsList = await readSimpsons();

  res.status(200).json(simpsonsList);
}));

//  Crie um endpoint GET /simpsons/:id
//    O endpoint deve retornar o personagem com o id informado na URL da requisição.
//    Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
app.get("/simpsons/:id", rescue(async (req, res) => {
  const { id } = req.params;

  const simpsonsList = await readSimpsons();

  const mySimpson = simpsonsList.find(simpson => simpson.id === id);

  if (!mySimpson) res.status(404).json({ message: "Simpson not found"});

  res.status(200).json(mySimpson);
}));

//  Crie um endpoint POST /simpsons .
//    Este endpoint deve cadastrar novos personagens.
//    O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
//    Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
//    Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
const { writeSimpsons } = require('./readWriteSimpsons');

app.put("/simpsons" , rescue(async (req, res) => {
  const { id, name } = req.body;

  if ( !id || !name) res.status(500).send("Faltam dados de entrada");

  const simpsonsList = await readSimpsons();

  if (simpsonsList.map( ({id}) => id).includes(id)) res.status(409).json({
    message: "id already exists",
  });

  simpsonsList.push({id, name});

  await writeSimpsons(simpsonsList);

  res.status(204).end();
}));

app.use( ( err, _req, res, _next) => {
  res.status(500).send(`Internal Server Error: ${err.message}`);
});

app.listen(3000, () => {
  console.log("Iniciado app na porta 3000!")
});