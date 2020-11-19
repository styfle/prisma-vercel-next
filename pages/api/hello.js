const { PrismaClient } = require('../../prisma/generated/client')

export default async (req, res) => {
  const prisma = new PrismaClient()
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (e) {
    res.status(200).send(e.stack)
  }
}
