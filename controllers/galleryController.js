const fs = require('fs');
const path = require('path');

const galleryData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/galleryData.json'), 'utf-8'));

exports.showGallery = (req, res) => {
  res.render('gallery', {
    title: 'Galeria Stadionów',
    images: galleryData
  });
};

exports.getGalleryJson = (req, res) => {
  res.json(galleryData);
};

exports.downloadImage = (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '../public/images/gallery', imageName);
  
  res.download(imagePath, imageName, (err) => {
    if (err) {
      res.status(404).send('Obrazek nie został znaleziony');
    }
  });
};

exports.filterGalleryByCategory = (req, res) => {
  const category = req.params.category;
  const filteredImages = galleryData.filter(image => image.category === category);

  res.render('gallery', {
    title: `Galeria - Kategoria: ${category}`,
    images: filteredImages,
    category: category
  });
};

exports.showImageDetails = (req, res) => {
  const imageName = req.params.imageName;
  const image = galleryData.find(image => image.name === imageName);
  
  if (image) {
    res.render('imageDetails', {
      title: image.description,
      image: image
    });
  } else {
    res.status(404).send('Obrazek nie został znaleziony');
  }
};
