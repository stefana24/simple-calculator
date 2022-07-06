import {addition, substraction,multiplication,division} from './utils.js'

class Calculator{
    constructor(previous,current){
        this.previous = previous
        this.current = current
    }

    insertNumber(number){
        if(this.current.value !=="0"){
            this.current.value = this.current.value.toString()+ number.toString()
        }else{
            this.current.value = number.toString()
        }

    }

    clear(){
        this.current.value = 0
    }

    delete(){
        this.current.value = this.current.value.toString().slice(0,-1)
    }

    insertOperation(operation){
        this.operation = operation
        this.previous.style.display = "block"
        this.previous.value = this.current.value
        this.current.value = 0
    }

    displayResult(){
        const prev = parseFloat(this.previous.value)
        const current = parseFloat(this.current.value)
        console.log(prev,current)
        this.previous.style.display = 'none'
        if(this.operation === '+'){
            this.current.value = addition(prev,current)
        }else if(this.operation === '-'){
            this.current.value = substraction(prev,current)
        }else if(this.operation === '*'){
            this.current.value = multiplication(prev,current)
        }else{
            this.current.value = division(prev,current)
        }
    }
}

const previous = document.querySelector("#previous")
const current = document.querySelector("#current")

const calculator = new Calculator(previous,current)
const numbers = document.querySelectorAll('.numbers')
const clearBtn = document.getElementById('clear-all')
const deleteBtn = document.getElementById('delete')
const operations = document.querySelectorAll('.operations')
const equal = document.getElementById('equal')


numbers.forEach(number =>{
    number.addEventListener('click',()=>{
        calculator.insertNumber(number.innerHTML)
    })
})

clearBtn.addEventListener('click',()=>{
    calculator.clear()
})

deleteBtn.addEventListener('click',()=>{
    calculator.delete()
})

operations.forEach(operation => {
    operation.addEventListener('click',()=>{
        calculator.insertOperation(operation.innerHTML)
    })
})

equal.addEventListener('click',()=>{
    calculator.displayResult()
})
