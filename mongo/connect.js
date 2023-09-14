const mongoose=require('mongoose')
require('dotenv').config({ path: '../.env' });

const connectionParams={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}
const uri = `mongodb+srv://Chasfat:Chasfat@cluster0.8hoq49x.mongodb.net/?retryWrites=true&w=majority`;
//const connection=mongoose.connect((uri,connectionParams).then(()=>console.log('Connected').catch((err)=>console.log(err))))


//module.exports=connection


// Connect to MongoDB
const connection=mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  module.exports=connection
