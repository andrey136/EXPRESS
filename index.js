const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let todoList = [
    { title: 'First' },
    { title: 'Second' },
    { title: 'Third' },
    { title: 'Forth' },
];

app.get('/', (req, res)=> {
    res.status(201).json(todoList)
});

app.post('/post', (req, res)=> {
    todoList.push(req.body);
    res.status(201).json('Well done!');
});

app.delete('/delete', (req, res) => {
    todoList = todoList.filter(item => item.title !== req.body.name);
    res.status(201).json('Well done!');
});
app.listen(5000, ()=> console.log('LISTEN 5000'));

