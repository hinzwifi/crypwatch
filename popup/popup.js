var hiddenBox = $("#tabs");
$("#Pick").on("click", function (event) {
  hiddenBox.toggle();
});

async function addData(data, number) {
  const yeet = data.prices;
  var dataPoints = [];
  var dataLabels = [];
  for (var i = 0; i < yeet.length; i++) {
    // dataLabels.push(yeet[i][0]);
    // dataPoints.push(yeet[i][1]);
    dataPoints.push({
      x: new Date(yeet[i][0]),
      y: yeet[i][1],
    });

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      zoomEnabled: true,
      theme: "dark2",

      axisY: {
        title: "Price",
      },
      axisX: {
        title: "Date",
      },
      data: [
        {
          type: "area",
          yValueFormatString: "₱ " + "##.######",
          dataPoints: dataPoints,
        },
      ],
    });
  }

  localStorage.setItem(number, JSON.stringify(dataPoints));
  //   const labels = dataLabels;
  //   const da = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "Price",
  //         data: dataPoints,
  //         borderColor: "rgb(75, 192, 192)",
  //       },
  //     ],
  //   };

  //   var ctx = document.getElementById("myChart").getContext("2d");
  //   var myChart = new Chart(ctx, {
  //     type: "line",
  //     data: da,
  //   });
  //   console.log(dataPoints);
  chart.render();
}
setInterval(() => {
  if (navigator.onLine) {
    $("#offline").hide();
    $("button").prop("disabled", false);
    $("button").css("background-color", "#292d3e");
  } else {
    $("#chartContainer").hide();
    $("#nowContainer").show();
    // offlineData(1);
    $("#offline").show();
    $("button").prop("disabled", true);
    $("button").css("background-color", "red");
    // console.log("offline");
  }
}, 1000);
async function nowData(data) {
  //   alert(data["smooth-love-potion"]["php"] + new Date().toLocaleString());
  $(".stat-value").html("₱ " + data["smooth-love-potion"]["php"]);
  $(".stat-desc #lastUpdate").html(new Date().toLocaleString());
}

$(document).ready(function () {
  $.getJSON(
    "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=PHP",
    nowData
  );
  $("#now").click(function () {
    $("#chartContainer").hide();
    $("#nowContainer").show();
    $.getJSON(
      "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=PHP",
      nowData
    );
  });
  $("#oneDay").click(function () {
    $("#nowContainer").hide();
    $("#chartContainer").show();
    if (navigator.onLine) {
      $.getJSON(
        "https://api.coingecko.com/api/v3/coins/smooth-love-potion/market_chart?vs_currency=PHP&days=1",
        function (data) {
          addData(data, 1);
        }
      );
    } else {
      // offlineData(1);
      // $("#offline").show();
      console.log("offline");
    }
  });
  $("#fiveDays").click(function () {
    $("#nowContainer").hide();
    $("#chartContainer").show();
    $.getJSON(
      "https://api.coingecko.com/api/v3/coins/smooth-love-potion/market_chart?vs_currency=PHP&days=5",
      function (data) {
        addData(data, 5);
      }
    );
  });
  $("#fifteenDays").click(function () {
    $("#nowContainer").hide();
    $("#chartContainer").show();
    $.getJSON(
      "https://api.coingecko.com/api/v3/coins/smooth-love-potion/market_chart?vs_currency=PHP&days=15",
      function (data) {
        addData(data, 15);
      }
    );
  });
  $("#thirtyDays").click(function () {
    $("#nowContainer").hide();
    $("#chartContainer").show();
    $.getJSON(
      "https://api.coingecko.com/api/v3/coins/smooth-love-potion/market_chart?vs_currency=PHP&days=30",
      function (data) {
        addData(data, 30);
      }
    );
  });
});

// async function offlineData(number) {
//   // console.log("------------------");
//   // const data = JSON.parse(localStorage.getItem(1));
//   // var chart = new CanvasJS.Chart("chartContainer", {
//   //   animationEnabled: true,
//   //   theme: "dark2",
//   //   axisY: {
//   //     title: "Price",
//   //   },
//   //   axisX: {
//   //     title: "Date",
//   //   },
//   //   data: [
//   //     {
//   //       type: "area",
//   //       yValueFormatString: "₱ " + "##.######",
//   //       dataPoints: data,
//   //     },
//   //   ],
//   // });
//   // let dataPoints = [];
//   // for (var i = 0; i < data.length; i++) {
//   //   // dataLabels.push(yeet[i][0]);
//   //   // dataPoints.push(yeet[i][1]);
//   //   // dataPoints.push({
//   //   //   x: data[i][0],
//   //   //   y: data[i][1],
//   //   // });
//   //   console.log(data[i]);
//   //   // var chart = new CanvasJS.Chart("chartContainer", {
//   //   //   animationEnabled: true,
//   //   //   zoomEnabled: true,
//   //   //   theme: "dark2",
//   //   //   axisY: {
//   //   //     title: "Price",
//   //   //   },
//   //   //   axisX: {
//   //   //     title: "Date",
//   //   //   },
//   //   //   data: [
//   //   //     {
//   //   //       type: "area",
//   //   //       yValueFormatString: "₱ " + "##.######",
//   //   //       dataPoints: dataPoints,
//   //   //     },
//   //   //   ],
//   //   // });
//   // }
//   // chart.render();
// }
