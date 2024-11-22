import Resume from "../models/resume.model.js";

export const createResume = async (req, res) => {
  try {
    // Ensure the user is authenticated (assuming req.user contains user data after authentication)
    const { resumeName, category, description } = req.body;

    if (!resumeName || !description) {
      return res.status(400).json({ message: 'Resume Name and Description are required' });
    }

    // Create a new resume with the provided details and link it to the authenticated user
    const newResume = new Resume({
      userId: req.user.id, // Use the authenticated user's ID
      resumeName,
      category,
      description
    });

    const savedResume = await newResume.save();

    res.status(201).json({ message: "New Resume created successfully!" });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create resume', error });
  }
};



// export const getResumeList = async (req, res) => {
//   try {
//     res.status(201).json({ message: "New Resume created successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create resume', error });
//   }
// };