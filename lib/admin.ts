import { auth } from "@clerk/nextjs/server"


const allowIds = [
    "user admin id"
]
export const getisAdmin = async() => {
    const {userId} = await auth()

    if(!userId) return false

    return allowIds.indexOf(userId) !== -1
}