module.exports = function(sequelize, DataTypes) {
  var Gallery = sequelize.define('gallery', {
    image: DataTypes.STRING,
   title: DataTypes.STRING,
    link: DataTypes.STRING,
    info: DataTypes.CHAR(2000)
  }, {
    freezeTableName: true
  });
  // Gallery.drop();
Gallery.sync({force: true})
  .then(function() {
    return Gallery.create({
      image: 'http://wallpaperfullscreen.com/wp-content/uploads/2015/03/Hawaii-Amazing-Sunset-Island-Wallpaper-HD.jpg',
     title: 'Heaven',
      link: 'www.getHi.com',
      info: 'Cupcake ipsum dolor sit amet gingerbread. Jelly pastry biscuit jujubes gingerbread fruitcake croissant toffee sugar plum. Bear claw liquorice carrot cake halvah. Apple pie bear claw pie. Chocolate cake lollipop. Pastry fruitcake cake jelly lollipop. Sweet jelly chocolate bar.',
    }),
    Gallery.create({
      image: 'https://s-media-cache-ak0.pinimg.com/736x/31/c1/68/31c16894192cee1a01b0284bdfed7951.jpg',
     title: 'Earth Birth',
      link: 'www.getHi.com',
      info: 'Toffee caramels icing fruitcake halvah candy canes powder marzipan ice cream. Oat cake fruitcake tiramisu jelly beans lollipop topping sesame snaps cotton candy sweet. Caramels jelly beans liquorice cake jelly-o. Fruitcake gummies bonbon chocolate cake chocolate bar. Cake marshmallow sweet jelly ice cream cotton candy icing pie fruitcake. Sesame snaps bonbon candy canes lemon drops cookie. Carrot cake donut dessert sweet. Cotton candy liquorice jelly beans tart bear claw cake soufflé donut danish. Icing powder jelly-o lemon drops oat cake macaroon cake soufflé.',
    }),
    Gallery.create({
      image: 'http://www.think-aboutit.com/wp-content/uploads/2015/05/The-best-Hawaii-cruise_Tremendous-hawaiian-waves_8509.jpg',
     title: 'Sessions',
      link: 'www.getHi.com',
      info: 'Sweet gummies bonbon sesame snaps sweet. Pie ice cream oat cake gummi bears icing chocolate bar sesame snaps jelly beans. Pudding sweet roll gummies carrot cake. Danish brownie bear claw. Cake sweet brownie muffin sugar plum cookie bonbon cupcake candy canes. Dragée chupa chups cookie sugar plum caramels cake gummies.',
    }),
    Gallery.create({
      image: 'http://www.hawaiiluxurynews.com/HLN/wp-content/uploads/2013/09/rainbowwhale.jpg',
     title: "Whale's and Rainbows",
      link: 'www.getHi.com',
      info: 'Bonbon icing jelly beans bear claw pudding cake gummi bears sesame snaps sugar plum. Sweet roll bear claw soufflé bear claw pastry croissant tiramisu sesame snaps marzipan. Liquorice chupa chups sweet toffee. Topping bonbon candy canes. Pie gummies chocolate cake dragée sugar plum cake sweet. Chocolate macaroon dessert halvah lollipop sesame snaps. Cake lemon drops sugar plum cheesecake oat cake liquorice brownie. Candy canes carrot cake marzipan jujubes sweet roll chocolate bar donut chocolate.',
    }),
    Gallery.create({
      image: 'http://7-themes.com/data_images/out/19/6832733-hawaii-wallpaper.jpg',
     title: 'Sunset Blvd',
      link: 'www.getHi.com',
      info: 'Toffee caramels icing fruitcake halvah candy canes powder marzipan ice cream. Oat cake fruitcake tiramisu jelly beans lollipop topping sesame snaps cotton candy sweet. Caramels jelly beans liquorice cake jelly-o. Fruitcake gummies bonbon chocolate cake chocolate bar. Cake marshmallow sweet jelly ice cream cotton candy icing pie fruitcake. Sesame snaps bonbon candy canes lemon drops cookie. Carrot cake donut dessert sweet. Cotton candy liquorice jelly beans tart bear claw cake soufflé donut danish. Icing powder jelly-o lemon drops oat cake macaroon cake soufflé.',
    }),
    Gallery.create({
      image: 'https://d2fijpsef22722.cloudfront.net/photos/massive/2546426246-maui.jpg',
     title: 'Waves of Clouds',
      link: 'www.getHi.com',
      info: 'Chupa chups jelly-o cake muffin oat cake bonbon donut chocolate croissant. Jelly-o dragée jelly cupcake topping macaroon ice cream chocolate cake. Gummies wafer croissant sweet pie jujubes liquorice. Muffin donut jujubes toffee candy liquorice cupcake sweet. Pastry muffin icing macaroon pastry gummies carrot cake. Carrot cake cheesecake lemon drops. Croissant candy pie halvah dragée gummi bears muffin.',
    }),
    Gallery.create({
      image: 'http://www.christiangehrke.com/wp-content/uploads/2013/04/maui_beach_waves.jpg',
     title: 'Secrets',
      link: 'www.getHi.com',
      info: 'Sweet gummies bonbon sesame snaps sweet. Pie ice cream oat cake gummi bears icing chocolate bar sesame snaps jelly beans. Pudding sweet roll gummies carrot cake. Danish brownie bear claw. Cake sweet brownie muffin sugar plum cookie bonbon cupcake candy canes. Dragée chupa chups cookie sugar plum caramels cake gummies.',
    });
  });

  return Gallery;
};