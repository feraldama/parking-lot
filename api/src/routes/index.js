const { Router } = require("express");
// import all routers;
const parkingLot = require("./park");

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use("/parking", parkingLot);

module.exports = router;
