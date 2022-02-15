module.exports = (sequelize, DataTypes) => {
    const schedules = sequelize.define(
        "schedules",
        {
           
            schedule_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            schedule_start_time: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            schedule_end_time: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            schedule_day: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            schedule_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            schedule_teacher_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            schedule_school_id: {
                type: DataTypes.INTEGER,
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
    return schedules;
};