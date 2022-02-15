module.exports = (sequelize, DataTypes) => {
    const teachers = sequelize.define(
        "teachers",
        {
            teacher_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            teacher_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            teacher_email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            teacher_password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            teacher_phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            teacher_photo: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            teacher_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            teacher_school_id: {
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
    return teachers;
};