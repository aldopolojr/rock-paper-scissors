<template>
    <button :class="mode" v-show="!disabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        'mode': { type: String, required: true, default: 'primary' },
        'disabled': { type: Boolean, required: false, default: false }
    },
}
</script>

<style lang="scss" scoped>
button {
    padding: calcRem(10px) calcRem(20px);
    width: 100px;
    font-size: calcRem(10px);
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;

    &.primary {
        background-color: $green-light;
        color: $white;
    }

    &.secondary {
        background-color: $grey1;
        color: $black;
    }
}
</style>