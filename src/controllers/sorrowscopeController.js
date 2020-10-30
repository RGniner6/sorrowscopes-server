const Sorrowscope = require("../models/sorrowscopeModel");

module.exports.getSorrowscope = async (req, res) => {
    const requestedSignName = req.params.signName?.toLowerCase()
    try {
        const sorrowscope = await Sorrowscope.aggregate([
            {
                $match: {signName: requestedSignName ? requestedSignName : {$ne: ""}} //Filter by selected signName
            },
            {
                $sample: {size: 1} //Select a random document
            },
            {
                $project: {
                    _id: 0,
                    __v: 0
                }
            },
        ]);
        res.status(200).json(sorrowscope[0]);

    } catch (e) {
        res.status(400).json({
            status: 'get sorrowscope failed',
            message: e,
        });
    }
}

module.exports.addSorrowscope = async (data) => {
    try {
        await Sorrowscope.create(data);
        console.log('Data successfully imported');
    } catch (err) {
        console.log(err);
        console.log('\n End of error log \n');
    }
}
