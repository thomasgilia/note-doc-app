// //----------------------------------------internal db version--------------------------------------------

require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const app = express();
require("./db");
const exphbs = require('express-handlebars');

app.use(express.urlencoded({ extended: true }));    
app.use(express.json());    
app.use(routes);

app.use(express.static("public"));        
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.listen(process.env.PORT || 3000, () => {
  console.log("Now listening");
});

// //----------------------------------------end internal db version--------------------------------------------


// //----------------------------------------original version--------------------------------------------
// // require("dotenv").config();
// // const express = require("express");
// // const routes = require("./routes/index");
// // const app = express();
// // require("./db");
// // const exphbs = require('express-handlebars');

// // app.use(express.urlencoded({ extended: true }));    
// // app.use(express.json());    
// // app.use(routes);

// // app.use(express.static("public"));        
// // app.engine('.hbs', exphbs({ extname: '.hbs' }));
// // app.set('view engine', '.hbs');

// // app.listen(process.env.PORT || 3000, () => {
// //   console.log("Now listening");
// // });
// //--------------------------------------end original version-------------------------------------------


// //--------------------------------------experiment before talk with prof version------------------------
// const express = require("express");
// const routes = require("./routes/index");
// // const gatsby = require("gatsby-plugin-nodejs");
// // const gatsyExpress = require('gatsby-plugin-express');

// const app = express();

// app.use(express.urlencoded({ extended: true }));    
// app.use(express.json());    
// app.use(routes);




// // // serve static files before gatsbyExpress
// // app.use(express.static('public/'));
// // app.use(gatsyExpress('config/gatsby-express.json', {
// //   publicDir: 'public/',
// //   template: 'public/404/index.html',

// //   // redirects all /path/ to /path
// //   // should be used with gatsby-plugin-remove-trailing-slashes
// //   redirectSlashes: true,
// // }));


// // // gatsby.prepare({ app }, () => {
// // //   // Here you can define your routes
// // //   app.use(routes);
// // // });

// // // const port = process.env.PORT || 1337;

// // // app.listen(port, () => console.log(`listening on port ${port}`));

// // app.listen(process.env.PORT || 3000, () => {
// //   console.log("Now listening");
// // });








// const express = require("express");
// const gatsby = require("gatsby-plugin-nodejs");
// const gatsyExpress = require('gatsby-plugin-express');

// const app = express();
    
// // serve static files before gatsbyExpress
// app.use(express.static('../public/'));
// app.use(gatsyExpress('config/gatsby-express.json', {
//   publicDir: '../public/',
//   template: '../public/404/index.html',

//   // redirects all /path/ to /path
//   // should be used with gatsby-plugin-remove-trailing-slashes
//   redirectSlashes: true,
// }));


// gatsby.prepare({ app }, () => {
//   // Here you can define your routes
//   app.get("/hello", (req, res) => {
//     res.send(`Hey`)
//   })
// });

// const port = process.env.PORT || 1337;

// app.listen(port, () => console.log(`listening on port ${port}`));

// --------------------------------------end experiment before talk with prof version------------------------