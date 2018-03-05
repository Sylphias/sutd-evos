<template>
  <div class="toggle">

    <div class="inner">
    <div class="toggleCont">
      <p>Ignition</p>
      <label class="switch">
        <input type="checkbox" v-model="ignChecked" @change="updateIgnition">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="toggleCont">
      <p>HDLight</p>
      <label class="switch">
        <input type="checkbox" v-model="lightsChecked" @change="updatelights">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="toggleCont">
      <p>Horn</p>
      <label class="switch">
        <input type="checkbox" v-model="hornChecked" @change="updateHorn">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="toggleCont">
      <p>Wipers</p>
      <label class="switch">
        <input type="checkbox"  v-model="wipChecked" @change="updateWipers">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="toggleCont">
      <p>Hazard</p>
      <label class="switch">
        <input type="checkbox" v-model="hazChecked" @change="updateHazard">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="toggleCont">
      <p>CLRBTN</p>
      <label class="switch">
        <input type="checkbox" v-model="clrChecked" @change="updateCLR">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</div>
</template>
<script>
export default{
  data: function(){
    return{
      ignChecked:false,
      lightsChecked:false,
      hornChecked:false,
      wipChecked:false,
      hazChecked:false,
      clrChecked:false
    }
  },
methods: {
  updateIgnition: function(){
    console.log(this.ignChecked);
  },
  updatelights: function(){
    console.log(this.lightsChecked);
  },
  updateHorn: function(){
    console.log(this.hornChecked);
  },
  updateWipers: function(){
    console.log(this.wipChecked);
  },
  updateHazard: function(){
    console.log(this.hazChecked);
  },
  updateCLR: function(){
    console.log(this.clrChecked);
  },
}
}
</script>
<style scoped>
.toggle{
  grid-area:toggle;
}
.inner{
  display:flex;
  justify-content: center;
  align-items: center;
}
.toggleCont{
  margin:10px;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 60px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2ecc71;
}

input:focus + .slider {
  box-shadow: 0 0 0px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateY(-26px);
  -ms-transform: translateY(-26px);
  transform: translateY(-26px);
}

.slider:focus{
  outline: none;
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
