<template>
	<div
		class="alert d-flex justify-content-center align-items-start"
		role="alert"
		:class="[`alert-${color}`]"
	>
		<div class="mx-3">
			<h6 class="alert-title">{{ title }}</h6>
			<p class="m-0">{{ text }}</p>
		</div>
		<CloseButton v-if="closable" @click="$emit('close')" size="xs" />
	</div>
</template>

<script>
import CloseButton from "../components/CloseButton.vue";

export default {
	name: "AppAlert",

	components: {
		CloseButton,
	},
	emits: ["close"],
	props: {
		title: {
			type: String,
			default: "I am a title component",
		},
		text: {
			type: String,
			default: "I am a text component",
		},
		color: {
			type: String,
			requeired: false,
			default: "primary",
			validator(val) {
				return [
					"secondary",
					"success",
					"danger",
					"warning",
					"info",
					"light",
					"dark",
				].includes(val);
			},
		},
		closable: {
			type: Boolean,
			requeired: false,
			default: false,
		},
	},
};
</script>


<style scoped lang="scss">
</style>
