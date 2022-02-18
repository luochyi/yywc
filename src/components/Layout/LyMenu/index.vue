<!--
 * @Author: your name
 * @Date: 2022-02-14 13:50:32
 * @LastEditTime: 2022-02-14 14:31:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yyac-system/src/components/Layout/LyMenu/index.vue
-->
<template>
    <el-menu :collapse="isCollapse" @select="handlerSelect" @open="handlerOpen" @close="handlerClose">
        <template v-for="(item,index) in list">
            <el-menu-item :key="index" :index="item.path" v-if="!item.children">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
             <lySubmenu :key="index" :subData="item" :index="item.path" v-if="item.children">
             </lySubmenu>
        </template>
    </el-menu>
</template>

<script>
import menuData from "./menuData"
export default {
    name: "LyMenu",
    components: {
        lySubmenu: () => import('./lySubmenu')
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            list: menuData,
        };
    },
    methods: {
        // 选择菜单的效果
        handlerSelect(val) {
            console.log(val)
        },
        // 打开submenu
        handlerOpen(val) {
            console.log(val)
        },
        // 关闭submenu
        handlerClose(val) {
             console.log(val)
        }
    }
};
</script>

<style lang="less" scoped>
</style>