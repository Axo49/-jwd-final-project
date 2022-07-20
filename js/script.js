const { TaskManager } = require('./taskManager')

const tasker = new TaskManager(0)

// let task_name = document.getElementById('taskName').value
let currentDate = new Date().toLocaleDateString()

// tasker.addTask(
//     'Washing tableware',
//     'Take the spoon, fork, cup, dish and bowl into the dishwashing machine',
//     'Young',
//     currentDate,
//     'TODO'
// )

// add task with these data
document.getElementById('addTask-btn').addEventListener('submit', e => {
    e.preventDefault()
    tasker.addTask(null, null, null, currentDate, 'TODO')
    console.log(tasker.tasks)

    document.getElementById('addTask-btn').value = "Added"
})

console.log(tasker.tasks)