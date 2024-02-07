
import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";
import mongoose from "mongoose";

const homeStart = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel turpis vulputate, cursus quam et, dapibus nisl. Mauris condimentum vestibulum sapien, sed bibendum turpis bibendum non. Donec mi odio, aliquam vel nibh vitae, rhoncus aliquet nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.";
const aboutContent = "Praesent nec fringilla leo. Aliquam erat volutpat. Donec mollis posuere sem, sit amet vulputate est hendrerit quis. Cras porttitor at turpis vel molestie. Fusce posuere, justo vitae convallis molestie, ex dui facilisis purus, sit amet consequat velit est nec quam. Etiam porta vulputate ex, a porttitor tortor lobortis id. Morbi congue et augue eget vestibulum.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.";
const contactContent = "Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.Nulla facilisi. Sed sed nisi vulputate, euismod ipsum nec, pellentesque nibh. Donec nulla felis, imperdiet eu varius non, pellentesque non quam. Morbi rutrum lorem ac est lacinia laoreet. Nam bibendum ut ligula at consectetur. Fusce pharetra tincidunt elementum. Cras viverra nibh vitae porta varius.";

const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/blogDB");
//{useNewUrlParser: true, useUnifiedTopology:true}

const postSchema ={
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {


 // res.render("index",{Start:homeStart,p:post} );
 Post.find({}).then((posts)=>
 {
 res.render("index",{
   Start:homeStart,
   blogs:posts
 });
})  
});
app.get("/about", (req, res) => {


  res.render("about",{Start:aboutContent} );
});
app.get("/contact", (req, res) => {


  res.render("contact",{Start:contactContent} );
});
app.get("/compose", (req, res) => {


  res.render("compose" );
});

app.get("/post/:postName",async(req,res)=>{

  const requestName = _.lowerCase(req.params.postName);
 const blog  = await Post.findOne({title:requestName});

 if(blog )
 {
  
  res.render("posts",{
    titles :blog.title,
    contents : blog.content
  });
 }
 else{
  res.send("Post not found");
 }
   });



app.post("/compose",(req,res)=>{

 const postingData = new Post({
      title: req.body.postTitle,
      content : req.body.postBody
 });
 postingData.save().then(()=>{
  res.redirect("/");
   }).catch((err)=>{
    console.log(err);
   });
})



 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




























