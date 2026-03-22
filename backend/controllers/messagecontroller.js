const User = require("../model/Usermodel")
const Message = require("../model/Messagemodel")

// const cloudinary = require("../lib/cloudinary");
// const { getReceiverSocketId, io } = require("../lib/socket");
const cloudinary = require("../config/cloudinary");
const { getReceiverSocketId, io} = require("../config/socket.js");

exports.getUsersForSidebar = async(req,res)=>{
    try{
        const loggedInUserId = req.user._id
        const filteredUsered = await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json({filteredUsered})
    }
    catch(err){
        res.status(400).json({
            message:"error in filtered the users"
        })
    }
}

exports.getMessages = async(req,res)=>{
    try{
        console.log("1")
        const {id:userToChatId} = req.params
                console.log("2")

        const myId = req.user._id
                console.log("3")


        const messages = await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        });
                console.log("5")


        res.status(200).json(messages)
    }
    catch(err){
        res.status(400).json({
            message:"something is wrong in message"
        })
    }
}

exports.send = async(req,res)=>{
    try{
        const {text,image} = req.body;

        if (!text && !image) {
            return res.status(400).json({
                message: "Text or image is required"
            });
        }

        const {id:receiverId} = req.params;
        const senderId = req.user._id
        let imageUrl;

        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        })

        await newMessage.save();

        // REAL-TIME LOGIC START
        const receiverSocketId = getReceiverSocketId(receiverId);
    
        // Agar receiver online hai, toh usko socket ke through message bhejo
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        console.log("2")
        res.status(200).json(newMessage)
    }
    catch(err){
        res.status(400).json({
            message:"failed in send the message"
        })
    }
}