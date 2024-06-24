import mysql from "mysql2";

const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"ROHITPEN",
    database:"notes"
}).promise()

//we can also fetch the data in the below method
//   const result =await pool.query("SELECT * FROM notes");
// const rows=result[0];

export async function getNotes(){
    const [rows] =await pool.query("SELECT * FROM notes");
    return rows
}
export async function getNotes1(id){
    //in the below code w're are sending the id separately which is a way of sending the data to mysql to prevent it from getting attacked by other users
    const [rows]=await pool.query(`SELECT * FROM notes WHERE id=?`,[id])
    return rows;
}
export async function createNode(title,contents){
  const [result]=  await pool.query(
        `INSERT INTO notes (title,contents) VALUES (?,?)`,[title,contents]
    )
    const id = result.insertId;
    return getNotes1(id);

}

// const notes= await createNode("HELLO","ROHIY WKFRM");

// console.log(notes);
 
