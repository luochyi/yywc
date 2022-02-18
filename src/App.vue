<!--
 * @Author: your name
 * @Date: 2022-02-14 11:24:53
 * @LastEditTime: 2022-02-14 11:47:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yyac-system/src/App.vue
-->
<template>
    <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    provide() {
        return {
            reload: this.reload
        }
    },
     data() {
        return {
            isRouterAlive: true
        };
    },
    methods: {
       reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => {
                this.isRouterAlive = true;
            })
        }
    }
};
</script>

<style>
#app {
    width: 100%;
    height: 100%;
    min-width: 1400px;
    min-height: 760px;
    overflow: auto;
}
</style>
