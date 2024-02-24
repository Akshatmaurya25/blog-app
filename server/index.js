const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Blog = require("./modals/modal")
const jwt = require("jsonwebtoken")


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Blog-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((e) => {
    console.log("Connected to MongoDB");
   
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(2525,()=>{
    console.log("Listening to 2525 port")
})

app.post('/addArticle', (req, res) => {
  Blog.create(req.body)
  .then(result => res.json({msg : result, token : Blog.generateToken() }))
  .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  });
});

Blog.methods.generateToken =  function(){
  try{
    
  }
  catch(err){
    console.log(err)
  }
}

app.get('/articles', (req, res) => {
  Blog.find()
    .then(articles => {
      res.json(articles);
      // console.log(articles)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
