const router = require('express').Router();
const { Traveller } = require('../../models');

//get request from travellers
router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll({
            include: [{ model: Traveller }]
        });
    }
    catch (err) {
        res.status(500).json(err);
    }

})