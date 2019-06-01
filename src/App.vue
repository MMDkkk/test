<template>
  <div id="app">
    <div>123213213123</div>
     <div class="rect" ref="rect"></div>
  </div>
</template>

<script>
import Velocity from "velocity-animate"; 
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    Velocity(
      this.$refs.rect,
      {
        backgroundColor: "#0085eb",
        translateX: 260,
        rotateZ: "360deg"
      },
      {
        duration: 1000,
        easing: [0.4, 0.01, 0.165, 0.99]
      }
    );
  },
  created() {

    // fetch("http://119.23.18.151:3094/dataIndex/dataSymbolR/getDataIndexSymbolRVoList.json", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded" // 指定提交方式为表单提交
    //   },
    //   body: new URLSearchParams([["type", 2]]).toString()
    // }).then(res => {
    //   console.log(res);
    // });

    
    // fetch("http://119.23.18.151:3094/dataIndex/dataSymbolR/getDataIndexSymbolRVoList.json?type=2", {
    //   method: "GET",
    // }).then(res => {
    //   console.log(res.body.data);
    // });

    
  },
  methods: {}
};
</script>

<style>
.rect {
  background: gray;
  height: 100px;
  width: 100px;
}

</style>
