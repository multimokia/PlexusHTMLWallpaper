# nodes.js
An *attempted* lighter version of the version over at this [project page](https://oguzhaneroglu.com/projects/nodes.js/).
All rights reserved, please see the original repository for the original source code.

nodes.js is a nodes/particles animation useable for backgrounds

### Init

```html
<!-- <nodes.js embedding> -->
<script type="text/javascript" src="js/nodes.js"></script>
<script type="text/javascript">
    //NOTE: I need to update this
    var nodesjs = new NodesJs({
        id: 'nodes',
        width: window.innerWidth,
        height: window.innerHeight,
        particleSize: 2,
        lineSize: 1,
        particleColor: [255, 255, 255, 0.3],
        lineColor: [255, 255, 255],
        backgroundFrom: [10, 25, 100],
        backgroundTo: [25, 50, 150],
        backgroundDuration: 4000,
        nobg: false,
        number: window.hasOwnProperty('orientation') ? 30: 100,
        speed: 20,
        pointerCircleRadius: 150
    });
</script>
<canvas id="nodes"></canvas>
<!-- </nodes.js embedding> -->
```

## License
MIT
