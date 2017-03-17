$(document).ready(function(){
    $("#submitButton").on("click", function(){
      console.log("Meow");

      //nameAdd

      var name = $("#nameAdd").val();
      var details = $("#detailsAdd").val();

      $.ajax({
        type: "GET",
        url: "/kitty/" + name + "/" + details,
        // "/data/scott/teacher"
        success: function(responseFromServer){
          console.log(responseFromServer);
        }
      });
    });
});
