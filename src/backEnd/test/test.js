import { tokens, ether, ETHER_ADDRESS } from './helpers'

const Contract = artifacts.require('./Contract')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Contract', ([acc1, acc2]) => {
  let contract

  beforeEach(async () => {
    contract = await Contract.new()
  })

  describe('1st block of tests', () => {
    it('checks contract name', async () => {
      const result = await contract.name()
      result.should.equal("ContractName")
    })

    it('1st test1', async () => {        
    })
  })

  describe('2nd block of tests', () => {
    it('2nd test1', async () => {
    })

    it('2nd test1', async () => {
    })
  })
})