// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
  string public name;

  constructor() {
  	name = "ContractName";
  }

  // Fallback: reverts if Ether is sent to this smart contract by mistake
  fallback() external payable {
  }
}
