<template>
    <a-button @click="btnClick">点我</a-button>
    <a-modal title="VUE3" v-model:visible="visible">
        <p>{{ message }}</p>
    </a-modal>
    <a-row> </a-row>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'App',
    setup() {
        const visible = ref(false);
        const message = 'Hello vue3';
        const btnClick = () => {
            visible.value = true;
        };
        return {
            visible,
            message,
            btnClick,
        };
    },
});
</script>
