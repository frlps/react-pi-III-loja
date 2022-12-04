export const dateToBrasilianDateAndTime = (date: Date) => {
	return date.toLocaleDateString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit',
	});
};
