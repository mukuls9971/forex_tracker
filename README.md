# forex_tracker

# Description

A React web app having tabular Forex Cross Rates and Forex Heat Map widgets.It features a real-time updated exchange price overview through APIs..

# Tech Stack:

React
JSX
Axios
NPM
Styled Components

# Underlying Logic

1. ForexConfig is created for initial state
2. Config is updated with currencies by getCurrencies() function.
3. Currencies are being passed to fetch exchange rates. And to minimize the api calls, only upper diagonal rates are fetched and reciprocate the result to get rates of lower diagonal.
4. Heat Maps are generated by using fetched exchange rates after interval of every 4000ms.
