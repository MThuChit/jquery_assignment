$(document).ready(function () {

  function showError(inputId, errorId) {
    $("#" + inputId).addClass("input-error");   
    $("#" + errorId).removeClass("d-none");       
  }

  function hideError(inputId, errorId) {
    $("#" + inputId).removeClass("input-error"); 
    $("#" + errorId).addClass("d-none");          
  }

  function isEmpty(id) {
    return $("#" + id).val().trim() === "";
  }


  $("#webForm").submit(function (e) {
    e.preventDefault(); 

    let ok = true;

  
    const fields = [
      { input: "username", error: "usernameError" },
      { input: "email", error: "emailError" },
      { input: "password", error: "passwordError" },
      { input: "confirmPassword", error: "confirmPasswordError" }
    ];

    fields.forEach(function (f) {
      if (isEmpty(f.input)) {
        showError(f.input, f.error);
        ok = false;
      } else {
        hideError(f.input, f.error);
      }
    });

   
    if ($(".topic:checked").length === 0) {
      $("#topicsError").removeClass("d-none");
      ok = false;
    } else {
      $("#topicsError").addClass("d-none");
    }

 
    if ($("#gender").val() === "--") {
      $("#genderError").removeClass("d-none");
      ok = false;
    } else {
      $("#genderError").addClass("d-none");
    }

    $("#confirmMismatchError").addClass("d-none"); 
    if (!isEmpty("confirmPassword") && !isEmpty("password")) {
      if ($("#confirmPassword").val() !== $("#password").val()) {
        $("#confirmPassword").addClass("input-error");
        $("#confirmMismatchError").removeClass("d-none");
        ok = false;
      }
    }

    if (ok) {
      alert("Form submitted successfully!");
    }

  });

});
