import { Telegraf } from "telegraf";
import { config } from "dotenv";

config()

const bot = new Telegraf(process.env.BOT_TOKEN || '')

bot.launch({})