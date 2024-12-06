import encryptData from "../utils/crypto.js";
import connectDB from "../db/connectDB.js";

// get data
async function getData(req, res) {
  const query = `
    SELECT * from nt where trackdate >= '2024-12-5' and trackdate <= '2024-12-5' ;`;

  try {
    const pool = await connectDB();

    const result = await pool.request().query(query);
    console.log("Data is sent");

    // console.log("Result data is : ",result)

    if(!result){
      return console.log("result data is invalid")
  
    }

    const enc_data = encryptData(result.recordset)
    return res.status(200).json(
      enc_data
    );

   

  } catch (error) {
    console.log("error occured");
    console.log(error);
  }
}

export { getData };
