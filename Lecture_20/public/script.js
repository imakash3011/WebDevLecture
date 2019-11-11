//for client-side socket
//it will take time to create an id for the socket
 
const socket = io()

//use either this or the  socket.on function
setTimeout(()=>{
    console.log('Connected '+socket.id)
},1000) 

// socket.on('connect',()=>{
//     console.log('Connected '+socket.id)
// })

socket.on('chat_recieved',(data)=>{
    console.log('Chat successfully received by server')
    $('#chats').append(
        $('<li>').text(
            `${data.username} : ${data.msg}` 
        ) 
    )
})

socket.on('loggedin',()=>{
    $('#loginform').hide()
    $('#chatbox').show() 
})

//to create event use emit and use jquery to create events
$(()=>{
    $('#chatbox').hide() 
    $('#login').click(()=>{
        console.log('Login successfull') 
        socket.emit('login',{
            username:$('#username').val()
        })
    })
    $('#send').click(()=>{
        console.log('Sending chat') 
        socket.emit('chat',{
            msg:$('#msg').val() 
        })
    })
})