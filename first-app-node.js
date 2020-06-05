const express = require('express');
const app = express();
const https = require('https');


app.get('/', (request, response) => {
https.get('https://insult.mattbas.org/api/insult', resp => {
    resp.on('data', chunk => {
        response.send(`
        <http>
                        <head><title>Oh Snap Landon</title></head>
                        <body>
                            <h1>OH SNAP!</h1>
                            <p style="font-size: 24px; color: red;">
                            ${chunk.toString()}!
                            </p>

                            <h2>JavaScript Alert</h2>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  alert("I am an alert box!");
}
</script>
                        </body>
                        </http>
        `);
    })
});
});
  


import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));

app.listen(process.env.PORT || 3000);
