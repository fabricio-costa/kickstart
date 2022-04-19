import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x0ABd538B21f26649E48dbE0815497Dab296Bc1dE' 
);

export default instance;


//testnet.cloudwalk.io'0xAdC28E58d8F6A34e02eA672A8bd36301f96365b2'
//rinkeby '0x0ABd538B21f26649E48dbE0815497Dab296Bc1dE'