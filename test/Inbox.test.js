const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')

let account
let inbox

beforeEach(async ()=>{
    account = await web3.eth.getAccounts()
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,arguments:['hi there']}).send({from:account[0],gas:'1000000'})
})
describe('Inbox',()=>{
    it('test1',()=>{
        assert.ok(inbox.options.address)
    })
    it('check default value',async ()=>{
        assert.equal(await inbox.methods.message().call(),'hi there')
    })
    it('set message',async ()=>{
        assert.ok(await inbox.methods.setMessage("hi derek").send({from:account[0]}))
    })
})