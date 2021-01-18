const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ sucess: true, msg: "show all locations"})
});

router.post('/', (req, res) => {
    res.status(200).json({ sucess: true, msg: "create locations"})
});

router.get('/:id', (req, res) => {
    res.status(200).json({ sucess: true, msg: "display single location"})
});

router.put('/:id', (req, res) => {
    res.status(200).json({ sucess: true, msg: "update single location"})
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ sucess: true, msg: "delete single location"})
});

module.exports = router;