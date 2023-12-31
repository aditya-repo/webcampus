const multer = require('multer')
const path = require('path');


// Multer setup for handling file uploads
const sliderPath = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname,'..', '..', 'images', 'static-images' ,'gallery'));
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
    const data = {
      
      folder: filename.fieldname,
      originalname: filename.fieldname,
      newimage: filename.newimagename
    }
  },
});

// Multer setup for handling file uploads
const principalPath = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname,'..', '..', 'images', 'static-images' ,'official'));
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});


// Multer setup for handling file uploads
const noticePath = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname,'..', '..', 'images', 'static-images'  ,'notices'));
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

// Multer setup for handling file uploads
const newsPath = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname,'..', '..', 'images', 'static-images'  ,'news'));
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const noticeMiddleware = (req, res, next)=>{
    
  const data = {
    notice: req.file.filename
  }
  req.image = data
  next()
}
const newsMiddleware = (req, res, next)=>{
    
  const data = {
    notice: req.file.filename
  }
  req.image = data
  next()
}

const principalMiddleware = (req, res, next)=>{
    
  const data = {
    principal: req.file.filename
  }
  req.image = data
  next()
}

const sliderMiddlerware = (req, res, next)=>{
    
    const data = {
      serverpath : path.join(__dirname,'..', '..', 'images', 'static-images' ,'gallery'),
      newimagename: req.file.filename
    }

    req.image = data
    next()

  }

  const sliderStorage = multer({ storage: sliderPath });
  const principalStorage = multer({storage: principalPath})
  const noticeStorage = multer({storage: noticePath})
  const newsStorage = multer({storage:newsPath})

  module.exports = {
    sliderStorage, sliderMiddlerware,
    principalStorage, principalMiddleware,
    noticeStorage, noticeMiddleware,
    newsStorage, newsMiddleware
  }