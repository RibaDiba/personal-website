<script>
	import InfoSection from "$lib/components/InfoSection.svelte";
	import NameSection from "$lib/components/NameSection.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import { selection } from "$lib/stores/selection";
	import { fly, fade, crossfade } from "svelte/transition";
	import { cubicOut } from "svelte/easing";
	import { flip } from "svelte/animate";

	$: isProjects = $selection === "Projects";
	
	// Use crossfade for smoother transitions
	const [send, receive] = crossfade({
		duration: 400,
		easing: cubicOut
	});
</script>

<main class="text-primary min-h-screen">
	<!-- Preload Projects component invisibly -->
	<div class="fixed -top-full left-0 opacity-0 pointer-events-none">
		<Projects />
	</div>

	<!-- Responsive grid: 12 cols on lg, stack on small -->
	<div class="grid lg:grid-cols-12 justify-center items-center gap-4 px-4 min-h-screen">
		<!-- Left column -->
		<div class="lg:col-start-1 lg:col-span-5 flex justify-center items-center">
			<div class="w-full min-h-[200px] flex items-center justify-center">
				{#if isProjects}
					<!-- Show Name on the left when Projects is active -->
					<div 
						class="w-full text-center"
						in:receive={{ key: 'name' }}
						out:send={{ key: 'name' }}
					>
						<NameSection />
					</div>
				{:else}
					<!-- Show Info on the left when not viewing Projects -->
					<div 
						class="w-full text-center" 
						in:fly={{ x: -100, duration: 300, delay: 100, easing: cubicOut }} 
						out:fly={{ x: -100, duration: 200, easing: cubicOut }}
					>
						<InfoSection />
					</div>
				{/if}
			</div>
		</div>

		<!-- Right column -->
		<div class="lg:col-start-6 lg:col-span-7 flex justify-center items-center">
			<div class="w-full min-h-[200px] flex items-center justify-center">
				{#if isProjects}
					<!-- Show Projects on the right when active -->
					<div 
						class="w-full" 
						in:fly={{ x: 100, duration: 300, delay: 150, easing: cubicOut }} 
						out:fly={{ x: 100, duration: 200, easing: cubicOut }}
					>
						<Projects />
					</div>
				{:else}
					<!-- Show Name on the right when not viewing Projects -->
					<div 
						class="w-full text-center"
						in:receive={{ key: 'name' }}
						out:send={{ key: 'name' }}
					>
						<NameSection />
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- figma tag-->
	<div class="absolute bottom-4 right-4 lg:right-[10px] lg:bottom-0 text-xs lg:text-sm text-right text-right text-white opacity-75">
		Designed with Figma :)
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
	}
</style>