// ATM Project.

import inquirer from "inquirer";


    const user = await inquirer.prompt([{

        type: "input",
        name: "userID",
        message: "Enter your UserName"

    },{


        type: "number",
        name: "pinCode",
        message: "Enter secret pin code: "
    },{
    
        type: "list",
        name: "transactionType",
        choices: ["Fast cash","withdraw","balanceInquiry"],
        message: "Select transaction type: "
    },{
    
        type: "list",
        name: "fastCash",
        choices: [1000,3000,5000,7000,10000],
        message: "Select your transaction: ",
        when(user){

            return user.transactionType == "Fast cash";
        }
    },{

        type: "number",
        name: "withdrawAmount",
        message: "Enter withdraw amount: ",
        when(user){

            return user.transactionType == "withdraw";
        }

    }]);

    if(user.pinCode === 54452 && user.userID === "Rahman"){

        console.log("..........Welcome to ATM Service.........")
       
    }else{

        throw new Error("Invalid Pin Code and username..");

    }

    let generateBalance = Math.floor(Math.random()* 1000000);
    console.log(`Your balance: ${generateBalance}`);

    if(user.transactionType === "Fast cash"){

        generateBalance -= user.fastCash;
        console.log(`Amount you want to withdraw: ${user.fastCash} and your remaining balance is ${generateBalance}`);
    }

    else if(user.transactionType === "withdraw"){

        generateBalance -= user.withdrawAmount;
        console.log(`your withdraw amount: ${user.withdrawAmount} and your remaining balance after withdraw ${generateBalance}`);
    }

    else if(user.transactionType === "balaceInquiry"){

        console.log(`Your Balance : ${generateBalance}`);
    }



  
