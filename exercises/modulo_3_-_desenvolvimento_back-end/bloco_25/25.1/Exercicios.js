// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO".
use("erp");
db.clientes.aggregate([
  {
    $match: { sexo: "MASCULINO" }
  },
  // { $count: "contagem"}
]);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.
use("erp");
db.clientes.aggregate([
  {
    $match: {
        sexo: "FEMININO",
        dataNascimento: {
          $gte: ISODate("1995-01-01"),
          $lte: ISODate("2005-12-31")
        }
    }
  }
]);

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5.
use("erp");
db.clientes.aggregate([
  {
    $match: {
        sexo: "FEMININO",
        dataNascimento: {
          $gte: ISODate("1995-01-01"),
          $lte: ISODate("2005-12-31")
        }
    }
  },
  { $limit: 5 }
]);

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
use("erp");
db.clientes.aggregate([
  { $match: { "endereco.uf": "SC" } },
  {
    $group: {
      _id: "SC",
      totalDeClientes: { $sum: 1 }
    }
  }
]);

// Exercício 5: Agrupe os clientes por sexo. Retorne o total de clientes de cada sexo no campo total.
use("erp");
db.clientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      totalDeClientes: { $sum: 1 }
    }
  }
]);


// Exercício 6: Agrupe os clientes por sexo e uf. Retorne o total de clientes de cada sexo no campo total.
use("erp");
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        UF: "$endereco.uf"
      },
      totalDeClientes: { $sum: 1 }
    }
  },
  //{ $sort: { "_id.sexo": 1, "_id.UF": 1 } }
]);

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
// {
//   "estado": "SP",
//   "sexo": "MASCULINO",
//   "total": 100
// }
use("erp");
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        UF: "$endereco.uf"
      },
      totalDeClientes: { $sum: 1 }
    }
  },
  {
    $project:{
      _id: 0,
      estado: "$_id.UF",
      sexo: "$_id.sexo",
      total: "$totalDeClientes"
    }
  }
]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.
use("erp");
db.vendas.aggregate([
  { $match: { status: { $in: ["EM SEPARACAO", "AGUARDANDO PAGAMENTO"] } } },
  {
    $group: {
      _id: "$clienteId",
      totalGasto: { $sum: "$valorTotal" }
    }
  },
  { $sort: { totalGasto: -1 } },
  { $limit: 5 }
]);

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019.
use("erp");
db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["EM SEPARACAO", "AGUARDANDO PAGAMENTO"] },
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalGasto: { $sum: "$valorTotal" }
    }
  },
  { $sort: { totalGasto: -1 } },
  { $limit: 10 }
]);

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
// Dica: O operador $count pode simplificar sua query.
use("erp");
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalDeCompras: {$sum: 1}
    }
  },
  { $match: { totalDeCompras: { $gt: 5 } } },
  { $count: "totalDeClientes" }
]);

// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.
use("erp");
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalDeCompras: {$sum: 1}
    }
  },
  { $match: { totalDeCompras: { $lt: 3 } } },
  { $count: "totalDeClientes" }
]);


// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020. Retorne os documentos no seguinte formato:
// {
//   "totalVendas": 10,
//   "uf": "SP"
// }
use("erp");
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-12-31")
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId" ,
      foreignField: "clienteId",
      as: "clienteResponsavel"
    }
  },
  { $unwind: "$clienteResponsavel" },
  {
    $group: {
      totalVendas: { $sum: 1 },
      _id: "$clienteResponsavel.endereco.uf"
    }
  },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
  ]);

// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019. Ordene os resultados pelo nome da uf. Retorne os documentos no seguinte formato:
// {
//   "_id": "MG",
//   "mediaVendas": 9407.129225352113,
//   "totalVendas": 142
// }

use("erp");
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId" ,
      foreignField: "clienteId",
      as: "clienteResponsavel"
    }
  },
  { $unwind: "$clienteResponsavel" },
  {
    $group: {
      _id: "$clienteResponsavel.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } },
  ]);
