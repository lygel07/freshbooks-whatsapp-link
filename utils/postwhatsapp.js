const twilio = require('twilio');

const accountSid  =  process.env.ACCSID; 
const authToken   =  process.env.AUTHTOK; 
const client      =  require('twilio')(accountSid, authToken); 
let shareLink;
let mobNo

module.exports= (shareLink,mobNo)=>{
  client.messages 
  .create({ 
     body: `Here is your share link ${shareLink}`, 
     from: 'whatsapp:+14155238886',       
     to: `whatsapp:${mobNo}` 
   }) 
  .then(message => console.log(message.sid)) 
  .catch(error=>{
    console.log(error);
  })
  .done();
  
}