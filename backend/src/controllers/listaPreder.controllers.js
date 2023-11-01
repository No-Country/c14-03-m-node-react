const catchError = require('../utils/catchError');
const ListAnime = require('../models/ListAnime');
const Anime = require('../models/Anime');

const getAll = catchError(async (req, res) => {
    const results = await ListAnime.findAll({
        include: [
            {
                model: Anime,
                attributes: ['title'],
                through: {
                    attributes: []
                }
            }
        ]
    });
    return res.json(results);
});


const remove = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await ListAnime.destroy({ where: { id } });
    if (!result) return res.sendStatus(404);
    return res.sendStatus(204);
});


module.exports = {
    getAll,
    remove,

}