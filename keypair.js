/** 
 * 
 * Using a shared key works for encryption, both the parties must agree upon the key.
 * Sharing a key securely across a network is not possible.
 * This can be solved by using RSA algorithm.
 * It generates a keypair containing a public and private key.
 * Private key should be kept secret and public key can be shared freely.
 * 
*/

/// Generate an RSA Keypair in Node.js

const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
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

console.log(publicKey);
console.log(privateKey);
