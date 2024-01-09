const { Cites } = require ('../db');


//TRAE TODAS LAS CITAS:
async function getCites(req, res) {
    try {
        const allCites = await Cites.findAll();
        res.status(200).json(allCites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

};

// ACTUALIZA LAS CITAS : 


// ELIMINA LAS CITAS : 


module.exports = {
    getCites
};