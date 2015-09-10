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
    days = [1,7,14,24]
    $(".indv-days td").click(function(event){
      $day = $(event.currentTarget);
      dayInfo = $day.attr("data-info");
      console.log(dayInfo === "1");
      if (dayInfo === "1"){
        console.log("hello")
        $('body').append("<div>").addClass('m-background')
        $(".m-content").show();
      }
    })
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
      $(".indv-days").append($("<td></td>").text(i).attr('data-info', i));
    }
  }

  CalendarView.prototype.buildWeeks = function(){
    var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"]
    days.forEach(function(el) {
      $("#days").append($("<td></td>").text(el));
    })
  }

})();
