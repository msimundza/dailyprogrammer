/**
 * Created by Marko on 1.12.2016..
 */

/*
 [2016-11-21] Challenge #293 [Easy] Defusing the bomb
 RULES
 If you cut a white cable you can't cut white or black cable.
 If you cut a red cable you have to cut a green one
 If you cut a black cable it is not allowed to cut a white, green or orange one
 If you cut a orange cable you should cut a red or black one
 If you cut a green one you have to cut a orange or white one
 If you cut a purple cable you can't cut a purple, green, orange or white cable
 */

'use strict';

// valid "Bomb defused" input
var input = ['white', 'red', 'green', 'white'];

// invalid "BOOOOM!!!" input
// var input = ['white', 'orange', 'green', 'white']

var rules = {
    white: ['purple', 'red', 'green', 'orange'],
    red: ['green'],
    black: ['black', 'purple', 'red'],
    orange: ['black', 'red'],
    green: ['orange', 'white'],
    purple: ['black', 'red']
};

function defuse(input) {
    for (let i = 0; i < input.length; i++) {
        if (i == input.length - 1) {
            console.log("Bomb defused");
            return;
        } else if (testRules(input[i], input[i+1])===0){
            console.log("BOOOM!!!!");
            return;
        }
    }
}

function testRules(current, next){
    return rules[current].indexOf(next) != -1 ? 1: 0;
}

defuse(input);