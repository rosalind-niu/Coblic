'use strict';

var currentNumber = "";
var lastAction = "";
var currentTotal = 0;

function setConsole(value) {
    $("#console").html(value);
}

function calculate(existingValue, newValue, action) {
    var calculatedValue = existingValue;
    
    if (!isNaN(newValue)) {
        if (action === "add") {
            calculatedValue = existingValue + newValue;
        }
        else if (action === "sub") {
            calculatedValue = existingValue - newValue;
        }
        
        if (existingValue !== 0) {
            if (action === "times") {
                calculatedValue = existingValue * newValue;
            }
            else if (action === "divide") {
                calculatedValue = existingValue / newValue;
            }
        }
        else {
            calculatedValue = newValue;
        }
    }
    
    return calculatedValue;
}

$(function () {
    $(".number").click(function() {
        currentNumber += $(this).val();
        setConsole(currentNumber);
    });
    
    $(".action").click(function() {
        var newValue = parseFloat(currentNumber);
        var action = $(this).val();
        
        if (action !== "equals" && action !== "AC") {
            lastAction = action;
        }

        currentNumber = "";
        
        if (action === "AC") {
            currentNumber = "";
            currentTotal = 0;
        }
        else if (action === "equals") {
            currentTotal = calculate(currentTotal, newValue, lastAction);
        }
        else {
            currentTotal = calculate(currentTotal, newValue, action);
        }
    
        setConsole(currentTotal);
    });
});










