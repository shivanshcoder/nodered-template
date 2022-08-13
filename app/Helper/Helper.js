/**
 * Helper module
 */
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const hasher = require('argon2');

class Hash {
    /**
     * Generates hash of given value
     * @param value string
     * @returns hash string
     */
    static generateHash(value) {
        return hasher.hash(value);
    }

    /**
     * @param hash string
     * @param value string
     */
    static compareHash(hash, value) {
        return hasher.verify(hash, value);
    }

    /**
     * Generates token of given value
     * @param obj Object
     * @param  expireTime string
     * @returns token
     */
    static generateToken(obj, expireTime) {
        return (expireTime) ? jwt.sign(obj, process.zaadu.app.key, { expiresIn: expireTime }) : jwt.sign(obj, process.zaadu.app.key);
    }


    /**
     * @param token string
     * @returns decoded data
     */
    static verifyToken(token) {
        return jwt.verify(token, process.zaadu.app.key);
    }

    /**
     * Encrypt data
     * @param data
     * @return encrypted data
     */
    static encrypt(data) {
        const cipher = crypto.createCipher(
            process.zaadu.hash.encrypt_algorithm,
            process.zaadu.app.key,
        );
        let crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    /**
     * Decrypt data
     * @param encrypted data
     * @return decrypted data
     */
    static decrypt(encryptedData) {
        const decipher = crypto.createDecipher(
            process.zaadu.hash.encrypt_algorithm,
            process.zaadu.app.key,
        );
        let dec = decipher.update(encryptedData, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }

}

module.exports = Hash;
