const connection = require('../database/connection');


module.exports = {async index (request,response){
      
      
         const query = 'select * from BPN07917.POSTS';
         const data = connection.querySync(query);
         console.log(data); 
        
         return response.json(data);
    },
    
    async create(request,response){

      try{
         const query = `INSERT INTO BPN07917.POSTS (cdTitle, dsContent, dsAuthor) VALUES ('${request.query.title}','${request.query.content}','${request.query.author}')`;
         const data = connection.querySync(query);
         console.log(data);      
         return response.json('Command Executed with success!');
      }catch(error){
         return response.status(500).json(`Message: The command Failed. ${error} `)
      }

    }
    
};