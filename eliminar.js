import pg from 'pg';
const pool = new pg.Pool({host:"localhost",
user:"susanamunoz",
password:"",
database: "ercompleto", 
port: 5432});

const $id = process.argv[2];

pool.query('delete from usuarios where id = $1', [$id], (err, res)=>{
    if (err){
        console.log(err);
    }else{
        console.log("Registro eliminado")
    }

})

pool.release