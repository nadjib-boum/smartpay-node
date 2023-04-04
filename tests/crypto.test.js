const { encrypt, decrypt } = require ('../utils/crypto.util');

test ('Testing encrypt/decrypt utility', () => {
  const TEXT = 'THIS IS A TEXT';
  const workingKey = 'abcdefghijklmnopqrstuvwxyz123456'; // dumb working key
  const encryptedTXT = encrypt (TEXT, workingKey);
  const decryptedTXT = decrypt (encryptedTXT, workingKey);
  expect (decryptedTXT).toBe (TEXT);
});