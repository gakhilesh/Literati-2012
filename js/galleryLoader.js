function galleryLoader(){
var request = $.ajax({
  url: "php/ajaxGallery.html",

  dataType: "html",
  success: function(html){
    $("#getGallery").html(html);
  },
  error:  function(html){
	  galleryLoader();
	  console.log("error, reloading")
  }
});

}