const path = require('path');
const gateway = require('express-gateway');

// const a1=express();


// a1.get('/hello',(req,res,next)=>{
//   res.send({"status":200,"message":"hellow world"});
// })


gateway()
  .load(path.join(__dirname, 'config'))
  .run();
