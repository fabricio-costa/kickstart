import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xAdC28E58d8F6A34e02eA672A8bd36301f96365b2'
);

export default instance;