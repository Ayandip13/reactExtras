import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/jokes", (req, res)=>{
    const jokesarr = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id: 2,
            title:'another joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'3rd joke',
            content:'this is third joke'
        },
        {
            id:4,
            title:'4th joke',
            content:'this is forth joke'
        },
        {
            id:5,
            title:'5th joke',
            content:'this is fifth joke'
        }
    ]
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Serve at http://localhost${port}`);
});
