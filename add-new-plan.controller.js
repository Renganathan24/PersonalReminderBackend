const Plan = require('./add-new-plan.model')

exports.newplan = async (req, res) => {
    const { planName, planDsc, planDate } = req.body;

    try {
        const newPlan = new Plan({
            planName,
            planDsc,
            planDate
        })
        await newPlan.save()

    } catch (error) {

    }
    return res.status(200).json({
        message: "Plan SuccessFully Added"
    })
}

exports.getPlanList = async (req, res) => {
    try {
        console.log("GET API HIT");
        const plans = await Plan.find().sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            data: plans
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}