(function() {
  // Functions
  function getBio() {
    var bio = localStorage.getItem("bio");
    
    if (bio === undefined || bio === null || bio === "null") {
      bio = $("#biography").text();
      localStorage.setItem("bio",bio);
    }
    return bio;
  }
  getBio();

  function save(bioV) {
    $("#biography").text(bioV);
    $(".button-green").click();
  }
  
  function compile(text) {
    settings.custom.final = settings.custom.order.replace("%ONE%",settings.custom.variables.ONE());
    settings.custom.final = settings.custom.order.replace("%TWO%",settings.custom.variables.TWO());
    settings.custom.final = settings.custom.order.replace("%THREE%",settings.custom.variables.THREE());
  }
  
  // Variables
  var settings = {
    bioPart: 2, // Where the text should be | 1: Start | 2: End | 3: Custom
    mode: 3, // Mode the bot is on | 1: Websites | 2: Sponcors | 3: Custom
    custom: {
      order: "%ONE% | %TWO% | %THREE%",
      final: null,
      variables: {
        number: 0,
        websites: ["plug.dj","grantsommer.com","google.com"],
        sponsors: ["google.com","nonexistingwebsite.com","grantsommer.com","apple.com"],
        plugdj: {
          link: "plug.dj/gsdev",
          theme: "Mixed!",
          desc: "Official Plug.DJ of Grant Sommer Development"
        },
        ONE: function() {
          return Math.floor((Math.random() * settings.custom.variables.websites.length - 1));
        },
        TWO: function() {
          settings.custom.variables.number = Math.floor((Math.random() * settings.custom.variables.sponsors.length - 1));
          if (settings.custom.variables.sponsors > 1) {
            return settings.custom.variables.sponsors[settings.custom.variables.number] + " and "+(settings.custom.variables.sponsors.length - 1)+" more sponsor(s)!";
          } else {
            return settings.custom.variables.sponsors;
          }
        },
        THREE: function() {
          return "Plug.DJ | "+settings.custom.variables.plugdj.link+" | Song type (theme): "+settings.custom.variables.plugdj.theme+" | "+settings.custom.variables.plugdj.desc;
        }
      }
    }
  }
  if (settings.bioPart === 1) {
    compile();
    save(settings.custom.final+" | "+getBio());
  } else if (settings.bioPart === 2) {
    compile();
    save(getBio()+" | "+settings.custom.final);
  }
}).call(this);
