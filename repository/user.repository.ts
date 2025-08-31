import User from "../models/user.model.ts"
import { generateUserID } from "../utils/helpers.ts";

export const getAllUser = async () => {
    try {
        return await User.findAll()
    } catch (e) {
        throw new Error('Failed to fetch User');
    }
}
export const createUser = async (userData: any) => {
    try {
        return await User.create(userData)
    } catch (e) {
        console.log(e)
        throw new Error('Failed to create User');
    }
}
export const getUserByEmail = async (email: string) => {
    try {
        return await User.findOne({
            where: {
                email: email
            },
            raw: true
        })
    } catch (e) {
        throw new Error('Failed to Fetch User By Email')
    }
}
export const getUserById = async (userid: string) => {
    try {
        return await User.findOne({
            where: {
                userid
            },
            raw: true
        })
    } catch (e) {
        console.error(e)
        throw new Error('Failed to Fetch User')
    }
}
export const deductUserBalance = async ({ amount, userid }:{ amount: number, userid: string }) => {
    try {
        return await User.decrement({ credit: amount }, {
            where: {
                userid
            }
        })
    } catch (e) {
        console.error(e)
        throw new Error('Failed to deduct User')
    }
}
export const addUserBalance = async ({ amount, userid }:{ amount: number, userid: string }) => {
    try {
        return await User.increment({ credit: amount }, {
            where: {
                userid
            }
        })
    } catch (e) {
        console.error(e)
        throw new Error('Failed to deduct User')
    }
}