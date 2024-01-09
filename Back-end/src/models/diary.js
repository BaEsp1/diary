const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('diary', {
        id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        },
        info:{
        type: DataTypes.JSON,
        allowNull: false,
        },
    });
    };

    //Usar fecha de creacion como dato!