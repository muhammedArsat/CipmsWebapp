import {prisma} from '../src/configs/prisma.Dbconfig'

async function main() {
    const adminEmail = "ars.code21@gmail.com"

    const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } })

    if (!existingAdmin) {
        await prisma.user.create({
          data: {
            name: "Admin Arsath",
            email: adminEmail,
            role: "ADMIN",
            isActive: true,
            department:"COMPUTER SCIENCE AND ENGINEERING"
          },
        });
    }
}

main().catch(console.error).finally(() => prisma.$disconnect())