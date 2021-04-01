const express = require('express')
const Games = require('../models/Games')
const initial = require('./constants')

const router = express.Router()

router.get('/', async (req, res) => {

    const { limit, page, fields, orderBy, sortBy, q} = req.query

    const criteria = {
        limit: Number(limit) || initial.DEFAULT_LIMIT,
        page: Number(page) || initial.DEFAULT_PAGE,
        fields: fields || null,
        orderBy: orderBy || initial.DEFAULT_ORDER_BY,
        sortBy: sortBy !== undefined ? Number(sortBy) : initial.DEFAULT_SORT_BY
    }
    const result = await Games.find(criteria)

    return res.json({ message: 'Games OK', data: result })
})

module.exports = router