<template>
  <div id="chartCont">
    <canvas id="myChart" width="100%" height="100%"></canvas>
  </div>
</template>
<script>
export default{
  mounted(){
    var canvas = document.getElementById("myChart")
    var ctx = document.getElementById("myChart").getContext("2d");
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Test",
          borderColor: "rgba(241, 196, 15,1.0)",
          backgroundColor: "rgba(0,0,0,0)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }]
      };
      var cr = new Chart(ctx , {
      type: "line",
      data: data,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStepWidth: 10,
      scaleStartValue: 0,
      options:{
          legend:{
            display:false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "#CCC"
                },
                ticks: {
                  fontColor: "#CCC", // this here
                },
            }],
            yAxes: [{
              gridLines: {
                  color: "#CCC"
              },
              ticks: {
                fontColor: "#CCC", // this here
              },
            }],
      },
    }
      });
      setInterval(function() {
        setData(data.datasets[0].data);
        setLabels(data.labels);
        cr.update();
      }, 2000);

      function setLabels(labels) {
        var nextMonthIndex = months.indexOf(labels[labels.length - 1]) + 1;
        var nextMonthName = months[nextMonthIndex] != undefined ? months[nextMonthIndex] : "January";
        labels.push(nextMonthName);
        labels.shift();
      }

      function setData(data) {
        data.push(Math.floor(Math.random() * 100) + 1);
        data.shift();
      }

      function convertMonthNameToNumber(monthName) {
        var myDate = new Date(monthName + " 1, 2016");
        var monthDigit = myDate.getMonth();
        return isNaN(monthDigit) ? 0 : (monthDigit + 1);
      }

      var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

  }
}


</script>
<style scoped>
#chartCont{
  grid-area:gr1;
}
</style>
