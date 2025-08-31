import { SecretEnv } from "../constants/index.ts";
import * as Bcrypt from "bcryptjs"
class HashHandler {
    payload: any
    async generateHasher(payload: any) {
        try {
            return await Bcrypt.hash(payload, 10)
        } catch (error) {
            throw new Error(error)
        }
    }
   async verifyHash(plainText: string, hashed: string) {
        try {
            const decoded = await Bcrypt.hash(plainText, hashed)
            console.log(decoded,"see decoded")
            return decoded
        } catch (err) {
            throw err
        }
    }
}

const Hasher = new HashHandler()

export default Hasher;