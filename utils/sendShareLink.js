const postWhatsapp = require('./postWhatsapp');
const clientId = process.env.CLIENTID;
const token = process.env.TOKEN;

let accountId;
let invoiceId;



module.exports = async (accountId,invoiceId)=>{
    try {
        const { Client } = await import("@freshbooks/api");
        const app = new Client(clientId,token);
        const shareLink = await app.invoices.shareLink(accountId,invoiceId);
        const invoiceInfo = await app.invoices.single(accountId,invoiceId);
        const client  = await app.clients.single(accountId,invoiceInfo.data.customerId);   


        postWhatsapp(shareLink.data.shareLink, client.data.mobPhone);
      
      } catch (error) {
      console.log(error);  
    }
    
};


 