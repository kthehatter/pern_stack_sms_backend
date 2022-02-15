module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define(
      "comments",
      {
        comment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        student_id: {
            type: DataTypes.STRING,
            allowNull: false},
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        video_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
            
        
      },
      {
        timestamps: false,
      }
    );
  
    return comments;
  };