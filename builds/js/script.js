  //  $ = require('jquery');

$(function() {
  var sortDir="asc";
  var sortBy ="petName";
  var aptData,newData;
  function removeApt(aptID){
var  whichApt=_.find(aptData,function(item){
      return item.id==aptID;   
});
         aptData=_.without(aptData,whichApt);
         newData=_.without(newData,whichApt);
  }

  function appointmentList(info){

    if(sortDir=="asc"){
   info=_.sortBy(info,sortBy)
  }else{
    info=_.sortBy(info,sortBy).reverse();
  }
  $.addTemplateFormatter('formatDate',function(value){
    return $.format.date(new Date(value), 'MM/dd hh:mm p' );
  })


    $('#petList').loadTemplate('appointment-list.html',info,{
      complete:function(){
        $('.pet-delete').on('click',function(){
          $(this).parents('.pet-item').hide(300,function(){
           
            var whichitem = $(this).attr('id');
            // info.splice(info.id,1)
            removeApt(whichitem);

            console.log(aptData);
          })
        })
        $('[contenteditable]').on('blur' ,function(e){
         var whichId,fieldName,fieldData;
         whichId=Number($(this).parents('.pet-item').attr('id'));
         fieldName=$(this).data('field');
         fieldData=$(this).text();
         aptData[whichId][fieldName]=fieldData;
         
        })
      }
    });

  }
   
  
    $.ajax({
      url:'js/data.json',
      method:'get'
    }).done( function(data) {
      aptData=data;
      newData=data;
      appointmentList(aptData);
     
     
    }); //getJSON
    $('.apt-addheading').on('click',function(){
      $('.card-body').toggle(300);
    })
    $('.dropdown-item').on('click',function(){
      var whichid=$(this).attr('id')
      switch (whichid){
         case "sort-petName":
           $('.sort-by').removeClass('active');
           sortBy="petName";
           break;
         
        case "sort-ownerName":
          $('.sort-by').removeClass('active');
          sortBy="ownerName";
          break;

          case "sort-aptDate":
          $('.sort-by').removeClass('active');
          sortBy="aptDate";
          break;

       case "sort-asc" :
          $('.sort-dir').removeClass('active');
          sortDir="asc";
          break;

          case "sort-desc" :
          $('.sort-dir').removeClass('active');
            sortDir="desc"; 
            break;  
        
       }
       $(this).addClass("active");
       appointmentList(newData);
    })
    $('#SearchApts').keyup(function(){
      var searchText =$(this).val();
          newData=_.filter(aptData,item=>
        item["petName"].toLowerCase().match(searchText.toLowerCase()) ||
        item["ownerName"].toLowerCase().match(searchText.toLowerCase()) ||
        item["aptNotes"].toLowerCase().match(searchText.toLowerCase()) 
       

      )
     
      appointmentList(newData);
      
    })
    $('#aptForm').submit(function(e){
      var newItem={};
      e.preventDefault();
      newItem.petName = $("#petName").val();
      newItem.ownerName = $("#ownerName").val();
      newItem.aptDate = $("#aptDate").val();
      newItem.aptNotes = $("#aptNotes").val();
      aptData.push(newItem);
      appointmentList(newData);
      $("#aptForm")[0].reset();
      $('.card-body').toggle(300);
     

    })   
    
  }); //function