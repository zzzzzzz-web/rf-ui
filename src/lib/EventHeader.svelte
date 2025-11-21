<script lang="ts">
	import brandLogo from '../assets/brand-logo.webp'

	let title = 'RainFocus Summit'
	let date = 'December 15th'
	let location = 'Lehi, Utah'

	let editing = false

	function editEvent() {
		editing = !editing
	}
</script>

<header class="event-header">
	<div class="event-left">
		<img src={brandLogo} alt="Brand Logo" class="brand-logo" />

		<div class="event-details">
			{#if editing}
				<div class="edit-block">
					<input bind:value={title} placeholder="Event Title" />
				</div>
				<div class="edit-block">
					<input bind:value={date} placeholder="Event Date" />
				</div>
				<div class="edit-block">
					<input bind:value={location} placeholder="Event Location" />
				</div>
			{:else}
				<h1>{title}</h1>
				<p>{date}</p>
				<p>{location}</p>
			{/if}
		</div>
	</div>

	<div class="event-edit">
		<button on:click={editEvent} type="button">{editing ? 'Save' : 'Edit'} event</button>
	</div>
</header>

<style lang="scss">
	@use '../styles/max';

	.event-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;

		@media (max-width: max.$desktop) {
			flex-wrap: wrap;	
		}
	}

	.event-left {
		display: flex;
		gap: 16px;
		width: 100%;
	}

	.brand-logo {
		width: 95px;
		height: 95px;
	}

	.event-details {
		width: 100%;
		
		h1 {
			margin-bottom: 8px;
			color: var(--rf-color-header);
			font-size: 32px;
			font-weight: 300;

			@media (max-width: max.$mobile) {
				font-size: 24px;
			}
		}

		p {
			line-height: 1.5;
		}
	}

	.edit-block {
		max-width: 400px;
		margin: 4px 0;

		input {
			padding: 4px;
			border: var(--rf-border);
			border-radius: var(--rf-border-radius);
			font-size: 13px;
			width: 100%;
		}
	}

	.event-edit {
		flex-shrink: 0;
		
		button {
			padding: 8px 16px;
			border-radius: var(--rf-border-radius);
			background-color: var(--brand-color-secondary);
			color: var(--rf-color-white);
			font-size: 14px;
			font-weight: 700;
			cursor: pointer;
		}

		@media (max-width: max.$desktop) {
			width: 100%;
			margin-top: 10px;
		}
	}
</style>