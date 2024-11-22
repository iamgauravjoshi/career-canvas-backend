import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
   {
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         // required: true,
      }, // Links the resume to a specific user
      resumeName: {
         type: String,
         required: true,
         minLength: 4,
         maxLength: 48,
         unique: true,
      },
      category: { type: String, required: true },
      description: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
