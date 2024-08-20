import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../FireBase.js'

export const CategoryMaker = async (req, res) => {
  try {
    const { CategoryName, UserEmail } = req.body

    // Check if UserEmail and CategoryName are provided
    if (!UserEmail || !CategoryName) {
      return res
        .status(400)
        .json({ error: 'UserEmail and CategoryName are required' })
    }

    // Optional: Sanitize UserEmail if needed
    // const sanitizedUserEmail = UserEmail.replace(/[@.]/g, '_')

    // Save the new category to Firestore
    await setDoc(doc(db, 'Category', CategoryName), {
      Name: CategoryName,
      MadeBY: UserEmail,
      ID: uuid(), // Consider using a dynamic or unique ID if applicable
    })

    res.status(200).json({ CategoryName, UserEmail })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to create category' })
  }
}
