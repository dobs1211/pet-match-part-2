var express = require('express');
var app = express();
var path = require('path');

app.listen( 8080, 'localhost', function( req, res ){
  console.log( 'listening on 8080' );
});

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'public/index.html' ) );
});

app.use( express.static( 'public' ) );


