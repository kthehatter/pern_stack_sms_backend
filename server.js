const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const logger = require("./logger/index");
const database = require("./models");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");
require("dotenv").config();
const {webSockets} = require("./utilities/webSockets");
const server = http.createServer(app);
// creating socket io instance
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "30mb",extended: false }));
app.use("/api/web/messenger", require("./routes/web/messenger/conversation"));
app.use("/api/authentication", require("./routes/authentication/authentication"));
app.use("/api/web/socialmedia/posts", require("./routes/web/social_media/posts/posts"));
const PORT = process.env.PORT || 3306;
process.on('uncaughtException',(ex)=>{
    logger.error(ex.message, ex);
    process.exit(1);
});
process.on('unhandledRejection',(ex)=>{
    logger.error(ex.message, ex);
    process.exit(1);
});

/** Create socket connection */
webSockets(io);


database.sequelize.sync().then(() => {
    server.listen(PORT, () => {
        logger.info(`Server is running`);
    });
}).catch(err => {
    logger.error(err.message, err);
});