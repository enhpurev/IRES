const express = require("express");
// express iig importloj awlaa
const notes = require("./data/notes")
// data // notes iig importolj awch baina
const dotenv = require("dotenv")
// dot env geed 1 file baigaa tuuniig importloj awlaa
const app = express();
// creates express to app
dotenv.config();

app.get("/",(req,res)=>
{
    res.send("API is running...");
}
);
app.get("/api/notes",(req,res)=>{
    res.json(notes);
});


app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=>n._id===req.params.id);
    res.send(note);
})

const PORT = process.env.PORT || 5000;



app.listen(PORT,console.log(`Server started on PORT ${PORT}`));
