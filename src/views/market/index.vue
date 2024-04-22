<template>
  <el-row class="bg">
    <el-row :gutter="50" class="title container">
      <el-col :lg="2"><el-button type="primary">时间查询</el-button></el-col>
      <el-col :lg="2"><el-button type="primary">地市</el-button></el-col>
      <el-col :lg="2"><el-button type="primary">区县</el-button></el-col>
      <el-col :lg="2"><el-button type="primary">网络制式</el-button></el-col>
      <el-col :lg="2"><el-button type="primary">运营商</el-button></el-col>
    </el-row>
    <el-row :gutter="50" style="height: 30%">
      <el-col :lg="8" class="purple" style="height: 100%"><MarLeftTop /></el-col>
      <el-col :lg="8" class="purple" style="height: 100%"><MarCenterTop /></el-col>
      <el-col :lg="8" class="purple" style="height: 100%"><MarRightTop /></el-col>
    </el-row>

    <el-row :gutter="50" style="height: 66%">
      <el-col :lg="24" class="purple" style="height: 100%"><Map /></el-col>
    </el-row>
  </el-row>
</template>

<script lang="ts">
import MarLeftTop from './MarLeftTop'
import MarCenterTop from './MarCenterTop'
import MarRightTop from './MarRightTop'
import Map from './Map'

export default {
  components: {
    MarLeftTop, MarCenterTop, MarRightTop, Map
  }
}
</script>
<style>
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  display: block;
  background-image: url("../../images/bj.gif");
}
.title {
  display: block;
  background-image: url("../../images/market/title.png");
  background-size: 100% 100%;
}
.container {
  display: flex;
  justify-content: center;
}

.container > el-col .container > purple {
  background-color: #f1f1f1;
  width: 7%;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.purple {
  background-color: #f1f1f1;
}

</style>

