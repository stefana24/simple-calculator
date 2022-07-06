let previous = document.querySelector('#previous')
let current = document.querySelector('#current')

const numbers = document.getElementsByClassName('numbers')
const clearAll = document.getElementById('clear-all')
const deleteBtn = document.getElementById('delete')
const operations = document.getElementsByClassName('operations')
const equalBtn = document.getElementById('equal')

let currentOperation;


for(const number of numbers){
    number.addEventListener('click',function(){
        if(current.value !== "0"){
            current.value += number.innerHTML;
        }else{
            current.value = number.innerHTML;
        }
    })
}


clearAll.addEventListener('click',function(){
    current.value = "0";
})


deleteBtn.addEventListener('click',function(){
    if(!current.value.includes('.')){
        let getCurrent = parseInt(current.value)
        current.value = Math.floor(getCurrent/10)
    }else{
        let floatValue = current.value.slice(0,-1)
        current.value = floatValue
    }

})


for(const operation of operations){
    operation.addEventListener('click',function(){
        currentOperation = operation.innerHTML
        if(current.value!=="0"){
            previous.style.display = "block"
            previous.value = current.value
            current.value = 0
        }
    
    })
}

equalBtn.addEventListener('click',function(){
    let result;
    switch(currentOperation){
        case "+":
            result = parseFloat(previous.value)+parseFloat(current.value)
            break;
        case "-":
            result = parseFloat(previous.value)-parseFloat(current.value)
            break;
        case "*":
            result = parseFloat(previous.value)*parseFloat(current.value)
            break
        case "/":
            result = parseFloat(previous.value)/parseFloat(current.value)
            break
        default:
            console.log('invalid operation')
            break

    }
   
    previous.style.display = "none"
    current.value = result
})
