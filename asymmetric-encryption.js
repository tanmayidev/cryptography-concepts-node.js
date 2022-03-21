/**
 * 
 * Asymmetric encryption depends on two keys.
 * Encrypt a message with the public key and decrypt it with the private key.
 * Asymmetric encryption is used on the web whenever you use HTTPS to
 * establish an encrypted connection to that website.
 * The browser finds the public key of an SSL certificate installed on the website,
 * which is used to encrypt any data you send, then the private key decrypts it.
 * 
 *      TEXT    ----Encrypt---->    Hashed Text     ----Decrypt---->    TEXT
 *                     |                                   |
 *                     |                                   |
 *                  Public Key                          Private Key
 * 
 */

/// RSA Encryption in Node.js

const { publicEncrypt, privateDecrypt } = require('crypto');
const { generateKeyPairSync } = require('crypto');
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,    // the length of the key in bits
    publicKeyEncoding: {
        type: 'spki',       // recommended to be 'spki' by the Node.js docs
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',      // recommended to be 'pkcs8' by the Node.js docs
        format: 'pem',
    },
});

let secretMessage = 'I am a secret message';

const encryptedData = publicEncrypt(
    publicKey,
    secretMessage
);

console.log(encryptedData.toString('hex'))

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));