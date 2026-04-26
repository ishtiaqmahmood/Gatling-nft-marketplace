# Gatling NFT Marketplace

Gatling NFT Marketplace is a professional, full-stack decentralized application (dApp) built on the Ethereum blockchain. It enables users to mint unique digital assets as NFTs, list them for sale, and purchase them in a secure environment.

## 🚀 Features

- **NFT Minting:** Users can create their own NFTs by uploading assets and metadata to IPFS.
- **Marketplace Listing:** Minted NFTs can be listed on the marketplace with a specified price in ETH.
- **Secure Transactions:** Powered by Solidity smart contracts and OpenZeppelin's industry-standard libraries to ensure secure ownership transfers and payments.
- **Personal Dashboard:** Users can track the NFTs they have minted and currently own.
- **Responsive UI:** A modern, clean interface built with Next.js and Tailwind CSS.

## 🛠 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Smart Contracts:** [Solidity](https://docs.soliditylang.org/)
- **Blockchain Tools:** [Hardhat](https://hardhat.org/), [Ethers.js](https://docs.ethers.io/v5/), [Web3Modal](https://github.com/Web3Modal/web3modal)
- **Storage:** [IPFS](https://ipfs.io/) via [Infura](https://infura.io/)
- **Security:** [OpenZeppelin Contracts](https://openzeppelin.com/contracts/)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Metamask](https://metamask.io/) browser extension

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nft-marketplace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   - Create a `p-key.txt` file in the root directory and add your private key.
   - (Optional) Update `hardhat.config.js` with your Infura project ID for Ropsten or Mainnet deployment.

## 💻 Local Development

1. **Start the local Hardhat node:**
   ```bash
   npx hardhat node
   ```

2. **Deploy the smart contracts:**
   In a new terminal, run:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

3. **Run the Next.js development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Running Tests

To run the smart contract tests, use:
```bash
npx hardhat test
```

## 📜 License

This project is licensed under the GPL-3.0 License.
