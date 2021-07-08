import { Context, Telegraf } from "telegraf";
import { Callback } from "../types";

export default async function middleware(ctx: Context, next: Callback) {
	console.log(`Got new message from ${ctx.from?.id}`);
	await next()
}
