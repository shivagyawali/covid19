const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')

var path = require('path');
// EJS
// app.use(expressLayouts);
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use("/", express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', {
        page: `Live`
    })
})





const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
