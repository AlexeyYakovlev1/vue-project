import axios from "axios";

export default {
	state: {
		photos: [],
		dialogVisible: false,
		currentPhoto: {}
	},
	mutations: { // функции, которые изменяют состояние
		setPhotos(state, payload) {
			state.photos = payload;
		},
		addPhoto(state, payload) {
			state.photos = [payload, ...state.photos];
		},
		showDialog(state) {
			state.dialogVisible = true;
		},
		closeDialog(state) {
			state.dialogVisible = false;
		},
		setCurrentPhoto(state, payload) {
			state.currentPhoto = payload;
		}
	},
	getters: { // аналог computed
		getAllPhotos(state) {
			return state.photos;
		},
		getPhotosLength(state) {
			return state.photos.length;
		},
		getDialogVisible(state) {
			return state.dialogVisible;
		},
		getCurrentPhoto(state) {
			return state.currentPhoto;
		}
	},
	actions: { // асинхронные функции, которые работают с внешним api
		fetchPhotos(ctx) {
			axios
				.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
				.then((response) => (ctx.commit("setPhotos", response.data)));
		}
	}
}