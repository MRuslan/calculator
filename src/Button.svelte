<script>
  export let value = 0;
  export let action;
</script>

<style>
  .key{
      width: 25%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      box-sizing: border-box;
      border: 1px solid #2d2d2f;
      background-color: #606061;
      text-transform: uppercase;
      cursor: pointer;
      margin: 0;
      color: #fff;
    }
    .key-color_grey {
      background-color: #414042;
    }
    .key-color_fox {
      background-color: #fe9f05;
    }
    .duble-key {
      width: 50%;
    }
    .key:last-child {
      border-radius: 0 0 10px 0;
    }
    .key:nth-child(17) {
      border-radius: 0 0 0 10px;
    }
</style>

<button
  class="key {isNaN(value) && (value != 'AC') && (value != '±') && (value != '%') ? 'key-color_fox' : ''} {(value) == 0 ? 'duble-key' : ''} {(value == 'AC') || (value == '±') || (value == '%') ? 'key-color_grey' : ''}"
  {value}
  on:click={e => action(e.target.value)}>
  {value}
</button>