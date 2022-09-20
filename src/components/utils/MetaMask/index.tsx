import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import ReadERC20 from "./ReadERC20"
import TransferERC20 from "./TransferERC20"
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

declare let window: any
const addressERC20 = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

export const MetaMask = () => {

  const [balance, setBalance] = useState<string | undefined>()
  const [currentAccount, setCurrentAccount] = useState<string | undefined>()
  const [chainId, setChainId] = useState<number | undefined>()
  const [chainname, setChainName] = useState<string | undefined>()

  useEffect(() => {
    //get ETH balance and network info only when having currentAccount
    if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return

    //client side code
    if (!window.ethereum) {
      console.log("please install MetaMask")
      return
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.getBalance(currentAccount).then((result) => {
      setBalance(ethers.utils.formatEther(result))
    }).catch((e) => console.log(e))

    provider.getNetwork().then((result) => {
      setChainId(result.chainId)
      setChainName(result.name)
    }).catch((e) => console.log(e))

  }, [currentAccount])

  //click connect
  const onClickConnect = () => {
    //client side code
    if (!window.ethereum) {
      console.log("please install MetaMask")
      return
    }
    /*
    //change from window.ethereum.enable() which is deprecated
    //call window.ethereum.request() directly
    window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts:any)=>{
      if(accounts.length>0) setCurrentAccount(accounts[0])
    })
    .catch('error',console.error)
    */

    //we can do it using ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.send("eth_requestAccounts", [])
      .then((accounts) => {
        if (accounts.length > 0) setCurrentAccount(accounts[0])
      }).catch((e) => console.log(e))

  }

  //click disconnect
  const onClickDisconnect = () => {
    console.log("onClickDisConnect")
    setBalance(undefined)
    setCurrentAccount(undefined)
  }

  return (
    <Box className="metamask" sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        {currentAccount
          ? <Button onClick={onClickDisconnect}>
            Account:{currentAccount}
          </Button>
          : <Button onClick={onClickConnect}>
            Connect MetaMask
          </Button>
        }
      </Box>
      {currentAccount
        ? <Box sx={{ flexGrow: 1 }}>
          <div>Account info</div>
          <div>ETH Balance of current account: {balance}</div>
          <div>Chain Info: ChainId {chainId} name {chainname}</div>
        </Box>
        : <></>
      }

      <Box sx={{ flexGrow: 1 }}>
        <div>Read ClassToken Info</div>
        <ReadERC20
          addressContract={addressERC20}
          currentAccount={currentAccount}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <div>Transfer Classtoken</div>
        <TransferERC20
          addressContract={addressERC20}
          currentAccount={currentAccount}
        />
      </Box>
    </Box>
  )
}

export default MetaMask
