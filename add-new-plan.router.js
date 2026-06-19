const express = require('express');
const router = express.Router();
const AddPlanController = require('./add-new-plan.controller')



router.post('/',AddPlanController.newplan)
router.get('/',AddPlanController.getPlanList)



module.exports = router