import { ethers, upgrades } from "hardhat";

async function main() {
  const NFTFactory = await ethers.getContractFactory("MyToken");
    const token = await upgrades.deployProxy(NFTFactory, ["MyToken", "MTK"], {
      initializer: "initialize",
      kind: "uups"
    });
    await token.deployed();

  console.log("contract deployed with address:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
