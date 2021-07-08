import { Telegraf } from "telegraf";
import { config } from "dotenv";
import { info } from "console";
import middleware from "./setup/middleware";

config();

const bot = new Telegraf(process.env.BOT_TOKEN || "");

async function main() {
	bot.use(middleware);
	await bot.launch({});
}

main().then(() => {
	info("Bot has launched");
});
