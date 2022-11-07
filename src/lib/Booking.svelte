<script lang="ts">
	import CalendarInput from "./Booking/CalendarInput.svelte";

	let desktop = true;
</script>

<div class="booking-page">
	<div class="booking-bar mt-20 mx-16 mb-12">
		{#if desktop}
			<div
				class="desktop pt-8 px-4 pb-6 rounded-lg border-solid border-2 border-sky-500 mx-auto"
			>
				<div class="flex h-full justify-between items-center">
					<CalendarInput />
					<!-- <CalendarInput /> -->
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.booking-page {
		min-height: auto;
	}

	.booking-bar .desktop {
		max-width: 1200px;
		min-height: 6rem;
	}
</style>
