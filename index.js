let express = require('express');
let path = require('path');
//App setup
let app = express();

//create a server
let server = app.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', express.static(path.join(__dirname, 'public')));