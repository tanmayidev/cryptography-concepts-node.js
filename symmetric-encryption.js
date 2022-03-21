/**
 * 
 * Encryption is the process of making a message confidential (like a hash), 
 * while allowing it to be reversible (decrypted) with the proper key.
 * Each time a message is encrypted it is randomized to produce a different output.
 * 
 * In symmetric encryption, the same key is used to encrypt and decrypt the message.
 * 
 *  -> The same input will produce a different output, unlike hashes
 *  -> Encrypted message can be reversed with the key
 *  -> Same key used to encrypt and decrypt message
 * 
 *  TEXT    --- Encrypt ------> Encrypted Data  --- Decrypt ----->  TEXT (Decrypted Data)
 *                 |                                   |
 *                 |                                   |
 *                 ------------Shared Key --------------
 *
 * Perform symmetric encryption in Node by creating a cipher.
 * Encryption also has an initialization vector (IV) to randomize
 * the pattern so a sequence of text won't produce the same output
 * as a previous sequence
 * 
 */

/// Symmetric Encryption in Node.js

const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cipher

const message = 'i like roli poli panda';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

/// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decyptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
console.log(`Deciphered: ${decyptedMessage.toString('utf-8')}`);
