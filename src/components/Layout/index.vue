<!--
 * @Author: your name
 * @Date: 2022-02-14 11:36:16
 * @LastEditTime: 2022-02-14 14:04:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yyac-system/src/views/Layout/index.vue
-->
<template>
    <el-container>
        <el-aside width="230px">
            <div class="ly-left-title">云云问车</div>
            <LyMenu></LyMenu>
        </el-aside>
        <el-container>
            <el-header style="height: 90px">
                <div class="ly-h-d1"></div>
                <div></div>
            </el-header>
            <el-main>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>

export default {
    name: "Layout",
    components: {
        LyMenu: () => import("./LyMenu")
    }
};
</script>

<style lang="less" scoped>
.ly-left-title {
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #3f9eff;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    border-bottom: 1px solid #f0f2f9;
}
.ly-h-d1 {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #f0f2f9;
}
</style>