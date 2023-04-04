const crypto = require('crypto');

function encrypt(raw, key) {
  const algorithm = 'aes-256-gcm';
  const keyBuffer = Buffer.from(key, 'utf8');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, keyBuffer, iv);
  let encrypted = cipher.update(raw, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const tag = cipher.getAuthTag();
  return iv.toString('hex') + encrypted + tag.toString('hex');
}

function decrypt(enc, key) {
  const encBuffer = Buffer.from(enc, 'hex');
  const nonce = encBuffer.slice(0, 16);
  const ciphertext = encBuffer.slice(16, -16);
  const tag = encBuffer.slice(-16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(key), nonce);
  decipher.setAuthTag(tag);
  const plaintext = decipher.update(ciphertext, 'binary', 'utf8') + decipher.final('utf8');
  return plaintext;
}

module.exports = { encrypt, decrypt };