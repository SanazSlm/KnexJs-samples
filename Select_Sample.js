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


//Creates a select query for all columns from customer table
knex.select()
.table('customers')
.then(result => {
    debugger;
});

//Creates a select query for some columns from customer table
knex.select('customerid','contactname','city')
.table('customers')
.then(result => {
    debugger;
});

//Specifically set the columns to be selected on a select query
knex.column('customerid','contactname','city')
.select()
.from('customers')
.then(result => {
    debugger;
}); 


//Specifies the table used in the current query
knex.select('*')
.from('customers')
.then(result => {
    debugger;
}); 