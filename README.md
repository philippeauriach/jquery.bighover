# jquery bighover plugin

jQuery plugin for showing a bigger view of the hovered image. The image will be displayed beside the cursor. For now, the image is displayed to the bottom right of the cursor, but doesn't get out of the screen. The plugin is configurable with two options : width and height of the big size image.

## Implemented functionalities
- [x] possibility of specifying height and width of the zoomed image
- [x] zoomed image showed on the bottom-right side of the cursor
- [x] option to choose where the zoomed image is displayed (left, top, right, bottom of the cursor)
- [x] create the doc, with example

## TO-DO
- [ ] automate zoomed image size
- [ ] prevent image for going offscreen

## How to use it
In order to make an image “bighoverable”, just add the source of the plugin, link it in your page's header, and then add this little line of code:
```javascript
$('#myImageID').bighover();
```
If you want to specify more options, just do like the following (for now you can only pass width and height values, default to 300):
```javascript
$('#myImageID').bighover({"width":"200", "height":"200"});
```

You can also specify the position, possible values are: top, top-left, left, bottom-left, bottom, bottom-right, right, right-top. Default to bottom-right.
Example:
```javascript
$('#myImageID').bighover({"position":"top"});
```