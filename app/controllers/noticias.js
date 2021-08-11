module.exports.noticias = function(application, req, res){
    //CRIANDO CONEXOES
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //MODEL QUE RECUPERA AS NOTICIAS, E DEVOLVE O RESULTADO DA CONSULTA PRA VIEW NOTICIAS
    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});
    });	

}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //declarando variavel de requisicao da noticia via parametro url
    var id_noticia = req.query;

	noticiasModel.getNoticia(id_noticia, function(error, result){
		res.render("noticias/noticia", {noticia : result});
	});	

}