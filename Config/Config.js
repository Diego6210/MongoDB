process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.DB_Name = process.env.DB_Name || 'BD_Name';

let urlDB;

if (process.env.NODE_ENV === 'dev') 
    urlDB = `mongodb://localhost:27017/${process.env.DB_Name}`;
else 
    urlDB = process.env.MONGO_URI;

process.env.URLDB = urlDB;