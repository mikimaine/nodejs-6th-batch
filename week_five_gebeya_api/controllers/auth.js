
const userModel = require('../model/user')
//
const authController = {

    loginAction: (req, res) => {
        // let data = {
        //     username: req.body.username,
        //     password: req.body.password,
        // }

        userModel.findOne({username: req.body.username}).then(data=> {
            // catch... 
            data.verifyPassword(req.body.password).then(result => {

                if(!result) {
                    // return error
                    return res.status(400).json({
                        error: true,
                        message: 'Invalid username/password'
                      })
                }
                res.json({
                    ...data._doc,
                    token: 'token....'
                })
            })
            
        })
        // check with the model
        
    },

    signupAction: (req, res) => {
        console.log(req, 'request');
        // validation ...
        // buss
        userModel.create({
            username:  req.body.username,
            email: req.body.username,
            password: req.body.password
        }).then(data => {
            res.json({
                data
            })
        })
    },

    forgetPasswordAction: (req, res) => {

    }

}


module.exports = authController
