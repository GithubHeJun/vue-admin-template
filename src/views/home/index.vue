<template>
  <el-row class="bg">
    <el-row class="bg-purple">
      <el-col :lg="24" />
    </el-row>
    <el-row :gutter="10" style="height: 100%">
      <el-col :lg="6" style="height: 100%">
        <el-row style="height: 46%">
          <el-col :lg="24" class="bg-purple-dark" style="height: 100%"><LeftTop /></el-col>
        </el-row>
        <el-row style="height: 46%">
          <el-col :lg="24" class="bg-purple-light" style="height: 100%"><LeftBott /></el-col>
        </el-row>
      </el-col>
      <el-col :lg="12" style="height: 100%">
        <el-row style="height: 70%">
          <el-col :lg="24" class="grid-content bg-purple-dark" style="height: 100%"><Center /></el-col>
        </el-row>
        <el-row style="height: 22%">
          <el-col :lg="24"><div class="grid-content bg-purple-light" style="height: 100%"><CenterBott /></div></el-col>
        </el-row>
      </el-col>
      <el-col :lg="6" style="height: 100%">
        <el-row style="height: 46%">
          <el-col :lg="24" class="bg-purple-dark" style="height: 100%"><FightTop /></el-col>
        </el-row>
        <el-row style="height: 46%">
          <el-col :lg="24" class="bg-purple-light" style="height: 100%"><FightBott /></el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>

<script lang="ts">
import LeftTop from './LeftTop'
import LeftBott from './LeftBott'
import FightTop from './RightTop'
import FightBott from './RightBott'
import CenterBott from './CenterBott'
import Center from './Center'

export default {
  components: {
    LeftTop, LeftBott, FightTop, FightBott, CenterBott, Center
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
.bg-purple {
  position: relative;
  border-radius: 4px;
  min-height: 6%;
  background-image: url("../../images/home/images1.png");
  background-size: 100% 100%;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #0f2b53;
}
.bg-purple-light {
  position: relative;
  top: 11px;
  background: #0f2b53;
}
.grid-content {
  border-radius: 4px;
  min-height: 377px;
}
.el-table th, .el-table tr {
  background-color: #0f2b53;
}
.el-table td, .el-table th.is-leaf {
  border-bottom: 0px solid #EBEEF5;
}
</style>
