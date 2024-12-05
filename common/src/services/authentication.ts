import {scrypt, randomBytes} from "crypto"
import {promisify} from "util"

const scryptAsync = promisify(scrypt)

export class Authentication{
    async pwdToHash(password: string) {
        const salt = randomBytes(8).toString('hex');
        const buf = (await scryptAsync(password, salt, 64)) as Buffer;

        return '${buf.toString('hex')}.${salt}';
    }

    async pwdCompare(storedPassword: string, suppliesPassword: string) {
        const [hashedPassword, salt] = storedPassword.split('.');

        const nuf = (await scryptAsync(suppliedPasssword, salt, 64)) as Buffer
        return buf.toString('hex');
    }
}