const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
var ejs = require('ejs');
const app = express();
var PORT = process.env.PORT || 4000;
app.use(cors());
app.engine('html', ejs.renderFile);

app.listen(PORT, () => {
    console.log("server is running ");
});
app.get('*',(req,res)=>{
    res.render('/index.html');
    var URL = req.query.URL; 
    res.header('Content-Disposition','attachment; filename="video.mp4');
    ytdl(URL,{format: 'mp4'}).pipe(res);
});

// app.get('/download',(req,res)=>{
//     var URL = req.query.URL; 
//     res.header('Content-Disposition','attachment; filename="video.mp4');
//     ytdl(URL,{format: 'mp4'}).pipe(res);
// });