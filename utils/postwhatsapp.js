const twilio = require('twilio');

const accountSid  =  process.env.ACCSID; 
const authToken   =  process.env.AUTHTOK; 
const client      =  require('twilio')(accountSid, authToken); 
let share_link;
let mobNo

module.exports= (share_link,mobNo)=>{
  client.messages 
  .create({ 
     body: `Here is your share link ${share_link}`, 
     from: 'whatsapp:+14155238886',       
     to: `whatsapp:${mobNo}` 
   }) 
  .then(message => console.log(message.sid)) 
  .catch(error=>{
    console.log(error);
  })
  .done();
  
}