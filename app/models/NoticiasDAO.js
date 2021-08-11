//funcao que acessa o banco de dados por query (classe em javascript)
function NoticiasDAO(connection){
	//Propriedade de conexao do Models
	this._connection = connection;
}
	//conexoes com BD através de query
NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}
	// devolvendo a noticia via parametro da ID
NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}
	//inserindo noticias no BD
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){	
	this._connection.query('insert into noticias set ? ', noticia, callback);
}
	//pegando as 5 ultimas noticias
NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}
	
module.exports = function(){
	return NoticiasDAO;
}