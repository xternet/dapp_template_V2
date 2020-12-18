const Contract = artifacts.require("Contract");

module.exports = async function(deployer) {
  await deployer.deploy(Contract)
};