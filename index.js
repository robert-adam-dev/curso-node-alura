const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/database/conexao');
const Tabelas = require('./infraestrutura/database/tabelas');
const app = customExpress();

conexao.connect(erro => {
    if (erro){
        console.log("Caiu aqui");
        console.log(erro);
    } else {
        console.log('conectado com sucesso');
        Tabelas.init(conexao);
        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
})
