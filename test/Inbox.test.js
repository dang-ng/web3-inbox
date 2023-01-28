const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

class Car {
    drive(){
        return 'start'
    }
    park(){
        return 'stop'
    }
}

describe("Car",()=>{
    it("can drive",()=>{
        const car = new Car()
        assert.equal(car.drive(),"start")
    })
})

