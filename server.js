const app = require("./index")

require("dotenv").config()
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Server Started on ${PORT}`)})