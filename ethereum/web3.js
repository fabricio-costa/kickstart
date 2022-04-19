import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
	// We are in the browser and metamask is running.
	window.ethereum.request({ method: 'eth_requestAccounts' });
	web3 = new Web3(window.ethereum);
} else {
	// We are on the server *OR* the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
	 'https://rpc.testnet.cloudwalk.io'
	);
	web3 = new Web3(provider);
}

export default web3;


//'https://rpc.testnet.cloudwalk.io'
//'https://rinkeby.infura.io/v3/a5376359dda84675ae81b1664d7721dc'