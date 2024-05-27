const Verification = require('../models/verificationModel');

// Get all verifications
exports.getAllVerifications = async (req, res) => {
  try {
    const verifications = await Verification.findAll();
    res.status(200).json(verifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching verifications', error });
  }
};

// Create a new verification
exports.createVerification = async (req, res) => {
  const { checklistType, remarks } = req.body;

  try {
    const verification = await Verification.create({ checklistType, remarks });
    res.status(201).json(verification);
  } catch (error) {
    res.status(500).json({ message: 'Error creating verification', error });
  }
};
