const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});








// Default Route
app.get('/', (req, res) => {
    console.log('Your server is up and running..!');
    res.send(`<div>
    This is Default Route  
    <p>Everything is OK</p>
    </div>`);
})