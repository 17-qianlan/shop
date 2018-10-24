<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <hd-nav></hd-nav>
        <sidebar></sidebar>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    #app {
        width: 1200px;
        margin: auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
