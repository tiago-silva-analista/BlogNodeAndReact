const connection = require('../database/connection');


module.exports = {async index (request,response){
      
      
         const query = 'select 1 as A, 2 as B from sysibm.sysdummy1';
         const resp = connection.querySync(query);
         console.log(JSON.stringify(resp)); 

         const data= {
            titulo: "Meu primeiro Post",
            conteudo:"Era uma vez...",
            autor: "Tiago Santos"
         }
        
         return response.json(data);
    }    
    
};