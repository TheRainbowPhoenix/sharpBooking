<script lang="ts">
	import AvailabilityCalendar from "./AvailabilityCalendar.svelte";

	export let desktop = true;
	export let prefix = "" + new Date().getTime();
</script>

<div class="px-2 mt-1.5 relative w-100 md:w-1/3 lg:w-5/12">
	<div class="relative text-base">
		<span id="desc-{prefix}" class="visual-helper">TODO</span>
		<label
			id="lbl-{prefix}"
			for="btn-{prefix}"
			class="absolute text-sm -top-2.5 left-1.5 px-1 text-slate-600 bg-white"
		>
			<span aria-hidden="true">Select Dates</span>
			<span class="visual-helper">Select your booking dates.</span></label
		>
		<button
			id="btn-{prefix}"
			aria-describedby="desc-{prefix}"
			aria-labelledby="lbl-{prefix}"
			aria-expanded="false"
			aria-controls="body-{prefix}"
			class="dropdown h-11 text-left w-full py-0 pr-3 pl-2 grow border-solid border text-slate-600 border-slate-300 rounded-md focus:outline-slate-500 focus:outline focus:outline-2 -outline-offset-2"
		>
			<span class="e-icon mr-1.5 relative inline-block align-middle w-6 h-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
					aria-hidden="true"
					preserveAspectRatio="xMidYMid meet"
					class="w-6 h-6"
					viewBox="0 0 16 16"
					><path
						fill="currentColor"
						d="M5.248 8.997a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497Zm.749 1.752a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0ZM8 8.996A.748.748 0 1 0 8 7.5a.748.748 0 0 0 0 1.497Zm.749 1.752a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0Zm2-1.752a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497ZM14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7ZM3 6h10v5.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5V6Zm1.5-3h7A1.5 1.5 0 0 1 13 4.5V5H3v-.5A1.5 1.5 0 0 1 4.5 3Z"
					/></svg
				>
			</span>
			Fri, 11 Nov
			<span>→</span>
			Sat, 12 Nov
		</button>
		<div>
			<div tabindex="0" />
			<div tabindex="1" />
			<div>
				<section
					id="body-{prefix}"
					role="region"
					aria-labelledby="btn-{prefix}"
					class="qs-body absolute top-5 mt-9 min-w-full z-40"
				>
					<AvailabilityCalendar />
				</section>
			</div>
		</div>
	</div>
</div>

<style>
	.qs-body::before,
	.qs-body::after {
		content: " ";
		width: 0px;
		height: 0px;
		position: absolute;
		pointer-events: none;
		border-color: transparent transparent rgb(255, 255, 255);
		border-style: solid;
		border-width: 0px 8px 12px;
	}

	.qs-body::before {
		top: -10px;
		right: 50%;
		z-index: 600;
		border-bottom-color: white;
	}

	.qs-body::after {
		top: -12px;
		right: 50%;
		z-index: 1;
		border-bottom-color: rgba(180, 180, 180);
	}

	button.dropdown {
		height: 44px;
	}
</style>
