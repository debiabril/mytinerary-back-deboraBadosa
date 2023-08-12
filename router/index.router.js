import express from "express"

const router = express.Router()

router.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World");
    response.json({
        success : true,
        message : "probando"
    })
})

export default router