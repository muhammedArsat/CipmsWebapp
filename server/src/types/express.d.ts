import "express";
import { User } from "../generated/prisma/client";
declare global {
  namespace Express {
    interface User extends User {}
  }
}
