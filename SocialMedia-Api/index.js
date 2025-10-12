const express = require('express');
const app = express();
const prisma = require("./prismaClient");
const cors = require("cors");
app.use(cors());
const {contentRouter} = require("./routes/content");
app.use("/content", contentRouter);

const server = app.listen(8000, ()=> {
    console.log("social media is started at port 8000");
    
});
const gracefulShutdown = async()=> {
    await prisma.$disconnect();
    server.close(()=> {
        console.log('API is closed');
        process.exit(0)
        
    })
}
process.on( "SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown)