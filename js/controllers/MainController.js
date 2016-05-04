app.controller('MainController', function($scope, $http) {

    // Fade in Page
    $(document).ready(function(){
      $("body").hide().fadeIn(1250);
    });

    // Set Title
    $scope.title = "Personalized Cards inspired by Pink Floyd";

    // Load Data
    $.getScript("js/Cards.json").then(function(data) {
      console.log("Cards Loaded.");

      // Debug
      console.log(Cards);

      // Loop through Cards
      for (i = 0; i < Cards.length; i++) {
        console.log(Cards[i]);
        var background = Cards[i].primaryColor;


        // V 1.0
        // var Card =  $(".card").append(
        //               '<div id="' + Cards[i].name + '" class="col-md-6 members">' +
        //               '<img id="hero" src="js/assets/img/' + Cards[i].hero + '">' +
        //               '<img id="avatar" src="js/assets/img/' + Cards[i].avatar + '">' + "<ul>" +
        //               '<li id="name">' + Cards[i].name + '</li>' +
        //               '<li id="phone" class="icon-pf-phone"><h4>' + Cards[i].contactItem.phone + '</h4></li>' +
        //               '<li id="cell" class="icon-pf-mobile"><h4>' + Cards[i].contactItem.mobile + '</h4></li>' +
        //               '<li id="email" class="icon-pf-email"><h4>' + Cards[i].contactItem.email + '</h4></li>' + "</ul>" +
        //               '<div id="pencil' + i + '" class="icon-pf-pencil" style="color:' + Cards[i].ctaColor + '"></div>' +
        //               '</div>'
        //             );
        // };

        // Build Card while w/ each loop using Bootstrap
        $('.card').append('<div id="member' + i + '" class="col-md-6 members">');
        $('#member' + i).append('<img id="hero" src="js/assets/img/' + Cards[i].hero + '">');
        $('#member' + i).append('<img id="avatar" src="js/assets/img/' + Cards[i].avatar + '">');
        $('#member' + i).append('<li id="name">' + Cards[i].name + '</li>');
        $('#member' + i).append('<li id="phone" class="icon' + i + ' icon-pf-phone"><h4>' + Cards[i].contactItem.phone + '</h4>');
        $('#member' + i).append('<li id="cell" class="icon' + i + ' icon-pf-mobile"><h4>' + Cards[i].contactItem.mobile + '</h4>');
        $('#member' + i).append('<li id="email" class="icon' + i + ' icon-pf-email"><h4>' + Cards[i].contactItem.email + '</h4>');
        $('#member' + i).append('<div id="pencil" class="icon' + i + ' icon-pf-pencil">').addRule({color: Cards[i].primaryColor});
        $('#pencil.icon' + i + '.icon-pf-pencil::before').addRule({background: Cards[i].ctaColor + ' !important'});
      };
    });
});
