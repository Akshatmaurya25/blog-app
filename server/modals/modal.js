const mongoose = require('mongoose')

const Blog = new mongoose.Schema({
     user : {type:String, required: true},
     title : {type:String, required: true},
     date : {type:String, required: true},
     des : {type:String, required: true}, 
    },
    {
        collection: 'blog-data'
    }
)

Blog.pre('save', async function(next){
    if(Blog.isModified("title")){
        next()
    }
    try{
        const hash_pass = await bcrypt.hash(Blog.title, 10)
        Blog.title = hash_pass
    }
    catch(err){
        console.log(err)
    }
})



const model = mongoose.model('Blog', Blog)

module.exports = model