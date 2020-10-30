const express = require("express");
const {getSorrowscope} = require("../controllers/sorrowscopeController");

const router = express.Router();

router.route('/')
    .get(getSorrowscope);

module.exports = router
