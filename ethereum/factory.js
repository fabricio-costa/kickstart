import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xa0fB49B273da19F00486aA7c047Bd287CC6c0519' 
);

export default instance;


//testnet.cloudwalk.io'0xa0fB49B273da19F00486aA7c047Bd287CC6c0519'
//rinkeby '0x0ABd538B21f26649E48dbE0815497Dab296Bc1dE'