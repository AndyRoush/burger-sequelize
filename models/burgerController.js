module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
      }
    });
    return Post;
  };