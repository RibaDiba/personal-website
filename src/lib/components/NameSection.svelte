<script>
    import { selection } from "$lib/stores/selection";
    import { socials } from "$lib/stores/socials";
</script>

<main class="relative px-4">
    <div class="relative text-primary text-4xl sm:text-6xl lg:text-9xl grid place-items-center min-h-[100vh] text-center font-bold">
        <div class="flex flex-col gap-3 lg:gap-5">
            <!-- name -->
            <div class="leading-tight">
                Abir Modak
            </div>
            
            <!-- socials -->
            <div class="text-base sm:text-xl lg:text-2xl flex flex-wrap md:gap-2 gap-4 lg:gap-4 justify-center text-center text-white">
                {#each socials as social}
                    <a href={social.link}>
                        <img src={social.image} alt={social.name} class="w-[24px] md:w-[48px] h-auto">
                    </a>
                {/each}
            </div>
                
            <div class="hidden md:flex flex-wrap gap-1 lg:gap-2 text-center justify-center mt-1">
                <!-- buttons -->
                <button 
                    class={`text-base sm:text-xl lg:text-2xl btn btn-link px-2 lg:px-4 hover:scale-105 transition-all duration-200 ${
                        $selection ? "text-white" : "text-primary"
                    }`} 
                    onclick={() => {selection.set(false)}}
                >
                    About Me.
                </button>
                <button 
                    class={`text-base sm:text-xl lg:text-2xl btn btn-link px-2 lg:px-4 hover:scale-105 transition-all duration-200 ${
                        !$selection ? "text-white" : "text-primary"
                    }`} 
                    onclick={() => {selection.set(true)}}
                >
                    Skills.
                </button>
            </div>
        </div>
        <!-- figma tag-->
        <div class="absolute bottom-4 right-4 lg:right-[-100px] lg:bottom-0 text-xs lg:text-sm text-right text-white opacity-75">
            Designed with Figma :)
        </div>
    </div>    
</main>
