import { PrismaClient } from "@prisma/client"

const PrismaClientSingleton = ()=>{
    return new PrismaClient
}


const prisma = PrismaClientSingleton()

export default prisma

