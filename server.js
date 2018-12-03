const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');



 
app.get('/', (req, res) => {
	/*let salida = {
		nombre: 'Cesar',
		edad: 32,
		url: req.url
	};*/

	//res.send(salida);
  	//res.send('Hola Mundo');
	res.render('home',{
		nombre: 'CéSar',
		//anio: new Date().getFullYear()
	});
});
app.get('/about',(req, res) => {
	res.render('about',{
		//anio: new Date().getFullYear()
	});
});

app.get('/data', (req, res) => {
  	res.send('Hola Data');
});

 
app.listen(port,()=>{
	console.log(`Escuchando peticiones en el puerto ${port}.`);
});