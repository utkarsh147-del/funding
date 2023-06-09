import React from 'react'
import styled from 'styled-components';
import { ethers } from 'ethers';
import { useState } from 'react';
const networks = {
    polygon: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Polygon Testnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
  };
const Wallet = () => {

    const[address,setAddress]=useState("");
    const[balance,setBalance]=useState(null);
const connectWallet=async()=>{
    await window.ethereum.request({ method:"eth_requestAccounts"});
    const provider=new ethers.providers.Web3Provider(window.ethereum,"any");
    if(provider.network!=='matic'){
        await window.ethereum.request({
            method:"wallet_addEthereumChain",
            params:[
                {
                    ...networks["polygon"]
                }
            ]
        })
        const account=provider.getSigner();
        const Address= await account.getAddress();
        setAddress(Address);
        const Balance= ethers.utils.formatEther( await account.getBalance());
        setBalance(Balance);

    }
   
}





  return (
    <ConnectWalletWrapper onClick={connectWallet}>
    {balance == null ? <Balance></Balance> : <Balance>{balance.slice(0,4)} Matic</Balance> }
    {address == '' ? <Address>Connect Wallet</Address> : <Address>{address.slice(0,6)}...{address.slice(39)}</Address>}
  </ConnectWalletWrapper>
  )
}

const ConnectWalletWrapper=styled.div`
    display:flex;
    align-flex:center;
    justify-content:space-between;
    background-color:${(props)=>props.theme.bgDiv};
    height:100%;
    padding: 5px 9px;
    color:${(props)=>props.theme.color};
    border-radius:10px;
    margin-right:15px;
    font-family:'Roboto';
    font-weight:bold;
    font-size:small;



`
const Address=styled.h2`
color:${(props)=>props.theme.color};
display:flex;
height:100%;
align-items:center;
justify-content:center;
padding:0 3px 0 3px;
border-radius:0 10px 10px 0 0;
`

const Balance = styled.h2`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`


export default Wallet