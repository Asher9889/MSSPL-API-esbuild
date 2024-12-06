import express from "express";
import dotenv from "dotenv"
import apiRoutes from "./routes/index.js"
// import cors from "cors"

const app = express();

// so that env varibale get loaded into environment variable asap as app starts.
dotenv.config();



// const cors = require('cors');

// const corsOptions = {
//     origin: 'http://your-frontend-domain.com', // Allow only your frontend
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Restrict methods
// };


// app.use(cors(corsOptions));





app.use("/api", apiRoutes)

app.listen(process.env.PORT, (req, res)=>{
    // res.send("App is listening from port" + port)
    console.log("App is listening from port " + process.env.PORT)
});



