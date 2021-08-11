/* Usando module.exports com propriedades do escopo do projeto, recebendo as funcoes da aplicacao,
separando ainda mais as rotas das regras de negocio/logica, mantendo padrao MVC
*/
module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia: {}});
}


module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;	
		
		//Validando campos com express-validator com propriedade "assert"
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	var erros = req.validationErrors();

		//caso de algum erro no formulario, ele renderiza pra pagina do formulario novamente		
	if(erros) {
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return; //nao deixa o programa seguir
	}


		//criando conexao
	var connection = application.config.dbConnection();
		//criando estancia que vai receber os dados, recebendo a conexão como parâmetro
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});	


}