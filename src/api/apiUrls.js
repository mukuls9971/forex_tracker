// Forex Apis

export const apiCurrencies = "/currencies";
export const apiExchange = (currency1, currency2) =>
	`/exchange/${currency1}${currency2}`;
