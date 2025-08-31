import app from "./app.ts"
import http from "http";
import dotenv from "dotenv";
import figlet from "figlet";
const server = http.createServer(app);
const PORT = process.env.PORT || 3000
dotenv.config();


server.listen(PORT, async() => {
  try{
    console.log(
     await figlet.text("Jaan Server Running", {font: "Standard"})
    )
  }catch(error){
    console.error(error);
  }
  // console.log(figlet.fontsSync())
});