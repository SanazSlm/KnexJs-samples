//NorthWind database

//Initializing the Library
var knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'P@ssw0rd',
        database: 'NorthWind',
        ssl: false
    },
    debug: true
});

//Allows for aliasing a subquery

knex.avg('"sumUnitprice"').from(function(){
    this.sum(knex.raw('"unitprice" as "sumUnitprice"')).from('order_details').groupBy('orderid').as('orderDetails')
}).as('unitpriceAvg')
.then(result =>{
    debugger;
});

