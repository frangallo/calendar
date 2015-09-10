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
    $(".indv-days td").click(function(event){
      $day = $(event.currentTarget)
      console.log($day.attr("data-info"))
      // console.log("hello world")
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
