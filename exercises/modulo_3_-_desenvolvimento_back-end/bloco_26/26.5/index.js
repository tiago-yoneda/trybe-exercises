const express = require('express');
const middlewares = require('./middlewares/index');
const bodyParser = require('body-parser');

const listenPort = 3000;

const app = express();
app.use(bodyParser.json());
// Atividade 1:
// Rota: /login
// Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.
app.put('/login', middlewares.checkLogin, middlewares.generateToken);

// Atividade 2:
// Rota: /btc/price
// Objetivo: Receber uma requisição com um token e verificar se ele está correto. O formato do token deve ser uma string de 12 caracteres contendo letras e números. Caso o formato do token esteja incorreto, devolva o erro como resposta invalid token. . Caso o formato do token esteja correto, faça um fetch em uma API externa de sua preferencia e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O token será passado pelo header da seguinte forma: Authorization: asd65asd5sd8
const fetch = require('node-fetch');
// npm install node-fetch

app.get('/btc/price', middlewares.checkToken, async (_req, res) => {

  const endpoint = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";

  const data = await fetch(endpoint).then(response => response.json());

  res.status(200).json(data);

});

// Atividade 3:
// Rotas: /posts/:id e /posts
// Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id . Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem id not found. . A rota /posts deve trazer todos os posts cadastrados.
const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
];

app.get('/posts', (_req, res) => {
  res.status(200).json({
    posts,
  });
});

app.get('/posts/:id', (req, res) => {
  const myId = parseInt(req.params.id);


  const myUser = posts.find(({id}) => id === myId);


  if(!myUser) {
    return res.status(404).json({
      message: "id not found",
    });
  };

  res.status(200).json(
    myUser
  )
});

// Atividade 4:
// Rota: /user/:name
// Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found. .
const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]

app.get('/user/:name', (req, res) => {
  const myName = req.params.name;

  const myUser = users.find(({ user }) => user === myName);

  if(!myUser) return res.status(404).json({
    message: "user not found"
  });

  res.status(200).json(
    myUser.comments
  )
});

// Atividade 5:
// Rota: /:operacao/:numero1/:numero2
// Objetivo: Deve validar a operação e retornar o resultado da mesma. As operações podem ser soma , subtração , divisão ou multiplicação . Regra: Um middleware deve ser usado para cada operação. A operação deve ser recebida como parâmetro na rota.
app.get('/:operacao/:numero1/:numero2', (req, res) => {
  const { operacao } = req.params;
  const numero1 = parseInt(req.params.numero1);
  const numero2 = parseInt(req.params.numero2);

  switch (operacao) {
    case 'soma':
      return res.status(200).json({
        resultado: numero1 + numero2
      });
    default:
      return res.status(406).json({
        message: "operacao invalida"
      });
  };
// ver como fazer com middlewares separas para cada operacao
  res.status(200).json({
    operacao,
    numero1,
    numero2
  });
});

// Atividade 6:
// Rota: /recipe/:id
// Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro recipe not found .
// Use o array abaixo para simular o banco de dados:
let recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredientes:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredientes:['ovo']
  }
];

app.delete('/recipe/:id', (req, res) => {
  const myId  = parseInt(req.params.id);

  const myRecipe = recipes.find(({id}) => id === myId);

  if(!myRecipe) return res.status(404).json({
    message: "recipe not found"
  });

  recipes = recipes.filter(({id}) => id !== myId);

  res.status(200).json({
    receitaDeletada: myRecipe,
    receitasRestantes: recipes,
  });
});




app.listen(listenPort, () => {
  console.log(`App working on port ${listenPort}`);
});