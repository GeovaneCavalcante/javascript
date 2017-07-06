

module.exports = function(application) {

  application.get('/noticias', function(req, res){

    var connection = application.config.dbConnection();
    var modelNoticia = application.app.models.modelNoticia;

    modelNoticia.getNoticias(connection, function(error, result){
      res.render('noticias/noticias', {noticias: result});
    });

  });

}
