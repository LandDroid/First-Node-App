const express = require('express');
const app = express();
const https = require('https');

app.get('/', (request, response) => 
    {
        https.get('https://insult.mattbas.org/api/insult', resp => 
            {
                resp.on('data', chunk => 
                    {
                        response.send   (`
                            <http>
                                <head>
                                    <title>Oh Snap Landon</title>
                                </head>
                                <body>
                                    <h1>OH SNAP!</h1>
                                        <p style="font-size: 24px; color: red;">${chunk.toString()}!</p>

                                    <h2>Button Click Counter</h2>
                                        <p style="font-size: 14px;">

                                            <script type="text/javascript">
                                            var clicks = 0;
                                            function onClick() 
                                                {
                                                    clicks += 1;
                                                    document.getElementById("clicks").innerHTML = clicks;
                                                };
                                             </script>
                                    <button type="button" onClick="onClick()">Click me</button>
                                        <p>Clicks: <a id="clicks">0</a></p>
                                </body>
                            </http>
                                        `);
                    })
            });
    });
  
app.listen(process.env.PORT || 3000);
