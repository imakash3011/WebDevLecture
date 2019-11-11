const sqlite=require('sqlite3')
const DB_PATH = __dirname + '/test.db' 

const db = new sqlite.Database(DB_PATH)
db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS tasks
        (
            id INTEGER AUTO_INCREMENT PRIMARY KEY,
            name TEXT,
            done BOOLEAN
        )`
    )
    //to insert any new task open
    // and to read any inserted database goto the db-read.js file and apply condition or simply read the file 
    // and to read the file using DB browser click on the test.db containing folder and open the folder using DB browser
    db.run(
        `INSERT INTO tasks VALUES(5,'do my task',true)`
    )

})