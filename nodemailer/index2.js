const nodemailer=require('nodemailer')
const htmll=require('./page.js')

async function main() {
    const transporter=nodemailer.createTransport({
        host:'gamail',
        port:465,
        secure:true,
        auth:{
            user :'onepiece28102000@gmail.com',
            pass:''
        }
    })
}