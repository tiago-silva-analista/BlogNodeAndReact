//const connection = require('../database/connection');

module.exports = {async index (request,response){
    const data= {
       conteudo:"Parabéns Gostei bastante do post",
       autor: "Tiago Santos"
    }
   
    return response.json(data);
}    

};