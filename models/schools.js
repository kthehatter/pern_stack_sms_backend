module.exports = (sequelize, DataTypes) => {
    const schools = sequelize.define(
        "schools",
        {
            school_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            school_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            school_address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            school_city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            school_state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            school_phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            school_email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            school_password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            school_google_sheet_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            school_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            confirmed_email: {
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
    return schools;
};