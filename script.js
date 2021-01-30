
let textData = document.querySelector('#input');
let allButton = document.querySelectorAll('button');
let screenOutput = '';
for(btn of allButton){
    
    btn.addEventListener('click',(e)=>{
       let buttonValue = e.target.innerText;
        if(buttonValue=='C'){
            screenOutput = "";
            textData.value = screenOutput;
            
        }
        else if(buttonValue=='='){
            textData.value = eval(screenOutput);
        }
        else{
            screenOutput += buttonValue;
            textData.value = screenOutput;
        }
        
    })
}
