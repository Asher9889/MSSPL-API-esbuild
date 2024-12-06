import sql from "mssql";

const config = {
    server: '103.12.1.132', 
    port: 8138,           
    database: 'Inventory21Nov', 
    user: 'msspl',          
    password: 'P@$$word2024', 
    options: {
        encrypt: true,      // Encrypts the connection (use true if connecting to Azure)
        trustServerCertificate: true, // Use only for development/testing
        multipleActiveResultSets: true // Allows multiple active result sets
    }
};


// Connect 
async function connectDB(){
  try {
     const connection = await sql.connect(config)
    //  console.log(connection);
     console.log("Connection to the server connected SuccessFully.")
     return connection;
  } catch (error) {
    console.log(error);
  }

//    .then(pool => {
//         return pool.request()
//             .query('SELECT * FROM YourTable'); // Replace with your SQL query
//     }).then(result => {
//         console.log(result.recordset); // Display query results
//     }).catch(err => {
//         console.error('SQL error:', err);
//     }).finally(() => {
//         sql.close(); // Close the connection when done
//     });
}

export default connectDB;

