const btnenviar = document.querySelector("#btnenviar")
const alerta = document.querySelector('#alerta')
const UserPage = document.querySelector('#userPage')
const userCard = document.createElement('div')
userCard.classList.add('card')
userCard.style.width = '18rem'
const cardHeader = document.createElement('div')
cardHeader.classList.add('card-header')
const ulUser = document.createElement('ul')
ulUser.classList.add('list-group', 'list-group-flush')
const liName = document.createElement('li')
const liEmail = document.createElement('li')
liName.classList.add('list-group-item')
liEmail.classList.add('list-group-item')

//CREAR elementos

// UserPage.appendChild(userCard)
// userCard.appendChild(cardHeader)
// cardHeader.appendChild(ulUser)
// ulUser.appendChild(liName)
// ulUser.appendChild(liEmail)





if (btnenviar) {
    btnenviar.addEventListener('click', function (x) {

        x.preventDefault()
        const inpuserName = document.querySelector("#userName")
        const inpemail = document.querySelector("#email")
        const inppassword = document.querySelector("#password")
        const inprepeatpassword = document.querySelector("#repeatPassword")
        const chekPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
        const mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

        let userDate = {
            Name: inpuserName.value,
            Email: inpemail.value,
            Password: inppassword.value,
            RepeatPass: inprepeatpassword.value
        }


        if (userDate.Name === "" || userDate.Email === "" || userDate.Password === "" || userDate.RepeatPass === "") {

            alerta.innerHTML = `<div class="alert alert-danger">Pleas filled all inputs</div>`

        } else if (mail.test(inpemail.value) !== true) {
            alerta.innerHTML = `<div class="alert alert-danger">Please enter a correct email</div>`
            

        } else if (chekPassword.test(inppassword.value) !== true) {
            alerta.innerHTML = `<div class="alert alert-danger">Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit</div>`

        } else if (inppassword.value !== inprepeatpassword.value) {
            alerta.innerHTML = `<div class="alert alert-danger">Please chek if your correctly reapit yor password</div>`

        } else {
            let usersArray = JSON.parse(localStorage.getItem('users')) || []
            
            usersArray.push(userDate)
            
            localStorage.setItem('users', JSON.stringify(usersArray))
            alerta.innerHTML =`<div class="alert alert-success" role="alert">User created success</div>`
            
            
            setTimeout(function () {
                alerta.innerHTML = ""
                alerta.style.background = '#CFE2FF'
                location.href = 'users.html'
                userCardGen()
                printUser()
            }, 3000)
            
       
        }
        setTimeout(function () {
            alerta.innerHTML = ""
            alerta.style.background = '#CFE2FF'
        }, 3000)
        
      
        function userCardGen() {
            return `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${usersArray.Name}</h5>
                  <p class="card-text">${usersArray.Email}</p>
                </div>
              </div>
            `
          }
        
    })
}


function printUser() {
   return UserPage.appendChild(userCard),
    userCard.appendChild(cardHeader),
    cardHeader.appendChild(ulUser),
    ulUser.appendChild(liName),
    ulUser.appendChild(liEmail)
}
// printUser()





