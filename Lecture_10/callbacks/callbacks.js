//firstly download the file with the help of url and than wait for 3 sec 
// secondly compress the file that we have downloaded and wait for 3 sec 
// thirdly upload the file with the help of compress file at a particular location and wait for 3 sec.

function downladFile(url,download){
    console.log('Download Starts');
    setTimeout(function(){
        let file_name=url.split('/').pop();
        download(file_name);
    },3000)
}

function compressFile(file_name,compress){
    console.log('Compress starts');
    setTimeout(function(){
        let compress_file_name=file_name.split('.')[0] + '.zip';
        compress(compress_file_name);
    },3000)
}


function uploadFile(compress_file_name,upload){
    console.log('Uploading started');
    setTimeout(function(){
        let upload_path='http://abc.com/' +compress_file_name;
        upload(upload_path);
    },3000)
}

//split the url and pick out the file name which is present in last of the url
//pop the last element i.e file.mp4 than download it 
downladFile('http://example.com/file.mp4');
downladFile(function(){
    console.log('Download completed');

    compressFile(file_name,function(compress_file_name){
        console.log('COmpression completed' + compress_file_name);

        uploadFile(compress_file_name,name,function(upload_path){
            console.log('File uploaded at' + upload_path);
        })
    })
})





// sir notes ----------------------------

// function downloadFile(url,download,f){
//     console.log('Download Starts');
//     setTimeout(function(){
//         let file_name = url.split('/').pop();
//         download(file_name);
//     },3000) 
// }

// function compressFile(file_name,compress){
//     console.log('Compression starts');
//     setTimeout(function(){
//         let compress_file_name = file_name.split('.')[0] +'.zip';
//         compress(compress_file_name);
//     },3000)
// }

// function uploadFile(compress_file_name,upload){
//     console.log('Uploading started');
//     setTimeout(function(){
//         let upload_path = 'http://abc.com/'+compress_file_name;
//         upload(upload_path);
//     },3000)
// }

// downloadFile('http://example.com/file.mp4',function(file_name){
//     console.log('Download completed '+file_name);
//     compressFile(file_name,function(compress_file_name){
//         console.log('Compression completed '+compress_file_name);
//         uploadFile(compress_file_name,function(upload_path){
//             console.log('File uploaded at '+upload_path);
//         })
//     })
// })

// downloadFile('http://example.com/file.mp4',function(){
//     console.log('Download Completed');
//     compressFile('xyz',function(){
//         console.log('Comnpression completed');
//     });
// });
