<script>
  import Hex from "./Shape/Hex.svelte";
  import cplusplus from "../assets/logos_skills/c++.png"
  import javascript from "../assets/logos_skills/javascript.png"
  import python from "../assets/logos_skills/python.png"
  import java from "../assets/logos_skills/java.png"

  import react from "../assets/logos_skills/react.png"
  import svelte from "../assets/logos_skills/svelte.png"
  import next from "../assets/logos_skills/next.svg"

  import arduino from "../assets/logos_skills/arduino.svg"

</script>

<main class="mt-5 flex flex-col items-center gap-[50px]">
  <!-- Row 1 -->
  <div class="flex space-x-2 ml-[50px]">
    <Hex image={svelte}/>
    <Hex image={react}/>
    <Hex image={next}/>
  </div>

  <!-- Row 2 -->
  <div class="flex space-x-2 -mt-[65px] ml-[50px]">
    <Hex image={javascript}/>
    <Hex image={cplusplus}/>
    <Hex image={python}/>
    <Hex image={java}/>
  </div>

  <!-- Row 3 -->
  <div class="flex space-x-2 -mt-[65px] ml-[50px]">
    <Hex image={arduino}/>
  </div>
</main>
