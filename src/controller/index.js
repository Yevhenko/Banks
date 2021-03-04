const {
  createBankInDb,
  getAllBanksFromDb,
  getOneBankFromDb,
  updateBankInDb,
  deleteBankFromDb,
} = require('../handlers');

async function createBank(req, res, next) {
  try {
    const { body } = req;
    if (!body) res.status(404).send('no body');

    const response = await createBankInDb(body);

    res.json(response);
  } catch (error) {
    next(error);
  }
}

async function getAllBanks(req, res, next) {
  try {
    const response = await getAllBanksFromDb();

    res.json(response);
  } catch (error) {
    next(error);
  }
}

async function getOneBank(req, res, next) {
  try {
    const { params } = req;

    const bankId = Number(params.id);

    if (!bankId) res.json('no data');

    const response = await getOneBankFromDb(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
}

async function updateBank(req, res, next) {
  try {
    const { params, body } = req;

    const bankId = Number(params.id);

    if (!bankId || !body) res.json('no data');

    const response = await updateBankInDb(body, params);

    res.json(response);
  } catch (error) {
    next(error);
  }
}

async function deleteBank(req, res, next) {
  try {
    const { params } = req;

    const bankId = Number(params.id);

    if (!bankId) res.json('no data');

    const response = await deleteBankFromDb(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createBank,
  getOneBank,
  getAllBanks,
  updateBank,
  deleteBank,
};
