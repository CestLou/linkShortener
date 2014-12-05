"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("ShorteningURLs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      URL: {
        type: DataTypes.STRING
      },
      shortenedHash: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("ShorteningURLs").done(done);
  }
};