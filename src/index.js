
const express = require('express');
const apiRoutes=require('./routes');
const {ServerConfig,Logger}=require('./config/index')
const app=express();

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on ports ${ServerConfig.PORT}`);
    Logger.info("successfully started server",{})
}
);