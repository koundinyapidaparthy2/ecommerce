const cloudinary = require("cloudinary").v2;
const multer = require("multer");


cloudinary.config({ 
  cloud_name: 'dftbb3m5t', 
  api_key: '245223792489919', 
  api_secret: 'UiiU9WGa9I_V1ZxLeBB5u2e6JCE' 
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
