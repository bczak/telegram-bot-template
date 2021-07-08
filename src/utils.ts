export function prepareMongoURL(url: string, username: string, password: string, database?: string): string {
	return url
		.replace("<username>", username)
		.replace("<password>", password)
		.replace("<database>", database || username);
}
