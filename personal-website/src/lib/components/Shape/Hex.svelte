<script>
  export let image;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="150"
  height="150"
  viewBox="0 0 100 100"
>
  <!-- hexagon polygon -->
  <polygon
    points="50,0 93,25 93,75 50,100 7,75 7,25"
    class="fill-base-300"
  />

  <!-- this is the skill inside the poly-->
  <image
    href={image}
    width="48"
    height="48"
    x="26"  
    y="26"
  />
</svg>
