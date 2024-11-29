const nodemailer = require("nodemailer");
const {htmlContent} = require("./page.js");

const emailHTML = htmlContent('walid bouricha', 'johndoe@example.com', 'securepassword123');

// Configuration du transporteur
const transporter = nodemailer.createTransport({
  service: "gmail", // Vous pouvez aussi utiliser 'yahoo', 'outlook', etc., ou un hôte SMTP
  auth: {
    user: "onepiece28102000@gmail.com", // Remplacez par votre email
    pass: "wmeq jzbn vzue wpea", // Remplacez par votre mot de passe ou un mot de passe d'application
  },
});

// Options de l'email
const mailOptions = {
  from: "onepiece28102000@gmail.com", // L'expéditeur
  to: "onepiece28102000@gmail.com", // Destinataire(s)
  subject: "Sujet du mail",
  text: "Contenu du mail en texte brut",
  html:emailHTML,
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Erreur lors de l'envoi :", error);
  } else {
    console.log("Email envoyé :", info.response);
  }
});
