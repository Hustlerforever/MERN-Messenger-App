app.get('/api/chat/:id', (req,res)=>{
    console.log(req.params.id);
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
})