<template>
    <a :class="classValues"><span class="toggle__block"></span></a>
</template>

<script>
export default {
    props: ['val'],
    computed: {
        classValues() {
            return { 'toggle': true, 'toggle-on': this.val };
        },
    },
}
</script>

<style lang="scss" scoped>
.toggle {
    display: inline-block;
    padding: calcRem(1px);
    width: 42px;
    height: 22px;
    background-color: $grey2;
    border-radius: 5px;
    cursor: pointer;
    @include transition( background-color 0.3s ease-out);

    &__block {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: $white;
        border-radius: 5px;
        @include transition(transform 0.3s ease-out);
    }
}

.toggle-on {
    background-color: $green-light;

    .toggle__block {
        transform: translateX(calcRem(20px));
    }
}
</style>