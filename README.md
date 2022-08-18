# \<button-group>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i button-group
```

## Usage

```html
<script type="module">
  import 'button-group/button-group.js';
</script>

<button-group >
  <button > Sample Text </button>
  <button  class="succes "> Sample Text </button>
  <button class="error "> Sample Text </button>
  <button class="progress "> Sample Text </button> //custom state classes 
  <button disabled "> Sample Text </button>
</button-group>

<button-group direction="vertical" size="small"> //Props for vertical rendering, smaller size 
  <button> sample text</button>
</button-group>
```



## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
