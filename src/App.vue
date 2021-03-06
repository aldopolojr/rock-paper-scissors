<template>
    <the-container>
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
    </the-container>
</template>

<script>
import TheContainer from './components/base/BaseContainer.vue';
import TheSettings from './components/pages/TheSettings.vue';
import TheGame from './components/pages/TheGame.vue';

export default {
    components: {
        TheContainer,
        TheSettings,
        TheGame,
    },
    data() {
        return {
            selectedComponent: 'the-settings',
        };
    },
    provide() {
        return {
            setComponent: this.activateComponent,
        };
    },
    methods: {
        activateComponent(comp){
            this.selectedComponent = comp;
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/typography.scss";
@import "@/assets/sass/reset.scss";

body {
    min-height: 100vh;
    background-color: $blue-dark;
    color: $white;
    font-family: 'Play', sans-serif;
    font-size: calcRem(15px);

    @include tablet {
      font-size: calcRem(18px);
    }

    @include desktop {
      font-size: calcRem(20px);
    }
}
</style>