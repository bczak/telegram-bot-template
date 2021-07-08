import { Telegraf } from "telegraf";
import { config } from "dotenv";
import { info } from "console";
import middleware from "./setup/middleware";
import "reflect-metadata";
import mongo from "./mongo";
import { Severity } from "./types";
config();

const bot: Telegraf = new Telegraf(process.env.BOT_TOKEN || "");

async function main(): Promise<void> {
	bot.use(middleware);
	await mongo.connect();
	await bot.launch({});
	await mongo.insertLog({ timestamp: Date.now(), message: "Bot has launched", severity: Severity.INFO });
}

main().then(() => {
	info("Bot has launched");
});
