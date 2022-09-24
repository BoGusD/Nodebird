const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(Sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.STRING(140),
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        udnerscored: false,
        modelName: "Post",
        tableNmae: "Posts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static association(db) {
    db.Post.belongs(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: "Posthashtag" });
  }
};
