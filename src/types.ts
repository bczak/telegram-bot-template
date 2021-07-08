export type Callback = () => void;
export enum Severity {
	ERROR = "ERROR",
	INFO = "INFO",
	WARNING = "WARNING",
}
export type Log = {
	timestamp: Number;
	severity: Severity;
	message: string;
};
