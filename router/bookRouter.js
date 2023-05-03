const express = require('express');
const router = express.Router();

router.get("/",(req, res, next) => {
    res.status(200).json({
        message: "Successful - GET",
        metadata: {
            method: req.method,
            hostname: req.hostname
        },
    });
});

router.get("/:id", (req, res, next) => {
    res.status(200).json({
        message: "Successfull - GET by id",
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method
        },
    });
});

router.post("/",(req, res, next) => {
    const name = req.body.name
    res.status(201).json({
        message: "Successful - POST",
        metadata: {
            name: name,
            method: req.method,
            hostname: req.hostname
        },
    });
});

router.put("/:id", (req, res, next) => {
    res.status(201).json({
        message: "Successfull - PUT by id",
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method
        },
    });
});

router.delete("/:id", (req, res, next) => {
    res.status(200).json({
        message: "Successfull - DELETE by id",
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method
        },
    });
});

module.exports = router;