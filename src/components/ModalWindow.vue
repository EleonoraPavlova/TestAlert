<template>
	<div
		class="modal-backdrop d-flex justify-content-center align-items-center"
		@click="$emit('close')"
	>
		<div class="modal-dialog modal-sm">
			<div class="card p-3">
				<h3>Title modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
					corporis, saepe architecto sequi qui repudiandae odit ex maxime
					voluptas aspernatur.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ModalWindow",
	emits: ["close"],
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.35);
}
</style>