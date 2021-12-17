const inquirer = require("inquirer")
const fs = require("fs")

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Confirmation variables
var numberConfirm;
var specialCharConfirm;
var upperCaseConfirm;
var lowerCaseConfirm;
var lengthConfirm = "";

console.log("##################################")
console.log("#                                #")
console.log("#                                #")
console.log("#                                #")
console.log("#           WELCOME TO           #")
console.log("#  THE PASSWORD GENERATOR MASTER #")
console.log("#                                #")
console.log("#                                #")
console.log("#                                #")
console.log("##################################")
console.log("                                  ")


generatePassword()

function generatePassword() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'lengthConfirm',
            message: 'Choose desired character length of password',
            choices: [
                '10',
                '20',
                '30']
        }
    ]).then(response => {
        switch (response.lengthConfirm) {
            case "10":
                generate5CharacterPass()
                break;
            case "20":
                generate20CharacterPass()
                break;
            case "30":
                generate30CharacterPass()
                break;
        }
    })
}

// Password creation process variables
var userPasswordChar = [];
var passRand = "";

// 10 Character Password Generator
function generate5CharacterPass() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'number',
            message: 'Would like your password to have numbers?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'specialChar',
            message: 'Would you like your password to have special characters?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'upperCaseChar',
            message: 'Would you like your password to have uppercase characters?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'lowerCaseChar',
            message: 'Would you like your password to have lowercase letters?',
            choices: [
                'yes',
                'no'
            ]
        },
    ]).then(response => {

        if (response.number === 'yes') {
            userPasswordChar = userPasswordChar.concat(number)
        }
        if (response.specialChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(specialChar)
        }
        if (response.upperCaseChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(upperCaseChar)
        }
        if (response.lowerCaseChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(lowerCaseChar)
        }

        for (var i = 0; i < 10; i++) {
            passRand = passRand + userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];
        }
        console.log(`Here is your random Password: ${passRand}`) 
    })
}

// 20 Character Password Generator
function generate20CharacterPass() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'number',
            message: 'Would like your password to have numbers?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'specialChar',
            message: 'Would you like your password to have special characters?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'upperCaseChar',
            message: 'Would you like your password to have uppercase characters?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'lowerCaseChar',
            message: 'Would you like your password to have lowercase letters?',
            choices: [
                'yes',
                'no'
            ]
        },
    ]).then(response => {

        if (response.number === 'yes') {
            userPasswordChar = userPasswordChar.concat(number)
        }
        if (response.specialChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(specialChar)
        }
        if (response.upperCaseChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(upperCaseChar)
        }
        if (response.lowerCaseChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(lowerCaseChar)
        }

        for (var i = 0; i < 20; i++) {
            passRand = passRand + userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];
        }
        console.log(`Here is your random Password: ${passRand}`) 
    })
}

// 30 Character Password Generator
function generate30CharacterPass() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'number',
            message: 'Would like your password to have numbers?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'specialChar',
            message: 'Would you like your password to have special characters?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'upperCaseChar',
            message: 'Would you like your password to have uppercase characters?',
            choices: [
                'yes',
                'no'
            ]
        },
        {
            type: 'list',
            name: 'lowerCaseChar',
            message: 'Would you like your password to have lowercase letters?',
            choices: [
                'yes',
                'no'
            ]
        },
    ]).then(response => {

        if (response.number === 'yes') {
            userPasswordChar = userPasswordChar.concat(number)
        }
        if (response.specialChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(specialChar)
        }
        if (response.upperCaseChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(upperCaseChar)
        }
        if (response.lowerCaseChar === 'yes') {
            userPasswordChar = userPasswordChar.concat(lowerCaseChar)
        }

        for (var i = 0; i < 30; i++) {
            passRand = passRand + userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];
        }
        console.log(`Here is your random Password: ${passRand}`) 
    })
}
