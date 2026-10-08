const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\saran\\.gemini\\antigravity-ide\\brain\\03eb583b-a2a4-4b7f-9199-fa389aafd002\\.user_uploaded';

['media_1790854025341.png', 'media_1790854049691.png'].forEach(file => {
  const full = path.join(uploadDir, file);
  const stat = fs.statSync(full);
  console.log(file, stat.size, 'bytes');
});
