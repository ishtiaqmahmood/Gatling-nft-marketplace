import "../styles/globals.css";
import "./app.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

function GatlingMarketplace({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const getData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    console.log(typeof(addr))
    setData(addr);
  };
  getData();

  return (
    <div className="a">
      <nav className="border-b p-6" style={{ backgroundColor: "#b91c1c" }}>
        <p className="p">Account : {data}</p>
        <h4 className="text-4x1 text-left top-1 font-bold text-black">Gatling Marketplace</h4>
        <div className="flex mt-4 justify-center">
          <Link href="/">
            <a className="mr-4">Main Marketplace</a>
          </Link>
          <Link href="/mint-item">
            <a className="mr-6">Mint Tokens</a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6">My NFTs</a>
          </Link>
          <Link href="/account-dashboard">
            <a className="mr-6">Account Dashboard</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
export default GatlingMarketplace;
