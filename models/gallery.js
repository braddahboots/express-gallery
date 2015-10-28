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
      image: 'http://www.arch2o.com/wp-content/uploads/2013/08/Arch2o-Innovation-Tower-Zaha-Hadid-69.jpg',
      info: 'Shadow Halls',
      link: 'www.devleague.com',
    }),
    Gallery.create({
      image: 'http://designlike.com/wp-content/uploads/2010/12/baron-buildbaton.jpg',
      info: 'The Collapsing Building',
      link: 'www.devleague.com',
    }),
    Gallery.create({
      image: 'http://edmonleong1.sites.livebooks.com/data/photos/1300_1r9s7a6078.jpg',
      info: 'The Something out of Halo Building',
      link: 'www.devleague.com',
    }),
    Gallery.create({
      image: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2013/09/Za-Architects-Heart-of-the-District1.jpg',
      info: 'Alien Invasion Building',
      link: 'www.devleague.com',
    });
  });

  return Gallery;
};