<template>
	<div class="container">
		<div class="">
			<div class="d-flex justify-content-center align-items-center">
				<AppAlert
					v-if="alert"
					title="Important information!"
					text="Be carefull"
					color="success"
					class="border border-light"
					:closable="true"
					@close="alert = false"
				/>
			</div>
			<MyButtons @click="alert = true" color="success" size="sm"
				>Show message</MyButtons
			>
		</div>
	</div>
</template>

<script>
import AppAlert from "../components/AppAlert.vue";
import MyButtons from "../components/MyButtons.vue";

export default {
	name: "HomeView",
	components: {
		AppAlert,
		MyButtons,
	},
	data() {
		return {
			alert: false,
		};
	},
};
</script>

<style lang="scss" scoped>
.width-alert {
	width: 40%;
}
</style>
