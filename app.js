let input = document.querySelector('.email')
let errorhandel=document.querySelector('.errorh')
let notif=document.querySelector('.notif')
let Btnsubmit=document.querySelector('.dismiss')


Btnsubmit.addEventListener('click',()=>{
	notif.classList.add('hide')
	input.value=' '
})




let regex=/(\w+)\@(\w+).com/


let btn=document.querySelector('.submit')
btn.addEventListener('click',e=>{
	e.preventDefault()
	if(regex.test(input.value)){
	console.log(input.value);
		errorhandel.innerHTML =''
		input.classList.remove('errorIn')
		notif.classList.remove('hide')
		notif.classList.add('show')
}else{
		errorhandel.innerHTML = 'valid email required '
		input.classList.add('errorIn')
}
})