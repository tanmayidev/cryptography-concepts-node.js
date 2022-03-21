/**
 * Hashes are great for making passwords unreadable, 
 * but they always produce the same output,
 * they are not very secure.
 * 
 * A salt is a random string that is added to the input before hashing.
 * This makes hash more unique and harder to guess.
 * 
 * Users often user weak passwords, like "password123".
 * When a database is compromised, the attacker can easily 
 * find the value of an unsalted hash by searching in
 * precomputed "rainbow table" of common hashes.
 * Salting fixes this.
 * 
 *  -> Salting is used to make a hash harder to guess
 *  -> Salting appends a random string to the input before hashing
 * 
 * Example of a password salt using the 'scrypt' algorithm in Node crypto
 * 
 *  TEXT ------------>  HASHING FUNCTION + RANDOM SALT -----------> SALT + Hashed value 
 * 
 */

/// Password Salt with Scrypt in Node.js

const {scryptSync, randomBytes, timingSafeEqual } = require('crypto')

function signup(email, password) {
    const salt = randomBytes(16). toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = {email, password: `${salt}:${hashedPassword}`}

    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email == email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}

const users = [];

const user = signup('foo@bar.com', 'pa$$word')

console.log(user)

const result = login('foo@bar.com', 'password')

console.log(result)