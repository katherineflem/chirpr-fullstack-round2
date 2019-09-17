import * as path from 'path';
import * as express from 'express';
import routes from './routes';
import * as morgan from 'morgan'
import passport = require('passport');
import './middleware/localstrategy'
import './middleware/bearerstrategy'

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(express.static('public'));
app.use(passport.initialize());
app.use(routes);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
