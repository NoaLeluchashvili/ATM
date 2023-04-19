let customers=[
    {   
        Name: 'Avi Cohen',
        pin: 1234,
        amount: 1000,
    },
    {   
        Name: 'Tal Cohen',
        pin: 1234,
        amount: 1000,
    },
    {   
        Name: 'Noa Cohen',
        pin: 1234,
        amount: 1000,
    },
    {   
        Name: 'Eliya Cohen',
        pin: 1234,
        amount: 1000,
    },
    {   
        Name: 'Shirly Cohen',
        pin: 1234,
        amount: 1000,
    }
]

let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let option5 = document.getElementById('option5');
let option6 = document.getElementById('option6');

let opbut1 = document.getElementById('opbut1');
let opbut2 = document.getElementById('opbut2');
let opbut3 = document.getElementById('opbut3');
let opbut4 = document.getElementById('opbut4');
let opbut5 = document.getElementById('opbut5');
let opbut6 = document.getElementById('opbut6');

let cancel = document.getElementById('cancel');
let clear = document.getElementById('clear');
let enter = document.getElementById('enter');

let cardImg= document.querySelector("img#card")
let receipt=document.querySelector("div#receiptpaper")

let RandomCust = Math.floor(Math.random() * 5)
let cust=customers[RandomCust]
//let btnEnter=document.querySelector("button#enter")
let y=0


cardImg.onclick=welcome

function welcome(){
    console.log(cust.Name, cust.pin)
    let image = document.getElementById('image')    
    card.style.animationName='example';

    content.innerHTML ='<form><h2>WELCOME, ' + cust.Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'
    keyboard();
    enter.onclick=function(){
        let pinCod=document.querySelector("input#number").value
        if(pinCod!=cust.pin&&y<3){
            content.innerHTML ='<h2>INVALID PIN. PLEASE TRY AGIAN</h2>'
            y++
            setTimeout(welcome,2000);
        }
        else if(y==3)
            content.innerHTML ='<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>'
        else{
            mainPage()
        }   
    }
    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
    clear.onclick = welcome;
    cancel.onclick = reload;
    opbut1.onclick = function(){}
    opbut2.onclick = function(){}
    opbut3.onclick = function(){}
    opbut4.onclick = function(){}   
    opbut5.onclick = function(){}   
    opbut6.onclick = function(){}
};






function mainPage(){


        content.innerHTML = '<h2>TO PROCEED, SELECT FROM THE OPTIONS BELOW.</h2>'

        option1.textContent = 'DEPOSIT';
        option2.textContent = 'WITHDRAWAL';
        option3.textContent = 'CHECK BALANCE';
        option4.textContent = 'CHANGE PIN';
        option5.textContent = 'RECEIPT';
        option6.textContent = 'EXIT';
    
        opbut1.onclick = deposit;
        opbut2.onclick = withdraw;
        opbut3.onclick = checkBalance;
        opbut4.onclick = changePin;
        opbut5.onclick = function(){}; // Reciept
        opbut6.onclick = exit;


    
};

// deposit
function deposit(){
  
    content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO DEPOSIT IN?'

    option1.textContent = 'SAVEING';
    option2.textContent = '';
    option3.textContent = 'GO BACK';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR SAVINGS?</h2><input id="number" type=number max="9999">'
        keyboard();
        let number = document.querySelector("input#number")
        console.log(number)
    
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = 'GO BACK';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

      
        enter.onclick = function(){
            if(Number(number.value)%20==0 || Number(number.value)%50==0){
            let savings = Number(cust.amount) + Number(number.value)
            console.log(savings)
            cust.amount = savings
            console.log(savings)
            content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS $' + Number(cust.amount) + '</h2>'
            setTimeout(mainPage, 3600);
            }else{
                content.innerHTML = '<h2>CANNOT BE SUPPORTED. ONLY 20 OR 50 PAPER.</h2>'
                setTimeout(deposit, 4000);
            }
     
        opbut1.onclick = function(){}
        opbut2.onclick = function(){}
        opbut3.onclick = function(){}
        opbut4.onclick = function(){}   
        opbut5.onclick = function(){}   
        opbut6.onclick = function(){}
    };
    opbut1.onclick = function(){}
    opbut2.onclick = function(){}
    opbut3.onclick = mainPage
    opbut4.onclick = function(){}   
    opbut5.onclick = function(){}   
    opbut6.onclick = function(){}
}
opbut2.onclick = function(){}
opbut3.onclick = mainPage
opbut4.onclick = function(){}   
opbut5.onclick = function(){}   
opbut6.onclick = function(){}
};





//withdraw
function withdraw(){
    content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO WITHDRAW FROM?</h2>'

    option1.textContent = 'CHECKING';
    option2.textContent = 'WITHDRAW';
    option3.textContent = 'GO BACK';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR CHECKING?</h2>'

        option1.textContent = '50';
        option2.textContent = '100';
        option3.textContent = '150';
        option4.textContent = '200';
        option5.textContent = '300';
        option6.textContent = 'OTHER';

        keyboard();

        enter.onclick = function(){
            let checking
            opbut1.onclick = function(){ checking = Number(cust.amount) - 50}
            opbut2.onclick = function(){ checking = Number(cust.amount) - 100}
            opbut3.onclick = function(){checking = Number(cust.amount) - 150}
            opbut4.onclick = function(){checking = Number(cust.amount) - 200}   
            opbut5.onclick = function(){checking = Number(cust.amount) - 300}   
            opbut6.onclick = function(){
                content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR CHECKING?</h2><input id="number" type=number max="9999">'
                checking = Number(cust.amount) - Number(number.value)
            }
            
            
            option1.textContent = '';
            option2.textContent = '';
            option3.textContent = '';
            option4.textContent = '';
            option5.textContent = '';
            option6.textContent = '';

            if (checking <= 0){
                content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

                setTimeout(mainPage, 2000);
            } else {

                cust.amount = checking

                content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS $' + Number(cust.amount).toFixed(2) + '</h2>'

                setTimeout(mainPage, 3200);
            };
        };
    };

    opbut2.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR SAVINGS?</h2><input id="number" type=number max="9999">'

            option1.textContent = '50';
        option2.textContent = '100';
        option3.textContent = '150';
        option4.textContent = '200';
        option5.textContent = '300';
        option6.textContent = 'OTHER';

        keyboard();
    
        enter.onclick = function(){
            var savings = Number(cust.amount) - Number(number.value)

            if(savings <= 0){
                content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

                setTimeout(mainPage, 2000);
            } else {
                cust.amount = savings
                content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS $' + Number(cust.amount).toFixed(2) + '</h2>'
                setTimeout(mainPage, 2200);
            };
        };
    };
   
    opbut3.onclick = mainPage;
    opbut4.onclick = function(){}   
    opbut5.onclick = function(){}   
    opbut6.onclick = function(){}
    
};

//cheack balance
function checkBalance(){
    content.innerHTML = '<form><h2>WHAT WOULD YOU LIKE TO DO?</h2>'

    option1.textContent = 'CHECKING';
    option2.textContent = '';
    option3.textContent = 'GO BACK';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<h2>YOUR CURRENT BALANCE FOR CHECKING IS $' + Number(cust.amount).toFixed(2) + '</h2>'
    };   
    opbut2.onclick = function(){}
    opbut3.onclick = mainPage;
    opbut4.onclick = function(){}   
    opbut5.onclick = function(){}   
    opbut6.onclick = function(){}

};

function exit(){
    content.innerHTML = '<form><h2>EXIT.<br> ARE YOU SURE? </h2>'

    option1.textContent = 'YES';
    option2.textContent = 'NO';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML ='<h2>GOODBBY, HAVE A NICE DAY</h2>'
        option1.textContent = '';
        option2.textContent = '';
        setTimeout(reload ,4000);
    };  
    opbut2.onclick = function(){
        mainPage()
    };
}

function keyboard(){
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');
    var button5 = document.getElementById('button5');
    var button6 = document.getElementById('button6');
    var button7 = document.getElementById('button7');
    var button8 = document.getElementById('button8');
    var button9 = document.getElementById('button9');
    var button0 = document.getElementById('button0');
    var buttondel = document.getElementById('delete');
    var buttonspa = document.getElementById('space');

    var keyboard = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttondel, buttonspa];

    var number = document.getElementById('number'); 

    keyboard.forEach(function (key,idx) {
        key.addEventListener('click', function(){
            console.log(Number(keyboard[idx].value)); 
            number.value += Number(keyboard[idx].value);
        });
    });

};


function changePin(){
    content.innerHTML = '<form><h2>ENTER YOUR CURRENT PIN</h2><input id="number" type=number max="9999">'
    y=0;
    keyboard();

    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = 'GO BACK';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){}
    opbut2.onclick = function(){}
    opbut3.onclick = mainPage
    opbut4.onclick = function(){}   
    opbut5.onclick = function(){}   
    opbut6.onclick = function(){}
    

    enter.onclick = function(){
        if (Number(number.value) !== Number(cust.pin)){
            content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
            y++
    
            if (y == 3){
                card.style.display = 'none';
                content.innerHTML = '<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>';
                setTimeout(reload, 4000);
            } else {
                setTimeout(changePin, 2200);
            }
    
        } else {
            content.innerHTML = '<h2>NOW, ENTER YOUR NEW PIN</h2><input id="number" type=number max="9999">';

            keyboard();


            var nnumber = document.getElementById('number')

            enter.onclick = function(){

                cust.pin = nnumber.value
                content.innerHTML = '<h2>YOUR NEW PIN NUMBER IS ' + cust.pin + '.<h2>';

                setTimeout(mainPage, 2200);

            }

            cancel.onclick = mainPage;
            opbut6.onclick = mainPage;

        }

    }
};
function reload(){
    location.reload()
}

function correctDeposite(amonut){
    if(amonut%20==0 || amount%50==0)
        return true
    return false
}