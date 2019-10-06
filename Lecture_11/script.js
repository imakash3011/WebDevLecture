// console.log(jQuery);

// window.onload=function(){
//     console.log(jQuery);
// }

// $(document).ready(function(){
//     console.log(jQuery);
// })

//using arrow function
// $(document).ready(()=>{
//     console.log(jQuery);
// })


$(document).ready(()=>{
    $('#div').css('background-color','orange').attr('class','div4')
    // console.log($('#div').attr('id','division'))
    // $('#div').attr('class','div2')
    $('#inp1').attr('checked',false)

    //getter (means setting the value) and setter (setting the empty box) in box
    // console.log($('#inp').val('akash'));
    console.log($('#inp').val());

    //to write something in div using jQuery
    $('.mydiv').text('patel this is my div');
    $('div~div').text('dfdsaf','sdfkwkwwww')
    $('.mydiv').text('dfdsayfghf')

    // $('.mydiv').html('patel  this is my div');

})



    //sir notes

     
// $(document).ready(()=>{  
//     $('#div').css('background-color','orange').attr('class','div4') 
//     console.log($('#div').attr('id','division')) 
//     $('#inp1').attr('checked',false) 

//     console.log($('#div'));  

//     $('.mydiv').text('aksdk'); 
//     $('div~div').attr('class','otherdiv') 
//     $('.mydiv').text('hasjdv');  
// }) 