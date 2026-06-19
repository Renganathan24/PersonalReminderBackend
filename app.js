const express = require('express');
const cors = require('cors');

const app = express();
const loginRoutes = require('../modules/login/login.routes');
const registerRoutes = require('../modules/register/register.routes');
const AddPlanRouters = require('../modules/add-new-plan/add-new-plan.router');


app.use(cors());
app.use(express.json());



app.use('/login',loginRoutes)
app.use('/register',registerRoutes)
app.use('/addPlan',AddPlanRouters)
app.use('/getPlanList', AddPlanRouters)


module.exports = app;