const fs = require("fs");
// const process = require("process")

// const files = fs.readdirSync("./textfloder")

// console.log(files)

// console.log("Madhu")

// fs.readdir("./textfloder",(err,files)=>{
//     if(err){
//         console.log("something wromng")
//     }
//     else{
//         console.log(files)
//     }
// })

// console.log("madhu")

// process object in nodejs
// process.stdout.write("Hello MAdhu")

// process.stdin.on("data" , (data)=>{
//     console.log(data.toString())
//     process.exit()
// })


//question answer App

// let questions = ["what is your name?",
//                     "Where are you from?",
//                     "What you do?"
//                 ]
// function printQuestion(i=0){
//     process.stdout.write(questions[i]) 
// }

// printQuestion()

// let answers = [

// ]

// process.stdin.on('data' , (data)=>{
//    answers.push((data.toString()))

//     if(answers.length == questions.length){
//         process.exit()
//     }
//     printQuestion(answers.length)
// });

// process.on("exit" , ()=>{
//     console.log(`Thanks for providing your answers ${answers[0]}`)
//     for(let i=0;i<answers.length;i++){
// console.log(`${i+1}. ${answers[i]}`)
//     }
// })


const http = require("http");
const { receiveMessageOnPort } = require("worker_threads");



const server =http.createServer((request,response)=>{
    if(request.url == "/users"){

        // response.write("user data displayed")
        response.writeHead(200,{'content-type':'application/json'})
        response.write(JSON.stringify(

            [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                      "street": "Kulas Light",
                      "suite": "Apt. 556",
                      "city": "Gwenborough",
                      "zipcode": "92998-3874",
                      "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                      }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                      "name": "Romaguera-Crona",
                      "catchPhrase": "Multi-layered client-server neural-net",
                      "bs": "harness real-time e-markets"
                    }
                  },
                  {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                      "street": "Victor Plains",
                      "suite": "Suite 879",
                      "city": "Wisokyburgh",
                      "zipcode": "90566-7771",
                      "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                      }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                      "name": "Deckow-Crist",
                      "catchPhrase": "Proactive didactic contingency",
                      "bs": "synergize scalable supply-chains"
                    }
                  }
            ]

        ));

        response.end()
    }else if(request.url == "/about"){
        fs.readFile('./about.html',(err,data)=>{
            if(err){
                response.writeHead(404);
                response.write("40444 not found")
                response.end()
            }
            else{
                response.writeHead(200,{'content-type':'text/html'})
                response.write(data);
                response.end()
            }
           
        })
        
    }
    else if(request.url == '/image'){
        fs.readFile('./puspa.jpg', (err,data)=>{
            response.writeHead(200,{'content-type':'image/jpg'})
            response.write(data)
            response.end()
        })
       
    }
    else{
        response.write("this is  home page")
    }
})




server.listen(8080,(err)=>{
    if(err){
        console.log("Found Error")
    }else{
        console.log("server Started running on port 8080")
    }
    
})