export const dateFormatter = (
	locale: string,
	options?: Intl.DateTimeFormatOptions
): ((date: string | Date) => string) => {
	const localDate = new Date();
	options = options || {
		year: "numeric",
		month: "short",
		day: "numeric",
		weekday: "short",
		timeZone: "UTC",
	};
	const formatter = new Intl.DateTimeFormat(locale, options);
	return (date: string | Date): string => {
		if (date) {
			if (typeof date === "string") {
				const dateSplit = date.split("-").map((val) => {
					return parseInt(val);
				});
				localDate.setUTCFullYear(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
			} else {
				return formatter.format(date);
			}
			localDate.setUTCHours(0, 0, 0, 0);

			return formatter.format(localDate);
		}
	};
};
