// Faça a importação para sua instância do MongoDB: pelo terminal
// mongoimport --db erp <caminho_do_arquivo_clientes.json>
// mongoimport --db erp <caminho_do_arquivo_produtos.json>
// mongoimport --db erp <caminho_do_arquivo_vendas.json>

Conecte-se à sua instância e confira o número de documentos em cada coleção:
use("erp");
db.clientes.count(); // 499
db.produtos.count(); // 499
db.vendas.count(); // 4900