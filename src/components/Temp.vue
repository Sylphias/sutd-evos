<template>
  <div id="rpm" data-value="0">
      <div class="title">
        Temp
      </div>
      <canvas id="temp" width="100%" height="30%"></canvas>
      <div class="outerLabel">
        <div class="innerLabel">
          {{speed}}
        </div>
      </div>
  </div>
</template>
<script>
export default{
  data:function(){
    return {
      speed:0
    }
  },
  mounted(){
    var data = {
        datasets: [
            {
                data: [300, 50],
                backgroundColor: [
                    "#2ecc71",
                    "#ecf0f1"
                ]
            }]
    };

    var ctx = document.getElementById("temp");

    // And for a doughnut chart
    var speedC = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          cutoutPercentage:75,
        	rotation: 1 * Math.PI,
          circumference: 1 * Math.PI,
          legend:{
            display:false,
          }
        }
    });
    var self = this;
    console.log(this.speed);
    setInterval(function() {
      self.speed = Math.round(Math.random()*100);
      var speedRatio = self.speed/100
      speedC.data.datasets[0].data[0]= speedRatio ;
      speedC.data.datasets[0].data[1]=1-speedRatio;
      speedC.update();
    }, 2000);

  }

}
</script>
<style scoped>
.title{
  font-size:1.5rem;
  padding-top:10px;
  padding-bottom: 10px
}
#rpm{
  grid-area: meter3;
  position:relative;
}

.outerLabel{
  position: absolute;
  bottom: 10px;
  left: 50%;
}
.innerLabel{
  position: relative;
  left: -50%;
  font-size: 2rem;
}
</style>
