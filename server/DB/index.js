const mysql = require('mysql');
const con = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root" ,
    database: 'shoopingmart',
    port: '3306'
    
})

let database = {};
database.all = ()=>{
    return new Promise((resolve, reject) =>{
        con.query('select * from shop' ,(err,results)=>{
            if(err)
            {
                
                return reject(err);
             
            }
            console.log("Connected! stupod");
            return resolve(results)
        })
    })
}  

module.exports = database