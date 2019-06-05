 
$(function () {

    $(".changeState").on("click", function (event) {
     var id = $(this).data("id");
     var newState = $(this).data("state");

     var update = {
         devoured: newState
     };
     console.log(update)
     console.log(id)
     // Send the PUT request.
     $.ajax("api/burgers/" + id, {
         type: "PUT",
         data: update
     }).then(
         function () {
             console.log("changed devoured to", newState);
             // Reload the page to get the updated list
             location.reload();
         }
     );
 });

$(".create-form").on("submit", function (event) {
     // Make sure to preventDefault on a submit event.
     event.preventDefault();

     var newBurger = {
         burger_name: $("#burgerN").val().trim(),
             };

     // Send the POST request.
     $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
     }).then(
         function () {
             console.log("new burger created");
             // Reload the page to get the updated list
             location.reload();
         }
     );
 });

});