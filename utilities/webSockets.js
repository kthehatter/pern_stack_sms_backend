

const models = require("../models");
const {getOnlineUsers,verifyToken} = require("../middleware/socketsHandler");

let users =[];
const addUsers = async (userID,socketID)=> {
    try{
        if (userID&&userID!='') {
           const user = await models.users.findAll({
                where: {
                    user_id: userID,
                },
            });
            if (user.length > 0&& !users.some((user=>user.userID === userID))) {
             users.push({userID,socketID});
            }
        }
        
    }catch(err){
        console.log(err);
    }
    
}
const removeUsers = async(socketID)=>{
   let userToremove = users.find((user)=>user.socketID === socketID);
    if(userToremove){
      const  updatingUserLastTimeConnected = await models.users.update({
            updated_at: new Date()
        },{
            where:{
                user_id:userToremove.userID
            }
        });
        users = users.filter((user)=>user.socketID !== socketID);
    }
}

const getUsers = (recieverID) => {
    try{
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.userID === recieverID) {
                return user;
            }
        }
    }catch(err){
        console.log(err);
    return {};
    }
}
exports.webSockets = function (io) {
    io.on("connection",  (socket) => {
        console.log("a user connected");
        socket.on('addUser',async (data) => {
           await addUsers(data.userId, socket.id);
           const accessToken = data.accessToken;
           let onlineUsers = await getOnlineUsers(accessToken,users);
           console.log(onlineUsers);
           io.to(socket.id).emit("getUsers",onlineUsers);
        });
        socket.on("sendMessage", async({accessToken,recieverID,conversationId,message,messageType}) => {
            try{
                const reciever= getUsers(recieverID);
            const messageSender = await verifyToken(accessToken);
            if(reciever&&reciever.socketID&&messageSender&&messageSender.userID&&messageSender.true===true){
                const senderID = messageSender.userID;
                const conversationID = conversationId;
                console.log(senderID);
           const userAccessToken = accessToken;
           let onlineUsers = await getOnlineUsers(userAccessToken,users);
            io.to(reciever.socketID).emit("getMessage", {senderID,recieverID,conversationID,message,messageType,onlineUsers});
            console.log("message sent");
            }
            }catch(err){
                console.log(err);
            }
            
        });
        socket.on("disconnect", async() => {
            console.log("user disconnected");
            await removeUsers(socket.id);
            socket.broadcast.emit("removeUser", [socket.id]);});
    });
}