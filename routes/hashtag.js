const Sequelize = require("sequelize");

module.exports = class Hashtag extends Sequelize.model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        udnerscored: false,
        modelName: "Hashtag",
        tableNmae: "Hashtags",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Post.belongsToMany(db.Hashtag, { through: "Posthashtag" });
  }
};
