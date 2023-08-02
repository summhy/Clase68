import pg from 'pg';
const {Client} = pg;

const configuracion = {host:"localhost",
                       user:"susanamunoz",
                       password:"",
                       database: "ercompleto", 
                       port: 5432};
const client = new Client(configuracion); //creando el cliente de la base de

client.connect();

client.query("select * from usuarios",(err, res)=>{
    if(err){
        console.log(err);
    }else{
        console.table(res.rows);
    }
});

client.end

