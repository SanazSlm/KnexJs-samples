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

// select by filter on customerid and contactname

knex('customers').where({
    customerid: 'ALFKI',
    contactname: 'Maria Anders'
}).select('companyname')
.then(result=>{
    debugger;
});


//select "supplierid","unitprice","categoryid" 
//from "products" 
//where ("supplierid" = 6 or "unitprice" > 6) or ("categoryid" = 6)

knex('products').where(function(){
    this.where('supplierid',6).orWhere('unitprice','>',6)
}).orWhere('categoryid',6)
.select('supplierid','unitprice','categoryid')
.then(result=>{
    debugger;
});


//select "productid","unitprice","quantity"
// from "order_details" 
//where "unitprice" > 50  and quantity between 10 and 40

knex('order_details').where('unitprice','>',50)
.andWhere(function(){
    this.whereBetween('quantity',[10,40])
})
.select('productid','unitprice','quantity')
.then(result=>{
    debugger;
});


//select "employeeid","city","region" from "employees" where not "city" = 'Redmond' and "region" is null

knex('employees').whereNot('city','Redmond')
.andWhere(function(){
    this.whereNull('region')
})
.select('employeeid','city','region')
.then(result=>{
    debugger;
});


//whereExists 
//select * from "orders" where exists (select * from "order_details" where order.orderid = order_details.orderid)

knex('orders').whereExists(function(){
    this.select('*').from('order_details')
    .whereRaw("orders.orderid = order_details.orderid")
})
.select('*')
.then(result=>{
    debugger;
})

