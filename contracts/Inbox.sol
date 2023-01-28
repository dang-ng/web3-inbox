// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    constructor(string initMessage) public {
        message = initMessage;
    }
    function setMessage(string newMessag) public{
        message = newMessag;
    }
}