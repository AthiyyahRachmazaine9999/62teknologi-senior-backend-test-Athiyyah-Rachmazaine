const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const mysql = require('mysql');

   

/*------------------------------------------

--------------------------------------------

parse application/json

--------------------------------------------

--------------------------------------------*/

app.use(bodyParser.json());

   

/*------------------------------------------

--------------------------------------------

Database Connection

--------------------------------------------

--------------------------------------------*/

const conn = mysql.createConnection({

  host: 'localhost',

  user: 'root', /* MySQL User */

  password: '', /* MySQL Password */

  database: 'apiresturantus' /* MySQL Database */

});

   

/*------------------------------------------

--------------------------------------------

Shows Mysql Connect

--------------------------------------------

--------------------------------------------*/

conn.connect((err) =>{

  if(err) throw err;

  console.log('Mysql Connected with App...');

});

   

/**

 * Get All Items

 *

 * @return response()

 */

app.get('/api/items',(req, res) => {

  let sqlQuery = "SELECT * FROM items";

  

  let query = conn.query(sqlQuery, (err, results) => {

    if(err) throw err;

    res.send(apiResponse(results));

  });

});

   

/**

 * Get Single Item

 *

 * @return response()

 */

app.get('/api/items/:id',(req, res) => {

  let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;

    

  let query = conn.query(sqlQuery, (err, results) => {

    if(err) throw err;

    res.send(apiResponse(results));

  });

});

   

/**

 * Create New Item

 *

 * @return response()

 */

app.post('/api/items',(req, res) => {

    let data = { alias: req.body.alias, name: req.body.name, image_url: req.body.image_url, is_closed: req.body.is_closed, url: req.url, review_count: req.body.review_count, categories0alias: req.body.categories0alias, categories0title: req.body.categories0title, categories1alias: req.body.categories1alias, categories1title: req.body.categories1title, categories2alias: req.body.categories2alias, categories2title: req.body.categories2title, rating: req.body.rating, coordinateslatitude: req.body.coordinateslatitude, coordinateslongitude: req.body.coordinateslongitude, transactions0: req.body.transactions0, price: req.body.price, locationaddress1: req.body.locationaddress1, locationaddress2: req.body.locationaddress2, locationaddress3: req.body.locationaddress3, locationcity: req.body.locationcity, locationzip_code: req.body.locationzip_code, locationcountry: req.body.locationcountry, locationstate: req.body.locationstate, locationdisplay_address0: req.body.locationdisplay_address0, locationdisplay_address1: req.body.locationdisplay_address1, locationdisplay_address2: req.body.locationdisplay_address2, phone: req.body.phone, display_phone: req.body.display_phone, distance: req.body.distance, transactions1: req.body.transactions1, transactions2: req.body.transactions2  };


  let sqlQuery = "INSERT INTO items SET ?";

  

  let query = conn.query(sqlQuery, data,(err, results) => {

    if(err) throw err;

    res.send(apiResponse(results));

  });

});

   

/**

 * Update Item

 *

 * @return response()

 */

app.put('/api/items/:id',(req, res) => {

  

  let data = { alias: req.body.alias, name: req.body.name, image_url: req.body.image_url, is_closed: req.body.is_closed, url: req.url, review_count: req.body.review_count, categories0alias: req.body.categories0alias, categories0title: req.body.categories0title, categories1alias: req.body.categories1alias, categories1title: req.body.categories1title, categories2alias: req.body.categories2alias, categories2title: req.body.categories2title, rating: req.body.rating, coordinateslatitude: req.body.coordinateslatitude, coordinateslongitude: req.body.coordinateslongitude, transactions0: req.body.transactions0, price: req.body.price, locationaddress1: req.body.locationaddress1, locationaddress2: req.body.locationaddress2, locationaddress3: req.body.locationaddress3, locationcity: req.body.locationcity, locationzip_code: req.body.locationzip_code, locationcountry: req.body.locationcountry, locationstate: req.body.locationstate, locationdisplay_address0: req.body.locationdisplay_address0, locationdisplay_address1: req.body.locationdisplay_address1, locationdisplay_address2: req.body.locationdisplay_address2, phone: req.body.phone, display_phone: req.body.display_phone, distance: req.body.distance, transactions1: req.body.transactions1, transactions2: req.body.transactions2  };



  let query = conn.query(sqlQuery, (err, results) => {

    if(err) throw err;

    res.send(apiResponse(results));

  });

});

   

/**

 * Delete Item

 *

 * @return response()

 */

app.delete('/api/items/:id',(req, res) => {

  let sqlQuery = "DELETE FROM items WHERE id="+req.params.id+"";

    

  let query = conn.query(sqlQuery, (err, results) => {

    if(err) throw err;

      res.send(apiResponse(results));

  });

});

  

/**

 * API Response

 *

 * @return response()

 */

function apiResponse(results){

    return JSON.stringify({"status": 200, "error": null, "response": results});

}

   

/*------------------------------------------

--------------------------------------------

Server listening

--------------------------------------------

--------------------------------------------*/

app.listen(8000,() =>{

  console.log('Server run  ');

});