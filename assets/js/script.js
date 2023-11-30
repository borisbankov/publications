$(document).ready(function() {
  $(".all_dt").hide();
  $("#facultyName").change(function() {
    $("#departmentName").val("");
    $(".all_dt").hide();
    var selected = 'dt' + this.value;
    $("." + selected).show();
  });
  $("#year_start").change(function() {
    var year_start = parseInt(this.value);
    var year_end = parseInt($("#year_end").val());
    if (year_start < year_end - 6) {
      $("#year_end").val(year_start + 6);
      alert('Максималният интервал е 7 години');
    }
  });
  $("#year_end").change(function() {
    var year_end = parseInt(this.value);
    var year_start = parseInt($("#year_start").val());
    if (year_start < year_end - 6) {
      $("#year_start").val(year_end - 6);
      alert('Максималният интервал е 7 години');
    }
  });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))