module.exports = (sequelize, DataTypes) => {
    const students = sequelize.define(
        "students",
        {
            student_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            student_first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            student_photo: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            studen_gender:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            student_adress:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            student_birthday:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            student_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_class: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            student_school_id: {
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
    return students;
};