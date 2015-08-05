(function() {
  function getBio() {
    var bio = localStorage.getItem("bio");
    
    if (bio === undefined || bio === null || bio === "null") {
      bio = $("#biography").text();
      localStorage.setItem("bio",bio);
    }
  }

  function save(bioV) {
    $("#biography").text(bioV);
    $(".button-green").click();
  }
}).call(this);
