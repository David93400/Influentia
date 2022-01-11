const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    if (decodedToken.isAdmin == true) {
        next();
    } else {
        res
          .status(402)
          .json({ error: 'Opération impossible - Non Administrateur' });
    }
  } catch {
    res.status(401).json({ error: 'Opération impossible - Non Administrateur' });
  }
};
