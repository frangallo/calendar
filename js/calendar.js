(function () {
  if (typeof Calendar === "undefined") {
    window.Calendar = {};
  }
  var CalendarView = Calendar.CalendarView = function ($el) {
    this.$el = $el;
    this.buildWeeks();
    this.buildDays();
    this.openModal();
  }

  CalendarView.prototype.openModal = function (){
    var that = this;
    $(".indv-days td").click(function(event){
      $day = $(event.currentTarget);
      dayInfo = $day.attr("data-info");
      if (dayInfo === "2"){
        that.openFirstModal();
      } else if (dayInfo === "13") {
        that.openSecondModal();
      } else if (dayInfo === "24") {
        that.openThirdModal();
      }
    })
  }

  CalendarView.prototype.openFirstModal = function (){
    console.log("hello")
    $('body').append("<div>").addClass('m-background')
    $(".date").html("September 1, 2015")
    $(".event").html("Birthday Party")
    $(".invite-count").html("Invite Count: 120")
    $(".circle").addClass("circle-green")
    $(".m-content").show();
    $(".close-button").click(function(){
      location.reload()
    });
  }

  CalendarView.prototype.openSecondModal = function (){
    console.log("hello")
    $('body').append("<div>").addClass('m-background')
    $(".date").html("September 13, 2015")
    $(".event").html("Technical Discussion")
    $(".invite-count").html("Invite Count: 23")
    $(".circle").addClass("circle-green")
    $(".m-content").show();
    $(".close-button").click(function(){
      location.reload()
    });
  }

  CalendarView.prototype.openThirdModal = function (){
    console.log("hello")
    $('body').append("<div>").addClass('m-background')
    $(".date").html("September 24, 2015")
    $(".event").html("Press Release")
    $(".invite-count").html("Invite Count: 64")
    $(".circle").addClass("circle-red")
    $(".m-content").show();
    $(".close-button").click(function(){
      location.reload()
    });
  }

  CalendarView.prototype.buildDays = function(){
    $(".indv-days").append($("<tr></tr>"));
    for (var i = 1; i <= 31; i++) {
      if (i === 8){
        $(".indv-days").append($("<tr></tr>"));
      } else if (i === 15){
        $(".indv-days").append($("<tr></tr>"));
      } else if (i === 22){
        $(".indv-days").append($("<tr></tr>"));
      } else if (i === 22){
        $(".indv-days").append($("<tr></tr>"));
      } else if (i === 29){
        $(".indv-days").append($("<tr></tr>"));
      }

      if ( i === 2 || i === 13 || i === 24){
        $(".indv-days").append($("<td></td>").addClass("busy-day").text(i).attr('data-info', i));
      } else {
        $(".indv-days").append($("<td></td>").text(i).attr('data-info', i));
      }
    }
  }

  CalendarView.prototype.buildWeeks = function(){
    var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"]
    days.forEach(function(el) {
      $("#days").append($("<td></td>").text(el));
    })
  }

})();
