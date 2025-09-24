<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
    let animated = false;

    onMount(() => {
        animated = true;
    })

    let settings = {
        y: 400, 
        duration: 600,
        delay: 100
    };

</script>
<main>
    <div class="text-lg lg:text-2xl mx-4 lg:mx-10 text-white mt-8 lg:mt-10 text-center max-w-2xl leading-relaxed items-center flex flex-col">

        {#if animated}
            <div class="text-lg lg:text-2xl text-white mx-4 lg:mx-10 text-center max-w-2xl" 
            in:fly={{y: settings.y, duration: settings.duration, delay: settings.delay}}
            >
                Hey! I'm Abir Modak, I'm a 
                <span class="font-bold text-primary">computer science major</span> at 
                <span class="font-bold text-primary">Maryland, College Park</span>
            </div>

            <div class="w-full max-w-[400px] mx-4 lg:mx-10 bg-base-300 h-1 mt-8 lg:mt-10"
                in:fly={{y: settings.y, duration: settings.duration, delay: settings.delay + 100}}
            ></div>
            <div class="mt-8 mx-4"
                in:fly={{y: settings.y, duration: settings.duration, delay: settings.delay + 200}}
            >
                I have experience building websites with 
                <span class="font-bold text-primary">React</span> 
                and 
                <span class="font-bold text-primary">Svelte</span>. 
                I also work with open source DL frameworks such as 
                <span class="font-bold text-primary">Detectron2</span>.
                I also have some light
                <span class="font-bold text-primary">embedded systems</span>
                work on my 
                <span class="font-bold text-primary">
                    GitHub!
                </span>

                <div class="md:hidden block text-primary font-bold mt-4">To view my projects, view this website in desktop!</div>
            </div>
        {/if}

    </div>
</main>