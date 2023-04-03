require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy") // why did we use this file???
require("solidity-coverage") 
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()
require("@nomiclabs/hardhat-solhint");
require("@nomicfoundation/hardhat-toolbox"); 

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {

  solidity: "0.8.17",
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId : 31337,
    },

    goerli: {
      url: GOERLI_RPC_URL,
      chainId: 5,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
  },

  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    },
  },

  gasReporter: {
    currency: 'INR',
    outputFile: "gas-report.txt",
  },

  contractSizer: {
    only: ["LolCoin.sol"],
  },

  // namedAccounts: {
  //   deployer: {
  //     default: 0,
  //   },
  // },


};