<script lang="ts">
	import Sidebar from './lib/Sidebar.svelte'
	import Dashboard from './lib/Dashboard.svelte'
</script>

<div class="page-wrapper">
	<Sidebar />

	<main class="main-content">
		<Dashboard />
	</main>
</div>

<style lang="scss">
	@use './styles/max';

  .page-wrapper {
		position: relative;
	}

	.main-content {
		min-height: 100vh;
		padding-left: var(--sidebar-width);

		/* max-width: var(--main-width); */

		@media (max-width: max.$desktop) {
			padding-left: 0;
		}
	}
</style>
