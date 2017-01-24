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


//inner join
// select customers.customerid,orders.orderid,customers.companyname from customers 
//inner join orders on customers.customerid = orders.customerid

knex('customers')
.innerJoin('orders','orders.customerid','customers.customerid')
.select('customers.customerid','orders.orderid','customers.companyname')
.then(result=>{
    debugger;
});

