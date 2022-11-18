const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const button3 = document.querySelector('.btn3')
const modalContainer = document.querySelector('.modal-container')
const closeBtn = document.querySelector('.close-btn')
const firstNameHolder = document.getElementById('firstname-holder')
const lastNameHolder = document.getElementById('lastname-holder')
const addressHolder = document.getElementById('address-holder')
const occupationHolder = document.getElementById('occupation-holder')
const photoHolder = document.getElementById('photo-holder')
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')
const error5 = document.getElementById('error5')
const submitBtn = document.getElementById('submit-btn')
const form = document.querySelector('form')
const successContainer = document.querySelector('.success-container')
const doneBtn = document.getElementById('done-btn')


button1.addEventListener('click',() =>{
  modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', () =>{
  modalContainer.style.display = 'none'
})

button2.addEventListener('click',() =>{
  modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', () =>{
  modalContainer.style.display = 'none'
})


button3.addEventListener('click',() =>{
  modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', () =>{
  modalContainer.style.display = 'none'
})


submitBtn.onclick = errorMsg

function errorMsg(){
  if (firstNameHolder.value.length == '')
  {
    console.log('false');
    error1.innerHTML = '<h4>Please enter your firstname</h4>'
    firstNameHolder.style.border = 'red 2px solid'
    firstNameHolder.style.transition = '0s'
    setTimeout(() => document.querySelector('h4').remove(), 1000 );
  }

  else

  {
    firstNameHolder.style.border = 'black 2px solid'
  }

  if (lastNameHolder.value.length == '')
  {
    console.log('false');
    error2.innerHTML = '<h4>Please enter your lastname</h4>'
    lastNameHolder.style.border = 'red 2px solid'
    lastNameHolder.style.transition = '0s'
    setTimeout(() => document.querySelector('h4').remove(), 1000 );
  }

  else

  {
    lastNameHolder.style.border = 'black 2px solid'
  }

  if (addressHolder.value.length == '')
  {
    console.log('false');
    error3.innerHTML = '<h4>Please enter your lastname</h4>'
    addressHolder.style.border = 'red 2px solid'
    addressHolder.style.transition = '0s'
    setTimeout(() => document.querySelector('h4').remove(), 1000 );
  }else{
    addressHolder.style.border = 'black 2px solid'
  }

  if (occupationHolder.value.length == '')
  {
    console.log('false');
    error4.innerHTML = '<h4>Please enter your lastname</h4>'
    occupationHolder.style.border = 'red 2px solid'
    occupationHolder.style.transition = '0s'
    setTimeout(() => document.querySelector('h4').remove(), 1000 );
  }

  else

  {
    occupationHolder.style.border = 'black 2px solid'
  }

  if (photoHolder.files.length == 0)
  {
    console.log('false');
    error5.innerHTML = '<h4>Upload an image</h4>'
    photoHolder.style.border = 'red 2px solid'
    photoHolder.style.transition = '0s'
    setTimeout(() => document.querySelector('h4').remove(), 1000 );
  }

  else

  {

    successContainer.style.display = 'block'
    modalContainer.style.display = 'none'
    setTimeout(()=> document.querySelector('.success-container').remove(),5000)
    doneBtn.addEventListener('click', ()=>{
      successContainer.style.display = 'none'
    })
    console.log('true')

  }

  }

