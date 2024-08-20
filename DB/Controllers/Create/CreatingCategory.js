import { doc, setDoc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import { db } from '../../Firebase.js'

export const CategoryMaker = async (req, res) => {
  const RandomID = uuid() // Unique ID for the document
  try {
    const { CategoryName, UserEmail } = req.body

    // Check if UserEmail is provided
    if (!UserEmail) {
      return res.status(400).json({ error: 'UserEmail is required' })
    }
    // const sanitizedUserEmail = UserEmail.replace(/[@.]/g, '_')

    // Save the original task and UserEmail
    await setDoc(doc(db, 'Category', CategoryName), {
      Name: CategoryName,
      MadeBY: UserEmail,
      ID: uuid(),
    })
    res.status(200).json({ CategoryName, UserEmail })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to generate Movie recommendations' })
  }
}
