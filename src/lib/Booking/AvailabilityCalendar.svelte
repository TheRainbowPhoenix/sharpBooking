<script lang="ts">
	import spacetime from "spacetime";
	import { onMount } from "svelte";
	import { dateFormatter } from "../utils";

	let startMonth = 202201; // todo :actual date maybe ?
	let maxMonths = 3;

	$: months = Array.from(Array(startMonth + maxMonths).keys()).slice(
		startMonth
	);

	let daysDummy = Array.from(Array(7 * 5 + 1).keys()).slice(1);

	const weekDays = (now, start, lang = "fr-FR") => {
		// todays day of week
		const today = now;
		const todayDayNum = today.day();
		const todayDate = today.date();
		const diffDayWeek = todayDayNum - start;
		const formatter = dateFormatter(lang, { weekday: "short" });
		return Array.from({ length: 7 }, (_, index) => {
			const d = new Date(
				today.year(),
				today.month(),
				todayDate - diffDayWeek + index
			);
			// return d;
			return formatter(d);
		});
	};

	let daysNames = weekDays(spacetime.now(), 0);

	onMount(() => {
		console.log(daysNames);
	});
</script>

<section
	class="calendar relative -left-5 px-3 rounded-xl border border-solid border-slate-500 bg-white"
>
	<span aria-live="assertive" class="visual-helper"
		>Todo visual helper here</span
	>
	<!-- Controls : < and > -->
	<!-- Body -->
	<main class="calendar-body flex">
		{#each months as month}
			<section
				class="month m-1 p-1 flex-1 first:pl-0 first:ml-0 last:pr-0 last:mr-0"
			>
				<header class="text-center text-sm font-bold text-slate-700 pb-3">
					Month {month}
				</header>
				<div
					class="days-name border-b border-slate-200 border-solid grid grid-cols-7 gap-4"
				>
					{#each daysNames as dayName}
						<div aria-hidden="true" class="day-name text-center p-1 text-sm">
							{dayName}
						</div>
					{/each}
				</div>
				<div class="days-grid grid grid-cols-7 gap-2">
					{#each daysDummy as day}
						<div class="day-item m-0.5 relative">
							<button
								tabindex="-1"
								class="day-btn h-8 asbolute rounded-sm w-full text-sm font-bold text-center cursor-pointer hover:bg-sky-200"
							>
								<time
									datetime="2022-{month}-{day}"
									aria-label="Day, {day} {month}"
								>
									<span class="absolute top-0 left-0 w-full">{day}</span></time
								>
								<span
									class="day-price absolute bottom-1 text-center text-xs font-normal left-0 top-4 w-full"
								>
									50$
								</span>
							</button>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</main>
</section>

<style>
	.calendar {
		width: 200%;
	}
</style>
