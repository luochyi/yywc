<!--
 * @Author: your name
 * @Date: 2022-02-14 14:06:41
 * @LastEditTime: 2022-02-14 14:23:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yyac-system/src/components/Layout/LyMenu/lySubmenu.vue
-->
<template>
    <el-submenu :index="index">
        <template slot="title">
            <i :class="subData.icon"></i>
            <span slot="title">{{subData.title}}</span>
        </template>
        <template v-for="(item,index) in subData.children">
            <el-menu-item :key="index" :index="item.path" v-if="!item.children">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
             <lySubmenu :key="index" :subData="item" :index="item.path" v-if="item.children">
             </lySubmenu>
        </template>
    </el-submenu>
</template>

<script>
export default {
    name: "lySubmenu",
    props: {
        subData: {
            type: Object,
            default: () => {}
        },
        index: {
            type: [String, Number],
            default: ""
        }
    }
}
</script>

<style lang="less" scoped>

</style>