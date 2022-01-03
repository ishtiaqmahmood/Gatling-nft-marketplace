require("@nomiclabs/hardhat-waffle");


const projectId = '359476e480a54b6e84168b21857d6c27'
const fs = require('fs')
const keyData = fs.readFileSync('./p-key.txt', {
  encoding:'utf8', flag:'r'
})


module.exports = {
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {
      chainId: 1337, // config standard
      gas: 2100000,
      gasPrice: 8000000000
    },
    ropsten: {
      url:`https://ropsten.infura.io/v3/${projectId}`,
      accounts:[keyData],
      gas: 2100000,
      gasPrice: 8000000000
    },
    mainnet: {
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
