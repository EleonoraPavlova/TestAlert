<template>
	<nav class="position-relative">
		<div class="div">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/plugin">Plugin</router-link>
		</div>
		<div class="position-absolute top-0 end-0">
			<MyButtons
				@click="changeLang"
				color="light"
				size="sm"
				class="btn-outline-success"
				>{{ currentLanguage }}
			</MyButtons>
		</div>
		<div class="mt-3">
			<h6>{{ $i18n("app.title") }}</h6>
		</div>
	</nav>

	<router-view />
</template>


<script>
import MyButtons from "../src/components/MyButtons.vue";
export default {
	inject: ["changeI18N"],
	components: {
		MyButtons,
	},
	data() {
		return {
			currentLanguage: "en",
		};
	},
	methods: {
		changeLang() {
			this.currentLanguage = this.currentLanguage === "en" ? "uk" : "en";
			this.changeI18N(this.currentLanguage);
			this.$forceUpdate();
			//Принудительно повторный рендеринг экземпляра компонента(это работает только локально)
		},
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
