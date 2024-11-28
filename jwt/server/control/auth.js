import usermodel from "../model/user.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const tokens = [];
const singup = (req, res) => {
  const { name, email, password } = req.body;

  usermodel
    .create({ name, email, password })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usermodel.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  if (user.password === password) {
    const accesstoken = jwt.sign(
      { email: email },
      "jwt-access-token-secret-key",
      { expiresIn: "5m" }
    );

    const refreshtoken = jwt.sign(
      { email: email },
      "jwt-refresh-token-secret-key",
      { expiresIn: "1y" }
    );
    console.log("access=======>", accesstoken);
    console.log("refresh==============>", refreshtoken);

    res.cookie("accesstoken", accesstoken, { maxage: 60000 });
    res.cookie("refreshtoken", refreshtoken, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours en millisecondes
      httpOnly: true, // Protège contre XSS
      secure: true, // Nécessite HTTPS
      sameSite: "strict", // Empêche les requêtes intersites
    });
    console.log(
      "----------------------------connection reussi---------------------"
    );
    tokens.push(refreshtoken);
    res.status(200).json({
      message: "Connexion réussie",
      accesstoken,
    });
  } else {
    res.json("erroro");
  }
};



export { singup, login };
