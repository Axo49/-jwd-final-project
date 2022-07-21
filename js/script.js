// import { TaskManager } from "./taskManager"

// const tasker = new TaskManager(0)

let edit_btn = document.querySelector('.edit')
let save = document.querySelector('.save')
let cancel = document.querySelector('.cancel')
edit_btn.addEventListener('click', (e) => {
    e.preventDefault()
    edit_btn.style.display = 'none'
    save.style.display = 'inline-block'
    cancel.style.display = 'inline-block'
    document.querySelector('.taskName').disabled = false
    document.querySelector('.endDate').disabled = false
    document.querySelector('.priority').disabled = false
    document.getElementById('status-1').disabled = true
})

save.addEventListener('click', (e) => {
    e.preventDefault()
    edit_btn.style.display = 'inline-block'
    save.style.display = 'none'
    cancel.style.display = 'none'
    document.querySelector('.taskName').disabled = true
    document.querySelector('.endDate').disabled = true
    document.querySelector('.priority').disabled = true
    document.getElementById('status-1').disabled = false
})

cancel.addEventListener('click', (e) => {
    e.preventDefault()
    edit_btn.style.display = 'inline-block'
    save.style.display = 'none'
    cancel.style.display = 'none'
    document.querySelector('.taskName').disabled = true
    document.querySelector('.endDate').disabled = true
    document.querySelector('.priority').disabled = true
    document.getElementById('status-1').disabled = false
})