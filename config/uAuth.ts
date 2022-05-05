import {UAuthConnector} from '@uauth/web3-react'
import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import type {AbstractConnector} from '@web3-react/abstract-connector'

// Instanciate your other connectors.
export const injected = new InjectedConnector({supportedChainIds: [1]})

export const walletconnect = new WalletConnectConnector({
  infuraId: undefined,
  qrcode: true,
  rpc: {
    1: process.env.RPC_ADDRESS!,
  },
  chainId: 1
  
 
})

export const uauth = new UAuthConnector({
  clientID: process.env.CLIENT_ID,
  redirectUri: process.env.REDIECT_URI,
  scope: 'openid wallet',
  connectors: {injected, walletconnect},
})

const connectors: Record<string, AbstractConnector> = {
  injected,
  walletconnect,
  uauth,
}

export default connectors