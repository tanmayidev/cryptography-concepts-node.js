/**
 * 
 * Signing is the process of creating a digital signature of a message. 
 * A signature is a hash of the original message which is then encrypted with the sender's private key.
 * 
 * The signature can be verified by the recipient using the public key of the sender.
 * This can guarantee the original message is authentic and unmodified.
 * 
 */


/// RSA Signing in Node.js

const { createSign, createVerify } = require('crypto');
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

const data = 'this data must be signed';

/// SIGN
const signer = createSign('rsa-sha256');

signer.update(data);

const signature = signer.sign(privateKey, 'hex');

console.log(signature);

/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(data);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(isVerified);