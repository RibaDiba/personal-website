<script lang="ts">
	import type { Project } from '$lib/interfaces/projects';
	import { projects } from '$lib/interfaces/projects';

	let currIndex = 0;
	let ddOpen = false; // dropdown open state
	let showModal = false;

	function handleCurrIndex(newIndex: number) {
		const last = projects.length - 1;
		if (newIndex < 0) currIndex = last;
		else if (newIndex > last) currIndex = 0;
		else currIndex = newIndex;
	}

	$: current = projects[currIndex];
	$: rawVideoUrl = current?.media?.video ?? '';
	$: videoUrl = typeof rawVideoUrl === 'string' ? rawVideoUrl.trim() : '';

	function toYouTubeEmbed(url: string): string {
		try {
			const u = new URL(url);
			const host = u.hostname.replace(/^www\./, '');

			// youtu.be/<id>
			if (host === 'youtu.be') {
				const id = u.pathname.replace(/^\//, '');
				if (id) return `https://www.youtube.com/embed/${id}`;
			}
			// youtube.com/watch?v=<id>
			if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
				if (u.pathname === '/watch') {
					const id = u.searchParams.get('v');
					if (id) return `https://www.youtube.com/embed/${id}`;
				}
				// already an embed path
				if (u.pathname.startsWith('/embed/')) {
					return `https://${
						host === 'youtube-nocookie.com' ? 'www.youtube-nocookie.com' : 'www.youtube.com'
					}${u.pathname}`;
				}
			}
		} catch (_) {
			// fall through to return original
		}
		return url; // non-YouTube or unparseable -> return as-is
	}

	// Build the final iframe src. For YouTube, normalize and add defaults.
	$: computedSrc = videoUrl
		? (() => {
				const base = toYouTubeEmbed(videoUrl);
				const isYt =
					base.includes('youtube.com/embed/') || base.includes('youtube-nocookie.com/embed/');
				const sep = base.includes('?') ? '&' : '?';
				return isYt
					? `${base}${sep}rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en&playsinline=1`
					: base;
		  })()
		: '';

	// image url for screenshot section
	$: imageUrl = current?.media?.image ? String(current.media.image).trim() : '';

	let displayedDesc: string[] = [];
	let descInterval: any;

	function typeDescription(index: number) {
		const targetDesc = projects[index].desc;
		let currentDesc = '';
		let paragraphIndex = 0;
		let charIndex = 0;

		if (descInterval) {
			clearInterval(descInterval);
		}

		displayedDesc = [];

		descInterval = setInterval(() => {
			if (paragraphIndex < targetDesc.length) {
				const currentParagraph = targetDesc[paragraphIndex];
				if (charIndex < currentParagraph.length) {
					currentDesc += currentParagraph.charAt(charIndex);
					displayedDesc[paragraphIndex] = currentDesc;
					charIndex++;
				} else {
					paragraphIndex++;
					charIndex = 0;
					currentDesc = '';
				}
			} else {
				clearInterval(descInterval);
			}
		}, 0.01);
	}

	$: {
		// This block will run whenever currIndex changes
		if (typeof window !== 'undefined') {
			typeDescription(currIndex);
		}
	}
</script>

<main
	class="w-full h-[700px] bg-gradient-to-b from-[#4B4843] to-[#3b3834] rounded-3xl shadow-xl p-5 pb-10 lg:p-6 text-white overflow-hidden"
>
	<!-- Top bar -->
	<div class="flex items-center justify-between mb-4">
		<button
			class="btn bg-white/10 border-white/15 text-[#FFEAD1] hover:bg-white/20"
			on:click={() => handleCurrIndex(currIndex - 1)}>&lt;</button
		>

		<details class="dropdown" bind:open={ddOpen}>
			<summary class="btn bg-white/10 border-white/15 text-white hover:bg-white/20 gap-2">
				<span class="text-sm lg:text-base font-semibold truncate text-[#FFEAD1]"
					>{projects[currIndex].name}</span
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-4 h-4 opacity-80"
					><path
						fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
						clip-rule="evenodd"
					/></svg
				>
			</summary>
			<ul
				class="menu dropdown-content bg-base-100 text-base-content rounded-box z-[1] w-80 p-2 shadow border border-base-300"
			>
				{#each projects as proj, index}
					<li class="text-[#FFEAD1] border-[#FFEAD1]">
						<a
							role="option"
							aria-selected={currIndex === index}
							on:click={() => {
								handleCurrIndex(index);
								ddOpen = false;
							}}
						>
							{proj.name}
						</a>
					</li>
				{/each}
			</ul>
		</details>

		<button
			class="btn bg-white/10 border-white/15 text-[#FFEAD1] hover:bg-white/20"
			on:click={() => handleCurrIndex(currIndex + 1)}>&gt;</button
		>
	</div>

	<!-- Content area -->
	<div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 h-[calc(100%-56px)] pb-5">
		<!-- Video Demo -->
		<div class="lg:col-span-3">
			<div
				class="h-1/2 min-h-[220px] rounded-2xl bg-base-200/40 border border-white/10 shadow-inner flex items-center justify-center p-3 transition-transform hover:scale-105"
			>
				{#if computedSrc}
					<div
						class="relative w-full max-w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black"
					>
						<div
							class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
						></div>
						<iframe
							class="relative w-full aspect-video block"
							src={computedSrc}
							title={`${current.name} video`}
							frameborder="0"
							loading="lazy"
							referrerpolicy="strict-origin-when-cross-origin"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				{:else}
					<span class="text-white/60 text-sm">No video available for this project.</span>
				{/if}
			</div>

			<!-- Screenshot Media -->
			<div class="mt-5 rounded-2xl bg-base-200/40 border border-white/10 shadow-inner p-3 transition-transform hover:scale-105">
				{#if imageUrl}
					<div class="relative w-full flex items-center justify-center">
						<div class="w-full max-w-[720px] flex justify-center">
							<img
								on:click={() => (showModal = true)}
								src={imageUrl}
								alt={`${current.name} screenshot`}
								loading="lazy"
								decoding="async"
								class="block w-auto h-auto object-contain rounded-xl shadow-md max-w-full 
                                       max-h-[360px] md:max-h-[250px]"
								style="image-rendering:auto;"
							/>
						</div>
					</div>
				{:else}
					<div
						class="h-[220px] rounded-xl bg-base-300/30 border border-white/10 flex items-center justify-center"
					>
						<span class="text-white/60 text-sm">No image available for this project.</span>
					</div>
				{/if}
			</div>
		</div>

		<!-- Details -->
		<div class="lg:col-span-2 flex flex-col overflow-scroll">
			<div
				class="rounded-2xl bg-base-200/40 border border-white/10 p-4 lg:p-5 shadow-md flex-1"
			>
				<div class="text-lg font-semibold mb-2 text-[#FFEAD1]">About this project</div>
				<div class="text-sm text-white/80 leading-relaxed flex gap-2.5 flex-col">
					{#each displayedDesc as desc}
						<div>{desc}</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>

<!-- Modal -->
{#if showModal}
<dialog class="modal modal-open">
  <div class="modal-box">
    <img src={imageUrl} alt={`${current.name} screenshot`} class="w-full h-auto rounded-lg mt-10">
    <div class="modal-action">
        <button class="btn btn-sm btn-circle btn-primary btn-ghost text-2xl mt-3 mr-2 absolute right-2 top-2" on:click={() => {
            showModal = !showModal
        }}>✕</button>
    </div>
  </div>
</dialog>
{/if}

<!-- tag strip -->
<div class="h-[80px] rounded-b-3xl -mt-5 bg-[#423F3B]">
	<div class="flex ml-5 justify-between">
		<div class="flex">
			{#each projects[currIndex].tags as tag}
				<div
					class="py-2 px-3 text-sm rounded-full bg-[#FFEAD1] mr-2 text-black mt-5 transition-all hover:mx-2 hover:px-4"
				>
					{tag}
				</div>
			{/each}
		</div>

		<a
			href={projects[currIndex].github}
			class="py-2 px-3 text-sm rounded-full bg-[#D6D3D1] mr-5 text-black mt-5"
			>&lt;Code &#47;&gt;</a
		>
	</div>
</div>
