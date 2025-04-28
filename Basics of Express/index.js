const exp  =  require('express');
//console.log(exp);
const app = exp();
//console.log(app);
//const server = 
app.use((req,res,next)=>
{
    console.log('I am middleware 1');
    next();
});
app.use((req,res,next)=>
{
       res.send('Arslan Sherazi is learning middleware');
});

app.get('/',(req,res)=>
{
    res.send('Arslan Sherazi');
})
app.listen(3000);