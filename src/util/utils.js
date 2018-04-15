import moment from 'moment';

export function isCpf(string = '') {
	return !isNaN(Number(removeMask(string) || 'l'));
};

export function isEmail(string = '') {
	return string.includes('@');
};

export function isBirthDate(string = '') {
	return moment(string, 'dd/MM/yyyy').isValid();
};

export function removeMask(string = '') {
	return string.replace(/\D/g, '');
};

export function buildQueryString(query = '') {
	if (isCpf(query)) {
		query = removeMask(query);
		return `?cpf=${query}`;
	}

	if (isEmail(query)) {
		return encodeURI(`?email=${query}`);
	}

	if (isBirthDate(query)) {
		return `?nascimentoTs=moment(query, 'dd/MM/yyyy').valueOf()`;
	}

	return `?q=${query}`;
};