import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    let orders = await prisma.orders.findMany({
        where: {id: Number(e.context.params.userId)},
        orderBy: {id: 'desc'},
        include : {
            orderItem: {
                include: {
                    product: true
                }
            }
        }
    })

    return orders
})