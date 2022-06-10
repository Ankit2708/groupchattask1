const signup=document.getElementById('signup')
signup.addEventListener('click',(e)=>{
    
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const phoneNumber=document.getElementById('phoneNumber').value
    const password=document.getElementById('password').value
    let userDetails={
        name:name,
        email:email,
        phoneNumber:phoneNumber,
        password:password
    }
    axios.post('/signup',userDetails).then(result=>{
        alert(result)
    })
})