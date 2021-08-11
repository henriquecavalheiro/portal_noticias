module.exports.index = function(application, req, res) {

    //criando conexoes
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //funcao que pega as ultimas 5 noticias
    noticiasModel.get5UltimasNoticias(function(error, result){
        res.render("home/index", {noticias : result});
    });

   
}