/* eslint-disable no-unused-vars */
const knex = require('./db/index');

async function createBankInDb(data) {
  try {
    const bank = await knex('banks').insert({
      name: data.name,
      interest_rate: data.rate,
      maximum_loan: data.maxLoan,
      loan_term: data.term,
    });
    return bank;
  } catch (error) {
    throw new Error(error);
  }
}

async function getAllBanksFromDb() {
  try {
    const banks = await knex.select().table('banks');

    return banks;
  } catch (error) {
    throw new Error(error);
  }
}

async function getOneBankFromDb(data) {
  try {
    const bank = await knex('banks').where('id', data.id);

    return bank;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateBankInDb(data, paramsData) {
  try {
    await knex('banks')
      .where({ id: paramsData.id })
      .update({
        name: data.name,
        interest_rate: data.rate,
        maximum_loan: data.maxLoan,
        loan_term: data.term,
      });

    return await knex('banks').where('id', paramsData.id);
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteBankFromDb(data) {
  try {
    await knex('banks')
      .where('id', data.id)
      .del();

    return 'bank has just been deleted';
  } catch (error) {
    throw new Error(error);
  }
}

function errorHandler(err, req, res, next) {
  if (!err) return res.json('Everything is OK!');

  return res.status(500).json({ error: err.message });
}

module.exports = {
  errorHandler,
  createBankInDb,
  getAllBanksFromDb,
  getOneBankFromDb,
  updateBankInDb,
  deleteBankFromDb,
};
