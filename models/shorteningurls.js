"use strict";

module.exports = function(sequelize, DataTypes) {
  var ShorteningURLS = sequelize.define("ShorteningURLS", {
    URL: DataTypes.STRING,
    shortenedHash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return ShorteningURLS;
};
