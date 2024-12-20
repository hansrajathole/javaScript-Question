//=====================================================================
//-------------------- setting up promise -----------------------------

// function datastore(data,success,failure){
//    let randomN = Math.floor(Math.random()*10)+1
//    if(randomN > 4){
//         success()
//    }else{
//         failure()
//    }
// }

// datastore("Hansraj Athole",()=>{
//     console.log("seccess : data was successflly stored");
//     datastore("raj",()=>{
//         console.log("seccess2 : data was successfully  stored");
//         datastore("athole",()=>{
//             console.log("seccess3 : data was successfully stored ");
        
//         },()=>{
//             console.log("failure3 : weakconnection");
            
//         })
//     },()=>{
//         console.log("failure2 : weakconnection");
//     })
// },()=>{
//     console.log("failure : weakconnection");
    
// })


//========================================================================
//------------------------promise chaining -------------------------------

// function savetoData(data){
//     return new Promise((resolve,reject)=>{
//         let number = Math.floor(Math.random()*10)+1
//         if(number>4){
//             resolve("success : data was save")
//         }else{
//             reject("failure : weakconnection")
//         }
//     })
// }


// savetoData("hansraj")
// .then(()=>{
//     console.log("succes : data was store");
//     return savetoData("athole")
// })
// .then(()=>{
//     console.log("success2 : daata was store");
//     return savetoData("raj")
// })
// .then(()=>{
//     console.log("success3 : data was store");
//     return savetoData("hans")
// })
// .then(()=>{
//     console.log("success4 : data waas store");
    
// })
// .catch(()=>{
//     console.log("promise was rejected");
    
// })


