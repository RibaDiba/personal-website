<script>
	import InfoSection from "$lib/components/InfoSection.svelte";
	import Skills from "$lib/components/Skills.svelte";
	import NameSection from "$lib/components/NameSection.svelte";
	import { selection } from "$lib/stores/selection";
</script>

<main class="text-primary min-h-screen">
    <div class="flex flex-col lg:flex-row justify-center">
        <div class="w-full lg:w-2/5 text-center">
            <InfoSection />
        </div>
        <div class="w-full lg:w-3/5 text-center flex justify-center items-center">
            <NameSection />
        </div>
    </div>
</main>
