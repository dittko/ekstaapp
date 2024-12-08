const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.get('/gallery', galleryController.showGallery);

router.get('/gallery/json', galleryController.getGalleryJson);

router.get('/gallery/download/:imageName', galleryController.downloadImage);

router.get('/gallery/category/:category', galleryController.filterGalleryByCategory);

router.get('/gallery/image/:imageName', galleryController.showImageDetails);

module.exports = router;
