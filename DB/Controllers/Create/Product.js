import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../FireBase.js'
import { v4 as uuid } from 'uuid'
export const ProductMaker = async (req, res) => {
  try {
    const { ProductName, ImageUrl, UserEmail, Category } = req.body

    const ProductID = uuid()
    // Check if UserEmail and ProductName are provided
    if (!UserEmail || !ProductName) {
      return res
        .status(400)
        .json({ error: 'UserEmail and ProductName are required' })
    }

    // Optional: Sanitize UserEmail if needed
    // const sanitizedUserEmail = UserEmail.replace(/[@.]/g, '_')

    // Save the new Product to Firestore
    await setDoc(doc(db, 'Product', ProductID), {
      Name: ProductName,
      MadeBY: UserEmail,
      Category,
      ImageUrl,
      ID: ProductID, // Consider using a dynamic or unique ID if applicable
    })

    res.status(200).json({ ProductName, UserEmail })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to create Product' })
  }
}
