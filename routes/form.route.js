const express = require('express');
const router = express.Router ();

router.get ('/', (req, res) => {
  res.render ('transaction-form', { merchant_id: process.env.merchant_id });
});

module.exports = router;