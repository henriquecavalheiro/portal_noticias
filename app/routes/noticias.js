module.exports = function(application) {
	
	// SENDO /NOTICIAS NO NAVEGADOR, ELE EXECUTA O CONTROLLER NOTICIAS
	application.get('/noticias', function(req, res){
		application.app.controllers.noticias.noticias(application, req, res);		
		
	});

	application.get('/noticia', function(req, res){
		application.app.controllers.noticias.noticia(application, req, res);
		
	});

};