const inpuserName = document.querySelector("#userName")
const inpemail = document.querySelector("#email")
const inppassword = document.querySelector("#password")
const inprepeatpassword = document.querySelector("#repeatPassword")
const btnenviar = document.querySelector("#btnenviar")
const alerta = document.querySelector('#alerta')
console.log(alerta)

function onsubmit(x) {

    x.preventDefault()
    const chekPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
    const mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    let userDate = {
        Name : inpuserName.value,
        Email : inpemail.value,
        Password : inppassword.value,
        RepeatPass : inprepeatpassword.value
    }
    
    if(userDate.Name  === "" || userDate.Email === "" || userDate.Password === "" || userDate.RepeatPass === "")
    {
            
            alerta.innerHTML = "Pleas filled all inputs "
            alerta.style.background = 'red'
            
        } else if (mail.test(inpemail.value) !== true ) {
            alerta.innerHTML = 'Please enter a correct email'
            alerta.style.background = 'red'
        
        } else if (chekPassword.test(inppassword.value) !== true) {
            alerta.innerHTML = ' Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit'
            alerta.style.background = 'red'
            
        } else if (inppassword.value !== inprepeatpassword.value) {
            alerta.innerHTML = 'Please chek if your correctly reapit yor password'
            alerta.style.background = 'red'

        } else {
            localStorage.setItem('user', JSON.stringify(userDate)) 
            alerta.innerHTML = 'User created success'
            alerta.style.background = 'green'
            
            setTimeout(function () {
                alerta.innerHTML = ""
                alerta.style.background = '#CFE2FF'
                location.href = 'users.html'
            }, 3000)
        }
        setTimeout(function () {
            alerta.innerHTML = ""
            alerta.style.background = '#CFE2FF'
        }, 3000)
        
        // const users = JSON.parse(localStorage.getItem('user'))  || [] 
        }  

        

btnenviar.addEventListener('click',onsubmit)