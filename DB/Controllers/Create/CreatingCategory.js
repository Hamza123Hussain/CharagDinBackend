// Create/CreatingCategory.js
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage' // Import necessary functions
import { v4 as uuid } from 'uuid'
import { db, Storage } from '../../../FireBase.js' // Import Storage

export const CategoryMaker = async (req, res) => {
  try {
    const { CategoryName, UserEmail } = req.body
    const file = req.file

    // Check if required fields are provided
    if (!UserEmail || !CategoryName) {
      return res
        .status(400)
        .json({ error: 'UserEmail and CategoryName are required' })
    }

    let imageUrl = ''

    if (file) {
      // Create a unique file name
      const fileRef = ref(Storage, `categories/${CategoryName}`)

      // Upload file to Firebase Storage
      await uploadBytes(fileRef, file.buffer)
      imageUrl = await getDownloadURL(fileRef) // Get the download URL for the uploaded file
    }

    // Save the new category to Firestore
    await setDoc(doc(db, 'Category', CategoryName), {
      Name: CategoryName,
      MadeBY: UserEmail,
      ImageUrl: imageUrl,
      ID: uuid(),
    })

    res.status(200).json({ CategoryName, UserEmail, imageUrl })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to create category' })
  }
}
