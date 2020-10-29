const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const apiRouter = require('./router/api');

app.listen(PORT, () => {
    console.log(`App has started on ${PORT}`)
});
app.use(cors());
app.use('/api', apiRouter);
app.get('*', function(req, res){
    res.redirect('https://github.com/hasanmuzak');
});