import { getDb } from "../utils/db.js"
import { createToken } from "../utils/jwt.js"

export const register = async (req, res) => {
  const db = await getDb()
  const user = await db.collection('users').findOne({email: req.body.email})

  if (user) {
    res.status(500).end('user is ready')
  }else{
    await db.collection('users').insertOne(req.body)
    res.end()
  }
}

export const login = async (req, res) => {
  const db = await getDb()
  const user = await db.collection('users').findOne({email: req.body.email, password: req.body.password})

  if (user) {
    const token = createToken({user : user._id})
    res.json({name: user.name, email: user.email, token: token, _id: user._id})
  }else{
    res.status(500).end()
  }
}