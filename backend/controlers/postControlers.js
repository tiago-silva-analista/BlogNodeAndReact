//const connection = require('../database/connection');

module.exports = {async index (request,response){
         const data= {
            titulo: "Meu primeiro Post",
            conteudo:"Era uma vez...",
            autor: "Tiago Santos"
         }
        
         return response.json(data);
    }    
    
};