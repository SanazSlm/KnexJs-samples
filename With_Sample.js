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

//with sample quary for claculate price per orders

knex.with('orderprice',(qb)=>{
    qb.select('orderid',knex.raw("unitprice*quantity as price"))
    .from('order_details')
})
.select('*')
.from('orderprice')
.then(result =>{
    debugger;
})



