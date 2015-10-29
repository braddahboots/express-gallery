module.exports = function(sequelize, DataTypes) {
  var Gallery = sequelize.define("gallery", {
    image: DataTypes.STRING,
    info: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  // Gallery.drop();
Gallery.sync({force: true})
  .then(function() {
    return Gallery.create({
      image: 'http://wallpaperfullscreen.com/wp-content/uploads/2015/03/Hawaii-Amazing-Sunset-Island-Wallpaper-HD.jpg',
      info: 'Heaven',
      link: 'www.getHi.com',
    }),
    Gallery.create({
      image: 'http://www.hawaiiluxurynews.com/HLN/wp-content/uploads/2013/09/rainbowwhale.jpg',
      info: "Whale's and Rainbows",
      link: 'www.getHi.com',
    }),
    Gallery.create({
      image: 'http://7-themes.com/data_images/out/19/6832733-hawaii-wallpaper.jpg',
      info: 'Sunset Blvd',
      link: 'www.getHi.com',
    }),
    Gallery.create({
      image: 'http://www.pixgel.com/wp-content/uploads/2013/09/Hawaii-Beach-1280x960.jpg',
      info: 'Redlights Big City',
      link: 'www.getHi.com',
    }),
    Gallery.create({
      image: 'http://hawaiianplaces.com/wp-content/uploads/2015/07/feat11.jpg',
      info: 'City Flames',
      link: 'www.getHi.com',
    }),
    Gallery.create({
      image: 'https://d2fijpsef22722.cloudfront.net/photos/massive/2546426246-maui.jpg',
      info: 'Waves of Clouds',
      link: 'www.getHi.com',
    }),
    Gallery.create({
      image: 'http://www.christiangehrke.com/wp-content/uploads/2013/04/maui_beach_waves.jpg',
      info: 'Secrets',
      link: 'www.getHi.com',
    });
  });

  return Gallery;
};