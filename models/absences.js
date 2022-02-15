module.exports = (sequelize, DataTypes) => {
    const absences = sequelize.define(
        "absences",
        {
            absence_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            absent_student_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            absence_teacher_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            absence_schedule_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            absence_reason: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            absence_status: {
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
    return absences;
};