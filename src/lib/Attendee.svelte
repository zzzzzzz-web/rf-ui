<script lang="ts">
	import iconPortal from '../assets/icon-portal.svg'
	import iconArrow from '../assets/icon-arrow.svg'
	import iconAdd from '../assets/icon-add.svg'
	import iconComputer from '../assets/icon-computer.svg'

	function generateWorkflow() {
		return {
			title: 'Attendee Registration',
			text: 'Start by creating a general registration workflow'
		}
	}

	let workflows = [generateWorkflow()]

	function addWorkflow() {
		workflows = [...workflows, generateWorkflow()]
	}
</script>

<section class="module">
	<div class="module-header">
		<img src="{iconPortal}" alt="" />
		<h3>Attendee</h3>
	</div>

	<div class="step">
		<p class="step-title"><span>Step 1:</span> Base settings.</p>
		<div class="step-row step-row-single">
			<div class="step-row-item">
				<p class="step-row-title">General</p>
				<p class="step-row-text">Define Attendee types & attributes</p>
			</div>
			<div class="step-row-item">
				<p class="step-row-title">Title</p>
				<p class="step-row-text">Description that explains the value goes here. Description that explains the value goes here. </p>
			</div>
			<div class="step-row-item">
				<p class="step-row-title">Title</p>
				<p class="step-row-text">Description that explains the value goes here. Description that explains the value goes here. </p>
			</div>
		</div>
	</div>

	<div class="step">
		<p class="step-title"><span>Step 2:</span> Build registration workflows.</p>
		<div class="step-row">
			{#each workflows as wf, i (i)}
				<button class="step-row-block" type="button">
					<p class="step-row-title">
						<img src={iconArrow} alt="" />
						<span>{wf.title}</span>
					</p>
					<p class="step-row-text">{wf.text}</p>
				</button>
			{/each}
			<button on:click={addWorkflow} class="step-row-block center" type="button">
				<p class="step-row-title"><img src={iconAdd} alt="" /></p>
				<p class="step-row-text">Add Registration Workflow</p>
			</button>
		</div>
	</div>

	<div class="step">
		<p class="step-title"><span>Step 3:</span>  Design post-registration experiences.</p>
		<div class="step-row">
			<button class="step-row-block" type="button">
				<p class="step-row-title">
					<img src={iconComputer} alt="" />
					<span>Attendee Portal</span>
				</p>
				<p class="step-row-text">Manage the portal that attendees will see after they’ve register for your event.</p>
			</button>
		</div>
	</div>
</section>

<style lang="scss">
	@use '../styles/max';

	.step {
		margin: 24px 0;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.step-title {
		margin: 8px 0;
		color: var(--rf-color-header);
		font-size: 14px;

		& span {
			font-weight: 700;
		}
	}

	.step-row {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
	}

	.step-row-single {
		padding: 16px 24px;
		gap: 32px;
		border: var(--rf-border);
		border-radius: var(--rf-border-radius);
	}

	.step-row-item {
		flex: 0 1 220px;
		padding: 8px;
	}

	.step-row-block {
		flex: 0 1 341px;
		padding: 24px 32px;
		border: var(--rf-border);
		border-radius: var(--rf-border-radius);
		text-align: left;
		cursor: pointer;

		@media (max-width: 1000px) {
			flex-basis: calc(50% - 12px);
		}

		@media (max-width: max.$mobile) {
			flex: 1 1 auto;
		}
	}

	.step-row-title {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 4px;
		color: var(--rf-color-header);
		font-size: 13px;
		font-weight: 700;
	}

	.step-row-text {
		margin-top: 4px;
		font-size: 12px;
	}
	
	.step-row-block.center {
		text-align: center;

		& .step-row-title {
			justify-content: center;
		}
	}

</style>