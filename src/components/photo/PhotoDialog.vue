<template>
    <v-dialog
        max-width="600"
        v-model="$store.getters.getDialogVisible"
        @click:outside="$store.commit('closeDialog')"
    >
        <v-card>
            <v-card-title>{{ full_title }}</v-card-title>
            <v-card-text>
                <v-img v-bind:src="$store.getters.getCurrentPhoto.url" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: {
        // photo: {
        //     type: Object,
        //     required: true,
        // },
        // value: {
        //     type: Boolean,
        //     default: false,
        // },
    },
    // created() {
    //     // Вызывается в тот момент, когда компонент был создан
    //     this.dialogVisible = this.value;
    // },
    data() {
        return {};
    },
    // watch: {
    //     value(newValue) {
    //         // Будет обрабатываться каждый раз, когда это значение изменяется
    //         this.dialogVisible = newValue;
    //     },
    //     dialogVisible(newValue) {
    //         this.$emit("input", newValue);
    //     },
    // },
    computed: {
        // Методы, которые должны обязательно что-то возвращать
        full_title() {
            return `Название фотографии - ${this.$store.getters.getCurrentPhoto.title}`;
        },
    },
};
</script>
<style scoped></style>
