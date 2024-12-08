const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    
    const method = req.method;
    const url = req.url;
    const ip = req.ip;  

    const logEntry = `[${timestamp}] ${method} ${url} - IP: ${ip}\n`;
    
    const logFilePath = path.join(__dirname, '../logs.txt');
    
    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Nie udało się zapisać logu:', err);
        }
    });

    console.log(logEntry); 
    next(); 
};

module.exports = logger;
