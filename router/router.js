'use scrict'

const Pag1 = require('../controllers/pag1'); //aquí estamos importando la función pag1 que está en esa ubicación ('../etc)

const router = (request, response) => { //función callback
    if(request.url === '/pag1') { //si el cliente escribe algo que es === a '/pag1' entonces se ejecutan las siguientes líneas.
        var result = Pag1(request); //primero se declara una variable antes de proseguir con la siguiente función, en vez de pasar directamente al response, es más propio
        response.end(result);
    } else {
        response.end("You are in default website");
    }    
};


module.exports = router; //para exportar toda la función guardada en la const router