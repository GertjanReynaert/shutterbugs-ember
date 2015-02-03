import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',

  classNameBindings: [
    'rounded:img-rounded',
    'centered:center-block',
    'circle:img-circle',
    'thumbnail:img-thumbnail'
  ],

  attributeBindings: [
    'w:width',
    'h:height',
    'url:src',
    'alt'
  ],

  xsmall: 20,
  small: 64,
  medium: 150,
  large: 250,
  xlarge: 500,

  // kind
    //landscape
    //animals
    //plants
    //avatar
    //...

  // style
    // change ratio of width vs height
      // square
      // landscape
      // portrait

  w: function() {
    var width = this.get("width");

    if (width) {
      if (this.get(width)) {
        return this.get(width);
      } else {
        return width;
      }
    } else {
      return this.get("small");
    }
  }.property("width"),

  h: function() {
    var height = this.get("height");

    if (height) {
      if (this.get(height)) {
        return this.get(height);
      } else {
        return height;
      }
    } else {
      return this.get("small");
    }
  }.property("height"),

  alt: function() {
    return "" + this.get("w") + "x" + this.get("h");
  }.property("w", "h"),

  rounded: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("rounded") > -1;
  }.property('style'),

  centered: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("center") > -1;
  }.property('style'),

  circle: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("circle") > -1;
  }.property('style'),

  thumbnail: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("thumbnail") > -1;
  }.property('style'),

  url: function() {
    return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA0Njg3NSIgeT0iNzAiIHN0eWxlPSJmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MTBwdDtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj4xNDB4MTQwPC90ZXh0PjwvZz48L3N2Zz4=";
  }.property("kind")
});