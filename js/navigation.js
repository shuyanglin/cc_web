const indexPage = "index";
const bookPage = "book";
const bookItem = "bookitem";

//initialize page var to track current page 
var page = indexPage;
	// console.log(page);

//set event listener to thumb nails

$('#book1').click(function(e){
	e.preventDefault();

	$('#book-item-wrapper').toggleClass("display");

});


//set event listener in menu
$("#book-toggle").click(function(e) {
    e.preventDefault();

    if (page != bookPage){
    	console.log("assign to bookpage");
    	page = bookPage;
    
    	$("#book-wrapper").toggleClass("display");

	}else{
    	console.log("now in book, so do nothing");
	}

    $("#dummy-white").toggleClass("toggled");
    $("#wrapper").toggleClass("toggled");
    $("#bkoverlay").toggleClass("toggled");
    $(".glyphicon-menu-hamburger").toggleClass("toggled");
    
});


$("#about-toggle").click(function(e){
	e.preventDefault();

	if (page != indexPage){
		console.log("assign to indexPage");
		page = indexPage;

		clearAllDisplayClassforIndex();

	}else{

	}


	$("#dummy-white").toggleClass("toggled");
    $("#wrapper").toggleClass("toggled");
    $("#bkoverlay").toggleClass("toggled");
    $(".glyphicon-menu-hamburger").toggleClass("toggled");
    



});


//navigation side bar

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#dummy-white").toggleClass("toggled");
    $("#wrapper").toggleClass("toggled");
    $("#bkoverlay").toggleClass("toggled");
    $(".glyphicon-menu-hamburger").toggleClass("toggled");

});	

$("#bkoverlay").click(function(e) {
    e.preventDefault();
    $("#dummy-white").toggleClass("toggled");
    $("#wrapper").toggleClass("toggled");
    $("#bkoverlay").toggleClass("toggled");
    $(".glyphicon-menu-hamburger").toggleClass("toggled");

});




//functions

function clearAllDisplayClassforIndex() {

	if($("#book-wrapper").hasClass("display")){
		$("#book-wrapper").toggleClass("display");
	}

	if($('#book-item-wrapper').hasClass("display")){
		$('#book-item-wrapper').toggleClass("display");
	}
}

