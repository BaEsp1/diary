const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('note', {
        id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        },
        title:{
        type: DataTypes.STRING,
        allowNull: false,
        },
        info:{
        type: DataTypes.JSON,
        allowNull: false,
        },
    });
    };

    //Usar fecha de creacion como dato!