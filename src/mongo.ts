import { config } from "dotenv";
import { Db, MongoClient } from "mongodb";
import { Log } from "./types";
import { prepareMongoURL } from "./utils";
config();
class Mongo {
	private client: MongoClient | null = null;
	private database: Db | null = null;
	async connect() {
		this.client = await MongoClient.connect(
			prepareMongoURL(
				process.env.MOGNODB_URL || "mongodb://localhost:27017/<database>",
				process.env.MOGNODB_USERNAME || "",
				process.env.MOGNODB_PASSWORD || "",
				process.env.MOGNODB_DATABASE || "test"
			),
			{ useUnifiedTopology: true }
		);
		this.database = this.client.db(process.env.MOGNODB_DATABASE || "test");
	}

	async insertLog(data: Log): Promise<void> {
		await this.database?.collection("logs").insertOne(data);
	}
}

const mongo = new Mongo();

export default mongo;
