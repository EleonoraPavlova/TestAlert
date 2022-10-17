<template>
	<div class="about">
		<h1>How plugins work in vue</h1>
		<div class="mb-3">
			<MyButtons
				@click="$alert('It is working')"
				color="light"
				size="sm"
				class="btn-outline-info"
				>Alert!
			</MyButtons>
			<MyButtons
				@click="modal = true"
				color="light"
				size="sm"
				class="btn-outline-warning"
			>
				Modal
			</MyButtons>
		</div>
		<teleport to="#modal">
			<!--<teleport to="body"> или записать так  -->
			<ModalWindow v-if="modal" @close="modal = false" />
		</teleport>
	</div>
</template>


<script>
import MyButtons from "../components/MyButtons.vue";
import ModalWindow from "../components/ModalWindow.vue";

export default {
	name: "PluginView",
	inject: ["changeI18N"],
	data() {
		return {
			currentLanguage: "en",
			modal: false,
		};
	},
	components: {
		MyButtons,
		ModalWindow,
	},
	methods: {
		changeLang() {
			this.currentLanguage = this.currentLanguage === "en" ? "uk" : "en";
			this.changeI18N(this.currentLanguage);
			this.$forceUpdate();
			//Принудительно повторный рендеринг экземпляра компонента()
		},
	},
	// mounted() {
	// 	//сразу после перегрузки страницы отрабатывает
	// 	alert("This is a new text");
	// },
};
</script>

<style lang="scss" scoped>
</style>

