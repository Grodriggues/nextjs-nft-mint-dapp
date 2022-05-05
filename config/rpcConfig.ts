// For Ethereum, use the Infura endpoints
export default function rpcConfig(infuraKey?: string) {
  return process.env.NODE_ENV === 'production'
    ? 'https://polygon-rpc.com' // `https://mainnet.infura.io/v3/${infuraKey}`
    : 'https://rpc-mumbai.maticvigil.com'; // `https://rinkeby.infura.io/v3/${infuraKey}`
}
