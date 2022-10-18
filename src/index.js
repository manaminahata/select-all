import $ from "jquery";
let clickCount = 0;
$(function () {
  $("#select-all").click(function () {
    clickCount += 1;
    if (clickCount % 2 === 1) {
      $("input[name=check]").prop("checked", true);
    } else {
      $("input[name=check]").prop("checked", false);
    }
  });
});
