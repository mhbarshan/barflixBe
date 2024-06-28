const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
 
connectToMongo();
const app = express()
const port = 5000 

app.use(cors())
app.use(express.json())

const Channels = require("./model/Channels")

app.get("/getChannel", async (req,res) => {
    try {
      const channels = await Channels.find({});
      res.json(channels);
      // console.log(channels)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  });

app.listen(port, () => {
  // console.log(`BarFLix Backend listening on port http://localhost:${port}`)
})