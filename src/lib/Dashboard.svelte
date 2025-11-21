<script lang="ts">
	import EventHeader from "./EventHeader.svelte"
	import Attendee from "./Attendee.svelte"
</script>

<div class="dashboard-wrapper">
	<EventHeader />
	
	<div class="event-guide">
		<h2>Event setup guide</h2>
		<p>See the available list of modules below. We suggest that you start with the attendee module.</p>
	</div>

	<Attendee />
</div>

<style lang="scss">
	@use '../styles/max';

	.dashboard-wrapper {
		padding: 40px 48px;

		@media (max-width: max.$desktop) {
			padding: 20px;
		}
	}

	.event-guide {
		margin: 40px 0;

		h2 {
			margin-bottom: 16px;
			color: var(--rf-color-header);
			font-size: 24px;
			font-weight: 600;
		}

		p {
			margin-top: 16px;
			line-height: 1.5;
		}
	}

</style>