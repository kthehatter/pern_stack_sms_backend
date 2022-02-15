module.exports = (sequelize, DataTypes) => {
    const classes = sequelize.define(
        "classes",
        {
            class_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            class_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            class_description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            class_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            class_school_id: {
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
    return classes;
};