const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('Server is running like a running man!')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'deepbelowdb'
})

app.post('/register', (req, res)=>{
    const sentEmail = req.body.Email
    const sentUsername = req.body.Username
    const sentPassword = req.body.Password

    const SQL = 'INSERT INTO  user (email, username, password) VALUES (?,?,?)'
    const Values = [sentEmail, sentUsername, sentPassword]

    db.query(SQL, Values, (err, result) => {
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted sucessfully!!')
            res.send({message: 'User Added'})
        }
    })
})

app.post('/login', (req, res)=>{
    const sentLoginUsername = req.body.LoginUsername
    const sentLoginPassword = req.body.LoginPassword

    const SQL = 'SELECT * FROM  user WHERE username= ? && password = ?'
    const Values = [sentLoginUsername, sentLoginPassword]

    db.query(SQL, Values, (err, result) => {

        if(err){
            res.send({error: err})
        }
        if(result.length > 0){
            res.send({result})
        }
        else{
            res.send({message: 'Wrong Credentials!'})
        }
        
    })
})