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
        const clinetInfo  = await app.clients.single(accountId,invoiceInfo.data.customerId);   
//        console.log(invoiceInfo.data.customerId);
//        console.log(clinetInfo.data.mobPhone);
//        console.log(share_link.data)

        postwhatsapp(share_link.data.shareLink, clinetInfo.data.mobPhone);
      
      } catch (error) {
      console.log(error);  
    }
    
};


 