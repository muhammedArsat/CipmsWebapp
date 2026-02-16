import jwt from "jsonwebtoken";
import prisma from "../configs/prisma.Dbconfig.js";
import { JWT_SECRET } from "../configs/env.config.js";

import { Prisma, User } from "../generated/prisma/client.js";
import { AppError } from "../utils/AppError.js";

export class AuthService {
  static async handleGoogleLogin(user: User) {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!existingUser) {
      throw new AppError("User not found", 404)
    }

    const payload = {
      id: existingUser?.id,
      name: existingUser?.name,
      profile: existingUser.profileUrl,
      role: existingUser?.role,
      email: existingUser.email,
    }

    if (!JWT_SECRET) {
      throw new AppError("Jwt secret key is missing", 500)
    }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" })

    return token
  }

  static async handleProfile(id: string) {
    try {
      if (!id) {
        throw new AppError("User ID is required", 400)
      }

      const user = await prisma.user.findUnique({
        where: { id: id },
        select: {
          id: true,
          name: true,
          email: true,
          profileUrl: true,
          role: true,
        },
      })

      if (!user) {
        throw new AppError("User not found", 404)
      }

      return user
    } catch (err) {

      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new AppError("User not found", 404)
        }
      }
      throw err
    }
  }


}
