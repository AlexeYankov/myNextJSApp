import { RouterType } from "@/entities/types";
import { privateRouter } from "./private";
import { publicRouter } from "./public";

export const router: RouterType = Object.assign(publicRouter, privateRouter)
