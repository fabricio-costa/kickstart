const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'inner grab you daring dune control any extra ring rib man keep',
  'https://rinkeby.infura.io/v3/a5376359dda84675ae81b1664d7721dc'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(compiledFactory.interface);
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();


//'https://rpc.testnet.cloudwalk.io'     
//'https://rinkeby.infura.io/v3/a5376359dda84675ae81b1664d7721dc'