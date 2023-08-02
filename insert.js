import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({host:"localhost",
user:"susanamunoz",
password:"",
database: "ercompleto", 
port: 5432});

const nombre = process.argv[2];
const apellido = process.argv[3];
const fecha = process.argv[4];
const rut = process.argv[5];
const dv = process.argv[6];

pool.query("insert into usuarios (nombre, apellido, fecha_nacimiento, rut, dv) values ($1, $2, $3, $4, $5)",[nombre, apellido, fecha, rut, dv], (err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("registro insertado");
    }
});

