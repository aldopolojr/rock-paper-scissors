<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin: calcRem(20px) calcRem(25px);

    @include tablet {
        margin: calcRem(25px) auto;
        width: 718px;
    }
}
</style>