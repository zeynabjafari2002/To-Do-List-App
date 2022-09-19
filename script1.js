let $=document
let input=$.getElementById('input')
let addBtn=$.querySelector('.addBtn')
let ulList=$.querySelector('.ulList')
let removeBtn=$.querySelectorAll('.uil-trash-alt')



$.addEventListener('keydown' , (event)=>{
    if(input.value==='' && event.keyCode===13){
        alert('input must be filled')
    }

    else if(input.value===String || Number && event.keyCode===13){
        let liList=$.createElement('li')
        ulList.append(liList)
        liList.setAttribute('class' , 'liList')
        let span=$.createElement('span')
        liList.append(span)
        span.setAttribute('class' , 'todo-item')
        span.innerHTML=(input.value)
        let icon=$.createElement('i')
        icon.setAttribute('class' , 'uil uil-trash-alt')
        liList.append(icon)
        icon.addEventListener('click' , (event)=>{
            icon.parentElement.remove()
        })
        input.value=''
        
    }
})



