import jwt from 'jsonwebtoken';

const Jwt = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: 'Token in authentication not found.' })
  }

  try {
    // Verifica se o token é válido
    const decoded = jwt.verify(token, 'banana');
    if(!decoded.user){
        return res.status(401).json({message: 'User invalid'})
    }
    req.user = decoded.user
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid.' })
  }
}

export default {
    Jwt
}
