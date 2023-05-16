const { Pool } = require('pg');



const { portalSuspended } = require('pg-protocol/dist/messages');



const configf = {
    user : 'postgres',
    host : 'localhost',
    password : 'admin',
    database : 'library',
    port: '5433'
};

const pool = new Pool(config);
//INSERTAR LIBROS
const getBooks = async () =>{
    try{
         //console.log('Getting books');
        const res = await pool.query('select * from books'); //consulta asyncrona
        console.log(res.rows);
        pool.end(); //finalizar petición
    } catch (e){
        console.log(e);
    }
};

//INSERTAR USUARIOS
const insertUser = async () => {
    //'INSERT INTO users (username, password) VALUES("Ely, "E86")'
    try{
        const text = 'INSERT INTO users(username, password) VALUES($1, $2)'
        const values = [ 'Ely', 'E86'];
    
        const res = await pool.query(text, values); //Consulta asincrona
        console.log(res);
        pool.end();
    } catch (e){
        console.log(e);
    }
}

//ELIMINAR USUARIOS

const deleteUser = async () => {
    const text = 'DELETE FROM users WHERE username = $1';
    const value = ['Pedro'];

    const res = await pool.query(text, value);
    console.log(res);

}


//EDITAR USUARIOS
const editUser = async () => {
    const text = 'UPDATE users SET username = $1, password = $2 WHERE username = $3';
    const value  = ['Mateo ', 'Mat22', 'Ely'];

    const res = await pool.query(text, value);
    console.log(res);
}

//getBooks();
//insertUser();
//deleteUser();
editUser();