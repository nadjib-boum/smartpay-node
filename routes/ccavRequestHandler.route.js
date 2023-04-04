const express = require ('express');
const router = express.Router ();
const { encrypt } = require ('../utils/crypto.util');

router.post ('/', (req, res) => {
  const transactionData = new URLSearchParams(req.body).toString ();
  const encRequest = encrypt (transactionData, `${process.env.workingKey}`);
  const access_code = `${process.env.access_code}`;
  res.render ('transaction-handler', { encRequest, access_code });
});

module.exports = router;