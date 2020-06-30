export const formatTimeString = (timeSegment: number): string =>
	timeSegment.toString().padStart(2, '0');

export const formatDateString = (timestamp: number): string =>
	Intl.DateTimeFormat('en-GB', { month: 'short', day: '2-digit' }).format(
		timestamp
	);
