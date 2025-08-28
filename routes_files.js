const express = require('express');
const multer = require('multer');
const csv = require('csvtojson');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload endpoint: Upload CSV and parse it
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    
    const buffer = req.file.buffer;
    const csvString = buffer.toString('utf-8');

    const jsonArray = await csv().fromString(csvString);

    res.json({ parsedData: jsonArray });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ message: 'Failed to process file' });
  }
});

module.exports = router;
