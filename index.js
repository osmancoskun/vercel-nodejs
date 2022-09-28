import express from "express"
import cors from "cors"
var app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send({
        status: 200,
        message: "Nodejs on Vercel..! Enjoy"
    })
})

app.listen(port, () => {
    console.log("example app listening on port: " + port)
})
export default app