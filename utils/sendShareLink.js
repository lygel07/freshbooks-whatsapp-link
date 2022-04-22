const postwhatsapp = require('./postwhatsapp');
const clientId = process.env.CLIENTID;
const token = process.env.TOKEN;

let accountId;
let invoiceId;
let share_link;


module.exports = async (accountId,invoiceId)=>{
    try {
        const { Client } = await import("@freshbooks/api");
        const app = new Client(clientId,token);
        const share_link = await app.invoices.shareLink(accountId,invoiceId);
        const invoiceInfo = await app.invoices.single(accountId,invoiceId);
        const client  = await app.clients.single(accountId,invoiceInfo.data.customerId);   


        postwhatsapp(share_link.data.shareLink, client.data.mobPhone);
      
      } catch (error) {
      console.log(error);  
    }
    
};


 