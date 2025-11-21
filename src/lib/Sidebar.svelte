<script lang="ts">
	import rfLogo from '../assets/rf-logo.svg'
	import brandLogo from '../assets/brand-logo.webp'
</script>

<nav class="sidebar">
	<div class="sidebar-top">
		<a href="/" aria-label="Home">
			<img src={rfLogo} alt="RF Logo" class="rf-logo" />
		</a>
		<a href="/">
			<img src={brandLogo} alt="Brand Logo" class="brand-logo" />
		</a>
	</div>
	<div class="sidebar-bottom">
		<a href="/">
			<span class="user">FL</span>
		</a>
	</div>
</nav>

<style lang="scss">
	@use '../styles/max';

	.sidebar {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: var(--sidebar-width);
		height: 100vh;
		padding: 12px 7px;
		border-left: var(--rf-border);
		border-right: var(--rf-border);

		@media (max-width: max.$desktop) {
			position: static;
			flex-direction: row;
			height: var(--sidebar-width);
			width: 100%;
			border-left: none;
			border-right: none;
			border-bottom: var(--rf-border);
		}
	}

	.sidebar-top {
		display: flex;
		flex-direction: column;
		align-items: center;

		@media (max-width: max.$desktop) {
			flex-direction: row;
			gap: 24px;
		}
	}

	.rf-logo {
		width: 47px;
		height: 63px;
	}

	.brand-logo {
		width: 32px;
		height: 32px;
	}

	.user {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: var(--rf-color-text);
		color: var(--rf-color-white);
	}
</style>