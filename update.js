import pg from 'pg';
const { Pool } = pg;

const  pool = new Pool({host:"localhost",
user:"susanamunoz",
password:"",
database: "ercompleto", 
port: 5432});

const opcion = process.argv[2];
const valor = process.argv[3];
const id = process.argv[4];
let query;
if (opcion == 1){
    //modificar el nombre
   query = "update usuarios set nombre = $1 where id = $2"; 
}else if(opcion ==2){
    //modificar el apellido
    query = "update usuarios set apellido = $1 where id = $2"; 
}

pool.query(query,[valor,id],(err, res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Registro Actualizado");
    }
})

pool.release