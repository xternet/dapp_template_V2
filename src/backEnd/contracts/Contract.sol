// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

contract Contract {
  string public name;

  constructor() public {
  	name = "ContractName";
  }

  // Fallback: reverts if Ether is sent to this smart contract by mistake
  fallback() external payable {
  }
}