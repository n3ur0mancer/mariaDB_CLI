const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user:'root',
    password: 'root',
    database: 'lib_index',
    connectionLimit: 5
});

async function bookFinder() {
    let connection;
    try {
        connection = await pool.getConnection();
        const argument = process.argv[2];
        //const tuples = await connection.query("SELECT book_title FROM books WHERE book_title=?", argument);
        //const tuplesLib = await connection.query("SELECT book_library FROM books WHERE book_title=?", argument);
        //console.log(tuples, tuplesLib);

        const book_query = await connection.query
        ("SELECT books.book_title AS book, libraries.library_name AS library FROM books JOIN libraries ON books.book_ID = libraries.library_FK where books.book_title LIKE concat('%', ?, '%')", argument);
        console.log(book_query);

    } catch (err){
        throw err;
    } finally {
        if (connection) connection.release();
    }
}
bookFinder();
