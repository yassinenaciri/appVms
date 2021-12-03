const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = global.Promise;


const atlasUrl="mongodb+srv://yassinenaciri:yassinenaciri@cluster0.kdigw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose
  .connect("mongodb+srv://yassine:yassine@cluster0.ckwvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });



const commentSchema = new mongoose.Schema(
  {  
    nom :String,
    ip :String,
    os :String,
    etat :Boolean
  }
);

const vm = mongoose.model("vm", commentSchema);

module.exports = vm;