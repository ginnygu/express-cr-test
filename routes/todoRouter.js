const express = require('express')
const router = express.Router()
let todos = [{
        id: "haf24jd",
        todo: "do laundry",
        done: "false"
    },
    {
        id: "jp2nkl2",
        todo: "wash dishes",
        done: "true"
    }
]

router.get('/get-all-todos', (req, res) => {
    res.json({
        todos
    })
})
router.get('/get-todo-by-id/:id', (req, res) => {
    console.log('hello')
    let foundTodo
    let {
        id
    } = req.params
    todos.forEach((item) => {
        if (item.id === id) {
            foundTodo = item
        }
    })
    if (!foundTodo) {
        res.json({
            message: "The Todo ID you are looking for does not exists, please check ID"
        })
    } else {
        res.json({
            foundTodo
        })
    }
})

router.get('/get-todos-by-done/:done', (req, res) => {
    let newDoneArray = []
    let {
        done
    } = req.params
    todos.forEach((item) => {
        if (item.done === done) {
            newDoneArray.push(item)
        }
    })
    res.json({
        newDoneArray
    })
})
router.post('/create-new-todo', (req, res) => {
    let newTodo = {
        id: "whatever you want",
        todo: req.body.todo,
        done: false
    }
    todos.push(newTodo)
    res.json({
        todos
    })
})

module.exports = router