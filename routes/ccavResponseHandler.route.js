const express = require ('express');
const router = express.Router();
const { decrypt } = require ('../utils/crypto.util');

router.post ('/', (req, res) => {
  const response = decrypt (req.body.encResp, `${process.env.workingKey}`);
  const responseParams = new URLSearchParams(response);
  res.render ('response-page', { responseParams });
});

module.exports = router;