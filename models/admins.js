module.exports = (sequelize, DataTypes) => {
    const admins = sequelize.define(
        "admins",
        {
            admin_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            admin_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            admin_email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            admin_password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            confirmed_email: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            admin_confirmed: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
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
    return admins;
};