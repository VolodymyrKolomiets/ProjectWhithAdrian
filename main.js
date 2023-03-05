const btnenviar = document.querySelector("#btnenviar")
const alerta = document.querySelector('#alerta')


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
            alerta.innerHTML = `<div class="alert alert-success" role="alert">User created success</div>`



            setTimeout(function () {
                alerta.innerHTML = ""
                alerta.style.background = '#CFE2FF'
                window.location.href = 'users.html'
               }, 3000)

              
        }
        setTimeout(function () {
            alerta.innerHTML = ""
            alerta.style.background = '#CFE2FF'
        }, 3000)


    })
}

const userPage = document.querySelector('#userPage')

function print() {
    let usersArray = JSON.parse(localStorage.getItem('users')) || []

    for (i = 0; i < usersArray.length; i++) {
        if (userPage) {
            userPage.innerHTML += `<div class='card' style='width: 18rem;'>
            <div class= 'card-header'>User</div>
            <ul class='list-group list-group-flush'>
              <li id= 'nameStrong' class='list-group-item'>Name: ${usersArray[i].Name}</li>
              <li class='list-group-item'>Email: ${usersArray[i].Email}</li>
            </ul>
          </div>`
        }
    }
}

print()









