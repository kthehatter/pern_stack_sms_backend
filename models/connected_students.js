module.exports = (sequelize, DataTypes) => {
    const connected_students = sequelize.define(
        "connected_students",
        {
            connection_id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            student_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_socket_id: {
                type: DataTypes.STRING,
                allowNull: false,
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
    return connected_students;
};