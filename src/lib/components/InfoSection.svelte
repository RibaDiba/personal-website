<script>
    import { selection } from "$lib/stores/selection";
	import AboutMe from "./AboutMe.svelte";
	import Skills from "./Skills.svelte";
    import image from "/src/lib/assets/Profile_Pic.png?url"
	import Projects from "./Projects.svelte";
</script>

<main class="flex flex-col pt-10 lg:pt-20 justify-center items-center px-4 lg:px-10">

    <!-- profile picture -->
    <div class="flex justify-center items-center relative mb-8 lg:mb-12 mt-15 md:mt-0">
        <div class="z-0 absolute bg-base-300 rounded-full w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] left-[100px] lg:left-[150px] top-[-15px] lg:top-[-20px]"></div>
        <div class="rounded-full w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] bg-[#D9D9D9] relative p-3">
            <img src={image} alt="" class="w-full h-full object-cover rounded-full">
        </div>
    </div> 

    <!-- toggle section -->
    {#if $selection == "AboutMe"} 
        <div class="mt-15 md:mt-0">
            <AboutMe />
        </div>
    {:else if $selection == "Skills" }
        <Skills />
    {:else if $selection == "Projects"} 
        <Projects />
    {/if}
</main>
