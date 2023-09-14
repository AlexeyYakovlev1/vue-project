<template>
    <v-container>
        <PhotoForm
            v-if="$store.getters.getPhotosLength < 11"
            @addPhoto="addPhoto"
        />
        <div v-else>
            <p>Вы не можете добавить больше фотографий</p>
        </div>
        <v-row>
            <Photo
                v-for="photo in $store.getters.getAllPhotos"
                v-bind:key="photo.id"
                v-bind:photo="photo"
            />
        </v-row>
        <PhotoDialog />
    </v-container>
</template>
<script>
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";

export default {
    data() {
        return {
            photos: [],
            // currentPhoto: {},
            // dialogVisible: false,
        };
    },
    components: {
        Photo,
        PhotoForm,
        PhotoDialog,
    },
    mounted() {
        this.$store.dispatch("fetchPhotos");
    },
    methods: {
        openPhoto(photo) {
            this.currentPhoto = photo;
            this.dialogVisible = true;
        },
        addPhoto(photo) {
            this.$store.commit("addPhoto", photo);
        },
    },
};
</script>
<style scoped></style>
