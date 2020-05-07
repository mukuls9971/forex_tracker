import React from "react";
import {
	getCurrencies,
	getCrossRates,
	currencyConfig,
	crossRateConfig,
} from "./actions";
import { forexConfig } from "../../constants";
import Heading from "../../components/Forex/Heading";
import Description from "../../components/Forex/Description";
import ExchangeTable from "../../components/Forex/ExchangeTable";

let refreshTimer = null;

class Forex extends React.Component {
	state = { config: forexConfig };

	async componentWillMount() {
		const currencies = await getCurrencies();
		this.setState(currencyConfig(this.state.config, currencies));

		refreshTimer = setInterval(async () => {
			const crossRates = await getCrossRates(currencies);
			this.setState(crossRateConfig(this.state.config, crossRates));
		}, 4000);
	}

	componentWillUnmount() {
		clearInterval(refreshTimer);
	}

	render() {
		return (
			<div className="container">
				{Object.values(this.state.config.grids).map((grid, index) => (
					<div key={index}>
						<Heading heading={grid.heading} />
						<Description description={grid.description} />
						<ExchangeTable
							exchangeData={{
								currencies: this.state.config.currencies,
								data: grid.data,
							}}
						/>
					</div>
				))}
			</div>
		);
	}
}

export default Forex;
