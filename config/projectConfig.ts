const projectConfig = {
  nftName: 'SkullsInLove',

  nftSymbol: 'SIL',

  maxSupply: 10000,

  maxMintAmountPerTxn: 10,

  mintCost: process.env.NODE_ENV === 'production' ? 100 : 0.01,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Polygon Mainnet' // 'Ethereum Mainnet'
      : 'Mumbai Testnet', // 'Rinkeby Testnet'

  chainName: 'MATIC', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 137 : 80001, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.yourdomain.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://your_site_domain`
      : 'http://localhost:3000',

  twitterUsername: '@your_twitter_handle',

  twitterUrl: 'https://twitter.com/your_twitter_handle',

  discordUrl: 'https://discord.gg/your_discord_invite_code',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/your_opensea_collection_name',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_CONTRACT_ADDRESS
      : process.env.DEV_CONTRACT_ADDRESS,

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://polygonscan.com/address/your_polygon_contract_address'
      : 'https://rpc-mumbai.maticvigil.com',
  // 'https://etherscan.io/address/your_ethereum_contract_address'
  // 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address'
};

export default projectConfig;
