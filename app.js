const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user:'root',
    password: 'root',
    database: 'books',
    connectionLimit: 5
});

async function bookFinder() {
    let connection;
    try {
        connection = await pool.getConnection();
        const argument = process.argv[2];
        const tuples = await connection.query("SELECT book_title FROM books WHERE book_title=?", argument);
        const tuplesLib = await connection.query("SELECT book_library FROM books WHERE book_title=?", argument);
        console.log(tuples, tuplesLib);
    } catch (err){
        throw err;
    } finally {
        if (connection) connection.release();
    }
}
bookFinder();
