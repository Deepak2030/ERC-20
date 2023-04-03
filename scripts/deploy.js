const hre = require("hardhat");

async function main() {
  const lolcoin = await hre.ethers.getContractFactory("LolCoin");
  const lolCoin = await lolcoin.deploy(100000000, 50);

  await lolCoin.deployed();

  console.log("Ocean Token deployed: ", lolCoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});