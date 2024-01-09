const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('list', {
        id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        },
        action:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    },{timestamps:false} );
    };
