import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../FireBase.js'
import { v4 as uuid } from 'uuid'
export const ProductUpdate = async (req, res) => {
  try {
    const { ProductName, ProductID, ImageUrl, UserEmail, Category } = req.body

    // Check if UserEmail and ProductName are provided
    if (!UserEmail || !ProductName) {
      return res
        .status(400)
        .json({ error: 'UserEmail and ProductName are required' })
    }

    // Optional: Sanitize UserEmail if needed
    // const sanitizedUserEmail = UserEmail.replace(/[@.]/g, '_')

    // Save the new Product to Firestore
    await updateDoc(doc(db, 'Product', ProductID), {
      Name: ProductName,
      MadeBY: UserEmail,
      Category,
      ImageUrl,
    })

    res.status(200).json({ Message: 'PRODUCT HAS BEEN UPDATED' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to create Product' })
  }
}
