const express = require('express');
const app = express();
const cors = require('cors');
const ApiError = require('./app/api-error');
const db = require('./database/db');
const  {engine} = require('express-handlebars');
const path = require('path');
const port = 5000;
const userRouter = require('./app/routes/user.route');
const customRouter = require('./app/routes/custom.route');
const workRouter = require('./app/routes/work.route');


// db 
db.connect();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
        extended: true,
    }),
);

app.use('/works',workRouter)
app.use('/customs',customRouter)
app.use('/',userRouter)

// view engine 
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app', 'views'));


// error 
app.use((req, res, next) => {   
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {  
    return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    });
});

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

