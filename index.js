#! /usr/bin/env node
import inquirer from "inquirer";
let weight = await inquirer.prompt([{
        name: "kg",
        type: "number",
        message: "enter your weight in kg"
    }]);
let height = await inquirer.prompt([{ name: "meter",
        type: "number",
        message: "enter your height in meter" }]);
console.log(`your BMI is ${weight.kg / (height.meter * height.meter)}`);
