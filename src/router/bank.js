/* eslint-disable object-curly-newline */
const express = require('express');

const { createBank, getOneBank, getAllBanks, updateBank, deleteBank } = require('../controller');

const bank = express.Router();

bank
  .post('/bank', createBank)
  .get('/bank/:id', getOneBank)
  .get('/bank', getAllBanks)
  .put('/bank/:id', updateBank)
  .delete('/bank/:id', deleteBank);

module.exports = bank;
