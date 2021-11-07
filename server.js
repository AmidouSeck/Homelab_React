const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, 'Client/build')));

    app.get("*", (request, response) => {
        response.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
    })
}

app.listen(port,()=>{
    console.log(1);
})