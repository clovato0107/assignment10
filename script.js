// Coding Steps:
// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.


const formButton = document.getElementById('formSubmit')

let number = 0
formButton.addEventListener('click', (event) => {
    event.preventDefault()


    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value

    letnewTableRow = document.createElement('tr')
    // nodes 
    let numberNode = document.createElement('td')
        numberNode.innerHTML = number
        newTableRow.append(numberNode) 

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)
    // appends the table

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let emailNode= document.createElement('td')
    emailNode.innerHTML = email
    newTableRow.append(emailNode)


    document.getElementById('tBody').appendChild(newTableRow)

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('email').value = ''
    number++
})