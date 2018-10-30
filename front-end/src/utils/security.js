import CryptoJS from 'crypto-js';

export function encryptionToString(ogrinal, secretString) {
  var encrypted = CryptoJS.AES.encrypt(ogrinal, secretString);
  return encrypted.toString();
}

export function decryption(encrypted, secretString) {
  const decrypted = CryptoJS.AES.decrypt(encrypted, secretString);
  return decrypted.toString(CryptoJS.enc.Utf8);
}
