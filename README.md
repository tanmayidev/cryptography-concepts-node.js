# Concepts of Cryptography

 
 ## Asymmetric Encryption
 
 Asymmetric encryption depends on two keys.     
 Encrypt a message with the public key and decrypt it with the private key.     
 Asymmetric encryption is used on the web whenever you use HTTPS to establish an encrypted connection to that website.     
 The browser finds the public key of an SSL certificate installed on the website, which is used to encrypt any data you send, then the private key decrypts it.    
 ```
      TEXT    ----Encrypt---->    Hashed Text     ----Decrypt---->    TEXT
                     |                                   |
                     |                                   |
                  Public Key                          Private Key
                
 ```
 
 ## Hashing
 
 Hash means to chop and mix.     
 It takes an input value of any length and outputs a fixed length value.    
 Hashing algorithm - SHA (Secure Hashing Algorithm)     
 It produces a random, unique fixed-length string from a given input     
 They are used to compare two values, like passwords, for equality.     
   
   * The same input will always produce the same output
   * Fast to compute, but computationally expensive to find the original input
   * Small probability of collision (unique)
 
 ```
  TEXT ------>    HASHING FUNCTION (md5, sha, argon2)     --------->  HASHED VALUE in hex
 ```
          
## HMAC

 HMAC is a keyed hash of data - like a hash with a password.        
 To create a HMAC you need to have the key, therefore allowing you to verify both the authenticity and originator of the data.            
 Using a different key produces a different output.            
 
 * Think of HMAC as a hash with a password or key          
 * Only someone with the key can create an authentic hash            
 ``` 
   TEXT -------------->    HASHING FUNCTION    -------------->     Hashed value
               |                                       |
               |                                       |
               ------------- Shared Key ----------------
 ```

## Keypair

 Using a shared key works for encryption, both the parties must agree upon the key.           
 Sharing a key securely across a network is not possible.          
 This can be solved by using RSA algorithm.             
 It generates a keypair containing a public and private key.            
 Private key should be kept secret and public key can be shared freely.         
 

## Salting

 Hashes are great for making passwords unreadable, but they always produce the same output, they are not very secure.             
 
 A salt is a random string that is added to the input before hashing.           
 This makes hash more unique and harder to guess.             
 
 Users often user weak passwords, like "password123".              
 When a database is compromised, the attacker can easily find the value of an unsalted hash by searching in precomputed "rainbow table" of common hashes.             
 Salting fixes this.           
 
 * Salting is used to make a hash harder to guess
 * Salting appends a random string to the input before hashing
 
 Example of a password salt using the 'scrypt' algorithm in Node crypto
 ``` 
 TEXT ------------>  HASHING FUNCTION + RANDOM SALT -----------> SALT + Hashed value 
 ``` 

## Signing


 Signing is the process of creating a digital signature of a message.             
 A signature is a hash of the original message which is then encrypted with the sender's private key.            
  
 The signature can be verified by the recipient using the public key of the sender.                
 This can guarantee the original message is authentic and unmodified.         


## Symmetric Encryption

 Encryption is the process of making a message confidential (like a hash), while allowing it to be reversible (decrypted) with the proper key.            
 Each time a message is encrypted it is randomized to produce a different output.            
 
 In symmetric encryption, the same key is used to encrypt and decrypt the message.            

 * The same input will produce a different output, unlike hashes
 * Encrypted message can be reversed with the key
 * Same key used to encrypt and decrypt message
``` 
  TEXT    --- Encrypt ------> Encrypted Data  --- Decrypt ----->  TEXT (Decrypted Data)
                 |                                   |
                 |                                   |
                 ------------Shared Key --------------
```
 Perform symmetric encryption in Node by creating a cipher.        
 Encryption also has an initialization vector (IV) to randomize the pattern so a sequence of text won't produce the same output as a previous sequence


          
 
 
