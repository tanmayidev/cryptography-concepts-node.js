/**
 * HMAC is a keyed hash of data - like a hash with a password.
 * To create a HMAC you need to have the key,
 * therefore allowing you to verify both the authenticity and 
 * originator of the data.
 * Using a different key produces a different output.
 * 
 *  -> Think of HMAC as a hash with a password or key
 *  -> Only someone with the key can create an authentic hash
 * 
 *  TEXT -------------->    HASHING FUNCTION    -------------->     Hashed value
 *              |                                       |
 *              |                                       |
 *              ------------- Shared Key ----------------
 * 
 */


/// HMAC in Node.js

const { createHmac } = require('crypto');

const password = 'super-secret!';
const message = '🎃 hello jack';

const hmac = createHmac('sha256', password).update(message).digest('hex');

console.log(hmac);