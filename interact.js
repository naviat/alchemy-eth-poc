require('dotenv').config();
const { ethers } = require('ethers');

async function interact() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contractAddress = 'your-deployed-contract-address';
    const contract = new ethers.Contract(contractAddress, abi, wallet);

    // Set a new value
    const txResponse = await contract.set(55);
    await txResponse.wait();
    console.log("New value set!");

    // Get the current value
    const currentValue = await contract.get();
    console.log(`Current Value: ${currentValue}`);
}

interact().catch(console.error);
