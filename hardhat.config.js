require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
	solidity: "0.8.6",
	settings: {
		optimizer: {
			enabled: true,
			runs: 200,
		},
	},
	networks: {
		hardhat: {
			chainId: 1337, // chainId 1337 is for localhost
		},
		goerli: {
			url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
			chainId: 5,
		},
		// etherscan: {
		//   apiKey: {
		//     goerli: process.env.ETHERSCAN_API_KEY,
		//   },
		// },
	},
	gasReporter: {
		enabled: true,
		currency: "INR",
		coinmarketcap: process.env.COINMARKETCAP,
		token: "matic",
		outputFile: "gasReports2.txt",
		noColors: true,
	},
};
