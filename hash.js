/**
 * Hash means to chop and mix
 * It takes an input value of any length and outputs a fixed length value
 * Hashing algorithm - SHA (Secure Hashing Algorithm)
 * It produces a random, uniquem fixed-length string from a given input
 * They are used to compare two values, like passwords, for equality
 * 
 *  -> THe same input will always produce the same output
 *  -> Fast to compute, but computationally expensive to find the original input
 *  -> Small probability of collision (unique)
 * 
 *  TEXT ------>    HASHING FUNCTION (md5, sha, argon2)     --------->  HASHED VALUE in hex
 * 
 */

const {createHash} = require('crypto');

// Create a string hash

function hash(str) {
    return createHash('sha256').update(str).digest('hex');
}

// Compate two hashed passwords
let password = 'san-tan!';
const hash1 = hash(password);
console.log(hash1)

/// ... some time later

password = 'san-tan!';
const hash2 = hash(password);
const match = hash1 == hash2;

console.log(match ? '✔️  good password':'❌  password does not match');
