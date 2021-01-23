const userRoutes = (app, fs) => {

    // variables
    const dataPath = 'data.json';

    // READ
    app.get('/all', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
           
            res.send(JSON.parse(data));
        });
    });

    app.get('/r', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
             
            var xx = JSON.parse(data)
            var x = xx[Math.floor(Math.random() * 10)+1];
            
            res.send(JSON.stringify(x));
        });
    });

};

module.exports = userRoutes;