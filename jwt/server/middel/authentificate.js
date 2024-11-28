import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = "jwt-access-token-secret-key";
const REFRESH_TOKEN_SECRET = "jwt-refresh-token-secret-key"; // Clé pour le refresh token

export const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token requis" });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      // Si le token est expiré ou invalide, essayer de rafraîchir le token
      const refreshToken =
        req.cookies.refreshtoken || req.headers["x-refresh-token"];

      if (!refreshToken) {
        return res
          .status(403)
          .json({ message: "Token expiré et aucun refresh token trouvé" });
      }

      // Si un refresh token est présent, essayer de le vérifier
      jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ message: "Refresh token invalide" });
        }

        // Générer un nouveau token d'accès
        const newAccessToken = jwt.sign(
          { email: email },
          ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1h",
          }
        );

        // Retourner le nouveau access token
        return res.json({ accessToken: newAccessToken });
      });
    }
    req.user = user;
    next();
  });
};
