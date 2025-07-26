const express = require("express");
const ImageKit = require("imagekit");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();
router.get("/add", (req, res) => {
  res.render("productForm");
});
router.post("/add", upload.single("image"), async(req, res) => {
  // const {title , description , category , price , image} = req.body

  // console.log(title);
  // console.log(description);
  // console.log(category);
  // console.log(price);
  // console.log(image);

  var imagekit = new ImageKit({
    publicKey: "public_M0PAK4NmC1d2995cVHB6hjiBgaE=",
    privateKey : "private_KT7FkfaTOTLNy6lVG+V7iKE2ba4=",
    urlEndpoint: "https://ik.imagekit.io/ls436o8px",
  });
  const result = await imagekit.upload({
    file : req.file.buffer,
    fileName : req.file.originalname,
    isPublished  : true,
    isPrivateFile : false
  })
  const imageUrl = result.url
  console.log(imageUrl);
  res.redirect("/");
});
module.exports = router;
