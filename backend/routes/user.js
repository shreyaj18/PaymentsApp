const express = require("express");
const router = express.Router(); 
const zod= require("zod");
const jwt = require("jsonwebtoken")
const { User, Account } = require("../db");
const JWT_SECRET = require("../config");
const { authMiddileware } = require("../middleware");

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})

router.post("/signup" , async (req,res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg: "invalid inputs"
        })
    }
    
    const user= await User.findOne({
        username: body.username
    })
    

    if(user){
        return res.json({
            msg: "Email already taken / invalid inputs"
        })
    }

    const dbuser = await User.create(body);
    const userId = dbuser._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    },JWT_SECRET)
    res.json({
        msg:"User created successfully",
        token: token
    })

})

router.post("/signin", async(req,res) => {
    const body= req.body
    const {success} = signupSchema.safeParse(req.body)

    if(!success){
        return res.json({
            msg: "Email already taken / invalid inputs"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })

    if(user){
        const token = jwt.sign({
            userId: user._id
        },JWT_SECRET)

        res.json({
            token:token
        })
        return;
    }
    
    res.status(411).json({
        msg:'Error while logging in'
    })


})

const updatebody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
    }) 
     
router.put("/", authMiddileware, async (req,res) => {
    
    const {success} = updatebody.safeParse(req.body)

    if(!success){
        res.status(411).json({
            msg:"Error while updating"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, req.body)

    res.json({
        msg: "Updated successfully"
    })

})

router.get("/bulk",async (req , res) =>{
    const filter= req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        },{
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user=>({
            usernaname: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id

        }))
    })
})


module.exports = router;