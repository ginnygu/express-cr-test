const router = require("express")()

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to my App"
    })

})

module.exports = router