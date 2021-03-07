<template>
    <p class="commentary" v-html="message" ref="msg"></p>
</template>

<script>
export default {
    props: ['message'],
    data() {
        return {
            voices: window.speechSynthesis.getVoices(),
        };
    },
    computed: {
        getSettings() {
            return this.$store.getters.getSettings;
        },
    },
    watch: {
        message(){
            speechSynthesis.cancel();
            if (this.getSettings.sound){
                setTimeout(() => {
                    const utterance = new SpeechSynthesisUtterance(this.$refs.msg.innerText);
                    utterance.voice = this.voices[7];
                    speechSynthesis.speak(utterance);
                }, 100);
            }
        },
    },
    created(){
        setTimeout(() => { this.voices = window.speechSynthesis.getVoices(); }, 50);
    },
}
</script>

<style lang="scss" scoped>
.commentary {
    padding: calcRem(20px);
    background: $blue-light;
    color: $white;
    border-radius: 5px;

    @include tablet {
        text-align: center;
    }
}
</style>