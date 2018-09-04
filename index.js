const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    // eslint-disable-line consistent-return
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

let todoList = [];

app.get('/', (req, res)=> {
    res.status(201).json(todoList)
});

app.post('/post', (req, res)=> {
    todoList.push(req.body);
    res.status(201).json('Well done!');
});

app.delete('/delete', (req, res) => {
    deletedElementIsInTodoList = false;
    todoList.map(item => {
        if (item.title === req.body.name){
            todoList = todoList.filter(item => item.title !== req.body.name);
            res.status(201).json('Well done!');
            deletedElementIsInTodoList = true;
        }
    });
    if(!deletedElementIsInTodoList)res.status(404).json('ERROR');
});
app.listen(5000, ()=> console.log('LISTEN 5000'));

