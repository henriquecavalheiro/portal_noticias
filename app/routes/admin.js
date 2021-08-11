module.exports = function(application){
	//RECEBENDO VIA PROTOCOLO HTTP DA PAGINA FORMULARIO_INCLUSAO_NOTICIAS
	application.get('/formulario_inclusao_noticia', function(req, res){
			
			application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
	});

	// RECEBENDO DADOS VIA POST DO FORMULARIO DE NOTICIAS
	application.post('/noticias/salvar' , function(req, res){
		application.app.controllers.admin.noticias_salvar(application, req, res);		
	});
};