$(document).ready(async function () {
  var data = await $.getJSON("crypto.json", function (json) {
    console.log(json);
    return json;
  });

  $("#txt-search").keyup(function () {
    var searchField = $(this).val();
    if (searchField === "") {
      $("#filter-records").html("");
      return;
    }

    var regex = new RegExp(searchField, "i");
    var output = '<div class="row">';
    var count = 1;
    $.each(data, function (key, val) {
      if (val.symbol.search(regex) != -1 || val.name.search(regex) != -1) {
        output += '<div class="col-md-6 well">';
        output +=
          '<div class="col-md-3"><img class="img-responsive" src="https://assets.coingecko.com/coins/images/10366/large/' +
          val.symbol +
          '.png" alt="' +
          val.name +
          '" /></div>';
        output += '<div class="col-md-7">';
        output += "<h5>" + val.symbol + "</h5>";
        output += "<p>" + val.name + "</p>";
        output += "</div>";
        output += "</div>";
        if (count % 2 == 0) {
          output += '</div><div class="row">';
        }
        count++;
      }
    });
    output += "</div>";
    $("#filter-records").html(output);
  });
});
