const express = require("express");
const { param } = require("express/lib/request");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require ("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();


app.use(express.json()); // For accepting Json data 

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get('/api/chat', (req,res)=>{
    res.send(chats);
})
app.get('/api/chat/:id', (req,res)=>{
    // console.log(req);
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
})

app.use('/api/user',userRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));