module.exports = (sequelize, DataTypes) => {
    const courses = sequelize.define(
        "courses",
        {
            course_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            course_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            course_description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            course_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            grade_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            course_photo: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            course_video: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            course_price: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            course_duration: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            course_level: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            course_category: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            course_subcategory: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            course_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            timestamps: false,
        }
    );
    return courses;
};