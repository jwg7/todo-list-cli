const prompt = require('prompt-sync')({ sigint: true });

/*

1. Figure out the UI.
-console.logs()
     - different user options
     - welcome message
- prompts
- check if they input 1 or 2
1 for adding an item
2 for completing an item

2. Store to-do list items
- prompt user for to-do list item
-start with empty array
- array to store prompts 
-.push()
- store those items as incomplete. 


incomplete = false
complete = true

let statusArray = [];

["Wash dog", "Go for walk", "Get groceries"]
[false, true, false]

3. Completing incomplete items
- prompt for number that is the same number in the to-do list
- conditional to check completion status
*/

console.log("")
console.log(`Welcome to the To-Do List Manager Application!\n`)

console.log(`Select an action: `)
console.log(`[1] Create a to-do item`);
console.log(`[2] Complete a to-do item`);
console.log(`[3] Exit the program`);

let choice = Number(prompt("> "));

let items = [""];
let statusArray = [""];

while (choice !== 3) {
    if (choice === 1) {
        console.log('\nCreate a new to-do item:\n')
        let answer = prompt("Please enter an item: ")
        items.push(answer);
        statusArray.push(false)
        console.log(items)
        console.log(statusArray)
        printList();
        selectChoice();
    } else if (choice === 2) {

        if (statusArray.length > 1) {


            console.log(`\nSelect an item to complete\n`);
            let indexChoice = Number(prompt("Enter a number: "));


            while (indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)) {
                console.log(`ERROR: Please choose a number that actually exists.`)
                indexChoice = Number(prompt("Enter a number: "));
            }

            if (statusArray[indexChoice] === false) {
                statusArray[indexChoice] = true;
            }
        } else {
            console.log(`You have no items in your list!`);
        }


        printList();
        selectChoice();
    } else {
        console.log(`\nPlease choose a number between 1 and 3\n`)
        selectChoice();
    }
}


//////////////// Functions //////////////////////////////

function selectChoice() {
    console.log(`Select an action: `)
    console.log(`[1] Create a to-do item`);
    console.log(`[2] Complete a to-do item`);
    console.log(`[3] Exit the program`);
    choice = Number(prompt("> "));
}

function printList() {
    console.log(`\nCurrent To-Do list: `)
    let status = "";
    for (let i = 1; i < items.length; i++) {
        if (statusArray[i] === false) {
            status = "[incomplete] "
        } else if (statusArray[i] === true) {
            status = "[complete] ";
        }
        console.log(i + ". " + status + items[i])
    }
    console.log('')
}