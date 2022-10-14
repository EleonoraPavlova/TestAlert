<template>
	<div v-if="show" class="container">
		<div class="mb-3">
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
			<MyButtons @click="toggleAlert" color="success" size="sm">{{
				alert ? "Hide" : "Show message"
			}}</MyButtons>
		</div>
		<div class="card p-3">
			<h6 v-color:[type].blink.hover="baseColor">Directives</h6>
			<!-- <h6 v-color:backgroundColor="baseColor">Directives</h6> -->
			<div class="mx-auto mt-3 mb-3">
				<label for="input"></label>
				<input v-focus type="text" id="input" />
			</div>
			<div class="d-flex justify-content-center align-items-center">
				<MyButtons
					@click="baseColor = 'blue'"
					color="success"
					size="sm"
					class="width-alert"
					>Change color
				</MyButtons>
				<MyButtons
					@click="type = type === 'color' ? 'backgroundColor' : 'color'"
					color="success"
					size="sm"
					class="width-alert"
					>Change type
				</MyButtons>
				{{ type }}
			</div>
		</div>
	</div>
</template>

<script>
import AppAlert from "../components/AppAlert.vue";
import MyButtons from "../components/MyButtons.vue";
import alertMixin from "../alertMixin";
import vFocus from "../directives/vFocus";
import vColor from "../directives/vColor";

export default {
	name: "HomeView",
	mixins: [alertMixin],
	directives: {
		focus: vFocus,
		color: vColor,
	},
	components: {
		AppAlert,
		MyButtons,
	},
	data() {
		return {
			baseColor: "green",
			type: "color",
			show: true, //исчезает карточка при false
		};
	},
	// mounted() {
	// 	//убрать карточку show через 2 сек
	// 	setTimeout(() => {
	// 		this.show = false;
	// 	}, 2000);
	// },

	//тут были mixin
};
</script>

<style lang="scss" scoped>
.width-alert {
	width: 40%;
}
</style>
