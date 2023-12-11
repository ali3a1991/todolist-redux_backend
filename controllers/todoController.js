import { ObjectId } from "mongodb"
import { getDb } from "../utils/db.js"

export const addTodo = async (req, res) => {
  const db = await getDb()
  const user = await db.collection('users').findOne({_id: new ObjectId(req.body.owner)})
  if (user) {
    await db.collection('todos').insertOne(req.body)
    const todo = await db.collection('todos').findOne(req.body)
    res.json(todo)
  }else{
    res.status(500).end()
  }
}