<script>
  import { fly } from "svelte/transition";
  let animate = false;
  onMount(() => {
    animate = true;
  });

  import Hex from "./Shape/Hex.svelte";
  import cplusplus from "../assets/logos_skills/c++.png"
  import javascript from "../assets/logos_skills/javascript.png"
  import python from "../assets/logos_skills/python.png"
  import java from "../assets/logos_skills/java.png"

  import react from "../assets/logos_skills/react.png"
  import svelte from "../assets/logos_skills/svelte.png"
  import next from "../assets/logos_skills/next.svg"

  import arduino from "../assets/logos_skills/arduino.svg"
	import { onMount } from "svelte";

  let rows = [
    [svelte, react, next],
    [javascript, cplusplus, python, java],
    [arduino]
  ]

</script>


<main class="mt-20 flex flex-col items-center gap-[50px]" >

  {#each rows as row, index}
    {#if animate} 
      <div 
      class="flex space-x-2 ml-[50px] -mt-[65px]" 
      in:fly={{y:300, duration: 600, delay: index * 100}}
      >
        {#each row as elem} 
          <div class="hover:m-4 transition-all duration-300">
            <Hex image={elem} />
          </div>
        {/each}
      </div>
    {/if}
  {/each}
</main>

