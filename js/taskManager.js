class TaskManager {
    constructor(currentId = 0) {
        this.tasks = []
        this.currentId = currentId
    }

    addTask(name, description, priority, assignedTo, dueDate, status) {
        this.currentId++
        this.tasks.push({
            id: this.currentId,
            name: name,
            description: description,
            priority: priority,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        })
    }

    createTaskHtml(name, description, priority, assignedTo, dueDate, status) {
        const html = `
    `
    }
}

const task1 = {
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    priority: 'high',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};

const task2 = {
    id: 2,
    name: 'Cook Dinner',
    description: 'Prepare a healthy serving of pancakes for the family tonight',
    priority: 'low',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};

export default { TaskManager }
// module.exports = { TaskManager }