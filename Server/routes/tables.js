const tableRequests = require("../rapidApiRequests/tableRequests");


const router = require("express").Router();




//GET TABLES DATA

router.get("/getTables", async(req,res)=>{
    const tablesData = await tableRequests.getTableData();
    res.status(200).send(tablesData);

});

module.exports = router;