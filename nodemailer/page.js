module.exports.htmlContent = (username, email, password) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Reset Verification Code</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo img {
        width: 75px;
        height: auto;
      }
      .content {
        margin-bottom: 20px;
      }
      .credentials-container {
        font-size: 18px;
        text-align: center;
        margin-bottom: 20px;
      }
      .credentials {
        background-color: #00c35e;
        color: white;
        padding: 8px 16px;
        border-radius: 5px;
        display: inline-block;
      }
      .footer {
        margin-top: 20px;
        text-align: center;
        font-size: 12px;
        color: #999999;
      }
      .footer a {
        color: #999999;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img
          src="https://easyeats.dz/wp-content/uploads/2024/01/logo-site-web-easy-eats.png"
          alt="Easy Eats"
        />
      </div>
      <div class="content">
        <p>Salut ${username},</p>
        <p>
          Nous sommes ravis de vous accueillir chez Easy-Eats ! Merci d'avoir choisi de rejoindre
          notre App. Votre inscription est terminée. <br />
        </p>
        <p>
          Pour vous connecter à votre compte, veuillez utiliser les informations d'identification
          suivantes : <br />
        </p>
        <div class="credentials-container">
          <p class="credentials">E-mail : ${email}<br />Mot de passe : ${password}</p>
        </div>
        <p>
          Si vous avez des questions, rencontrez des problèmes ou avez besoin d'aide pour tout ce qui
          concerne Easy-Eats, notre équipe d'assistance est là pour vous aider. N'hésitez pas à nous
          contacter.
        </p>
        <p>
          Encore une fois, merci d'avoir choisi Easy-Eats. Nous sommes ravis de vous compter parmi
          nous et avons hâte de vous servir.
        </p>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © <a href="https://easyeats.dz">EasyEats</a> 2024. Tous droits réservés.</p>
      <p>Ne répondez pas à cet email.</p>
    </div>
  </body>
</html>
`;
