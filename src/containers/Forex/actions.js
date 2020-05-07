import axios from "../../api/axios";
import { apiCurrencies, apiExchange } from "../../api/apiUrls";

export const getCurrencies = async () => {
	const url = apiCurrencies;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (e) {
		console.log(e);
		return [];
	}
};

export const getCurrencyExchange = async (currency1, currency2) => {
	const url = apiExchange(currency1, currency2);
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const getCrossRates = async (currencies) => {
	var crossRateArr = new Array(currencies.length)
		.fill(null)
		.map(() => new Array(currencies.length).fill(null));

	let promisesList = [];
	for (let i = 0; i < currencies.length; i++) {
		for (let j = 0; j < i; j++) {
			promisesList.push(
				getCurrencyExchange(currencies[i], currencies[j]).then((res) => {
					crossRateArr[i][j] = res;
					crossRateArr[j][i] = res ? (1 / res).toFixed(2) : null;
				})
			);
		}
	}

	await Promise.all(promisesList);
	return crossRateArr;
};

const getPercentageRate = (rate1, rate2) => {
	return (((rate1 - rate2) / rate1) * 100).toFixed(2) + "%";
};

const getHeatMaps = (currentRate, previousRate) => {
	if (!previousRate.length) return previousRate;
	return currentRate.map((row, i) =>
		row.map((col, j) =>
			col ? getPercentageRate(col, previousRate[i][j]) : null
		)
	);
};

export const currencyConfig = (config, response) => {
	return {
		config: {
			...config,
			currencies: response,
		},
	};
};

export const crossRateConfig = (config, response) => {
	return {
		config: {
			...config,
			grids: {
				...config.grids,
				crossRate: {
					...config.grids.crossRate,
					data: response,
				},
				heatMap: {
					...config.grids.heatMap,
					data: getHeatMaps(response, config.grids.crossRate.data),
				},
			},
		},
	};
};
