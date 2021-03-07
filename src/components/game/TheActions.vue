<template>
    <div class="actions">
        <a v-for="option in options" :key="option" @click="makeMove(option)">{{ option }}<i :class="'icon icon-' + option"></i></a>
  </div>
</template>

<script>
export default {
    inject: ['options', 'makeMove'],
}
</script>

<style lang="scss" scoped>
.actions {
    a {
        display: block;
        margin: calcRem(10px) 0;
        padding: calcRem(20px);
        background: $green-light;
        color: $white;
        text-align: center;
        border-radius: 5px;
    }

    .icon {
        margin-left: calcRem(5px);
    }
}
</style>