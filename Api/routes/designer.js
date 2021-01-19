const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Designer = require('../models/designer');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')
const designerlogin = require('../middleware/designerlogin')
router.get('/', (req, res) => {
    res.send("hello designers")
})
router.get('/dHome', designerlogin, (req, res) => {
    res.send("hello designers")
})
router.post('/signup', (req, res) => {
    const { name, gender, number, email, password, password2, dob } = req.body
    if (!name || !gender || !number || !email || !password || !password2) {
        return res.status(422).json({ error: "please enter all the fields" })
    }
    if (password !== password2) {
        return res.status(422).json({ error: 'Passwords do not match' })
    }
    if (password.length <= 6) {
        return res.status(422).json({ error: 'Password should be at least 6 characters' })
    }
    Designer.findOne({ email: email }).then((data) => {
        if (data) {
            return res.status(409).json({ error: "user already exists" })
        }
        bcrypt.hash(password, 10)
            .then((hashedpassword) => {
                let user = new Designer({
                    email: email,
                    name: name,
                    gender: gender,
                    dob: dob,
                    number: number,
                    password: hashedpassword
                })
                user.save().then((data) => {
                    res.json(data._id)
                }).catch((err) => {
                    console.log(err)
                })
            })

    }).catch((err) => {
        console.log(err);
    })
})

router.get('/signup/:desId', (req, res) => {
    Designer.findById(req.params.desId)
        .populate('applicationBy._id')
        .then((user) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }, (err) => next(err))
        .catch((err) => next(err));
})

router.get('/signup/:desId/application', (req, res) => {
    Designer.findById(req.params.desId)
        .populate('applicationBy._id')
        .then((user) => {
            if (user != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user.application);
            }
            else {
                err = new Error('Designer account' + req.params.desId + ' not found');
                err.status = 404;
                return next(err);
            }
        }, (err) => next(err))
        .catch((err) => next(err));
})
router.post('/signup/:desId/application', (req, res) => {
    Designer.findById(req.params.desId)
        .then((user) => {
            if (user != null) {
                const { boutiqueName, productType, productsSold, businessDetails, socialMedia, marketPlaceInfo } = req.body
                if (!boutiqueName || !productType || !productsSold || !businessDetails || !socialMedia || !marketPlaceInfo) {
                    return res.status(422).json({ error: "please enter all the fields" })
                }
                user.application.push(req.body);
                user.save()
                    .then((user) => {
                        Designer.findById(user._id)
                            .populate('application')
                            .then((user) => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(user);
                            })
                            .catch((err) => {
                                res.status(422);
                                res.json(err);
                            })
                    }, (err) => next(err));
            }
            else {
                err = new Error('Designer account ' + req.params.desId + ' not found');
                err.status = 404;
                return next(err);
            }
        }, (err) => next(err))
        .catch((err) => next(err));
})

router.get('/signin', (req, res) => {
    res.send("Sign in")
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        return res.status(422).json("Please fill all credentials")
    Designer.findOne({ email: email })
        .then((data) => {
            if (!data)
                return res.status(422).json({ error: "Invalid email or password" })
            bcrypt.compare(password, data.password).then((match) => {
                if (match) {
                    const token = jwt.sign({ _id: data._id }, JWT_SECRET, { expiresIn: '1d' })
                    const { _id, name, email } = data
                    res.json({ token: token, user: { _id, email, name } })
                }
                else
                    return res.status(422).json({ error: "Invalid email or password" })
            })
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router