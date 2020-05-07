import React from "react";

type Props = {
	exchangeData: String,
};

const ExchangeTable = ({ exchangeData }: Props) => {
	const offsetCurrencies = [null, ...exchangeData.currencies];

	const renderTable = () => (
		<tbody>
			{offsetCurrencies.map((legend1, row) => (
				<tr>
					{offsetCurrencies.map((legend2, col) => (
						<>
							{row === 0 || col === 0 ? (
								<th>{row === 0 ? legend2 : legend1}</th>
							) : (
								<td>
									{exchangeData.data.length
										? exchangeData.data[row - 1][col - 1]
										: null}
								</td>
							)}
						</>
					))}
				</tr>
			))}
		</tbody>
	);

	return (
		<div className="box">
			<table>{renderTable()}</table>
		</div>
	);
};

export default ExchangeTable;
