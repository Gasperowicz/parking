var Sequelize = require('sequelize');

const dbPath = __dirname+'/db/empty.db'
var sequelize = new Sequelize('sqlite:'+dbPath,{
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
        process.exit(1);
    });




exports = sequelize;
