const helpers = require('../../helpers');

/**
 * @name SVGToImage
 * @class Used for downloading an SVG DOM element in your browser
 */
class SVGToImage {

  /**
   * Constructor takes in the element for later use
   *
   * @param {object} element - The SVG element to convert to an image
   */
  constructor (element) {
    // Ensure we got an element
    if (typeof element === 'undefined') {
      throw new Error('No element provided');
    }

    // Validate that the provided element is an HTML element
    if (!this._isValidElement(element)) {
      throw new Error('Provided element is not a valid element');
    }

    // Check the provided element is an SVG element
    if (element.tagName.toLowerCase() !== 'svg') {
      throw new Error('Invalid element provided');
    }

    // Store the element
    this.element = element;
  }

  /**
   * Validates the provided element is an HTMLElement
   * Source: http://stackoverflow.com/a/384380/3886818
   *
   * @param {mixed} element - The element to validate
   *
   * @return {boolean} True if the provided element is valid
   */
  _isValidElement (element) {
    return (typeof element !== 'undefined') &&
           (element !== null) &&
           (typeof element === 'object') &&
           (element.nodeType === 1) &&
           (typeof element.nodeName === 'string');
  }

  /**
   * Downloads the SVG as an image
   *
   * @param {string} name - The name to download the image with
   * @param {object} options - The configurable options
   */
  download (name, options = {}) {
    // Setup default options
    options.format = options.format || 'image/jpeg';

    // Convert it to a data URI
    this._toDataURI(options, (uri) => {
      // We have our data URI

      // Create an image
      const image = new window.Image();
      image.src = uri;

      // Confiugre the image onload callback
      image.onload = function () {
        // Create a canvas element sized to fit the image
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        // Get the canvas context and draw the image onto it
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

        // Create a link to dynamically click and trigger the download
        const a = document.createElement('a');
        a.download = name;
        a.href = canvas.toDataURL(options.format || 'image/jpeg');
        document.body.appendChild(a);

        // I'm aware that `a.click()` below may not work reliably on all browsers. This is something to explore at a later date.

        // Click and download
        a.click();
      }
    });
  }

  /**
   * Verifies if the supplied URL is external or local
   *
   * @param {string} url - The URL to check
   *
   * @return {boolean} True if the supplied URL is external
   */
  _isExternal (url) {
    return (url) && // We have a URL
           (url.lastIndexOf('http', 0) === 0) && // It starts with http
           (url.lastIndexOf(window.location.host) === -1); // It doesn't contain the current hostname
  }

  /**
   * Inlines all images
   *
   * @param {function} callback - The callback to run after images have been loaded and inlined
   */
  _inlineImages (callback) {
    // Get any images
    const images = this.element.querySelectorAll('image');

    // If there are no images, immediately call the callback
    if (images.length === 0) {
      callback();
      return;
    }

    const promises = [];

    // Iterate over the images
    images.forEach((image) => {
      // Get the href for the image
      const href = image.getAttribute('xlink:href') || image.getAttribute('href');

      // If no href for this image, skip this image
      if (href === null) return;

      // If we had a href, check if it's external
      if (href && this._isExternal(href)) {
        throw new Error('Cannot render embedded images linking to external hosts: ' + href);
      }

      // Create a canvas and image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new window.Image();

      // Create a promise and push it to the promises array
      promises.push(new Promise((resolve, reject) => {
        // Set the image source
        img.src = href;

        // Image load callback
        img.onload = function () {
          // Set the canvases size
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw it onto the canvas
          ctx.drawImage(img, 0, 0);

          // Update the href attribute of the image element
          image.setAttribute('xlink:href', canvas.toDataURL('image/png'));
          image.setAttribute('href', canvas.toDataURL('image/png'));

          // Resolve the promise
          resolve();
        }

        // Image error callback
        img.onerror = function () {
          // Image couldn't be loaded, reject the promise
          reject('Could not load image: ' + href);
        }
      }));
    });

    // Wait for promises to resolve and call the callback
    Promise.all(promises)
           .then(callback)
           .catch(e => { throw new Error(e) });
  }

  /**
   * Converts the element to a data URI
   *
   * @param {object} options - Configuration options
   * @param {function} callback - The callback to run after the element has been converted
   */
  _toDataURI (options = {}, callback) {
    // Setup default options
    options.scale = options.scale || 1;

    // Setup some SVG data
    const xmlns = 'http://www.w3.org/2000/xmlns/';

    // Inline images first
    this._inlineImages(() => {
      // Setup a container <div>
      const outer = document.createElement('div');

      // Clone the element
      const clone = this.element.cloneNode(true);

      // Setup some vars
      let width,
        height,
        svg;

      // If the element is an SVG we work out the size of the SVG using a variety of methods,
      //  depending on how the user has defined the size of their SVG
      if (this.element.tagName !== 'svg') {
        throw new Error('Invalid element provided, must be SVG');
      }

      // Get the width and height
      width = parseInt(this.element.viewBox.baseVal.width || clone.getAttribute('data-width') || clone.style.width);
      height = parseInt(this.element.viewBox.baseVal.height || clone.getAttribute('data-height') || clone.style.height);

      // Configure the clone's wrapper attributes
      clone.setAttribute('version', '1.1');
      clone.setAttributeNS(xmlns, 'xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttributeNS(xmlns, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
      clone.setAttribute('width', width * options.scale);
      clone.setAttribute('height', height * options.scale);
      clone.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
      outer.appendChild(clone);

      // Setup the SVG by adding the XML doctype
      const doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

      // Combine the doctype and the innerHTML of the cloned SVG to get the final product
      svg = doctype + outer.innerHTML;

      // Create the URI
      const uri = 'data:image/svg+xml;base64,' + helpers.svgToBase64(svg, window.btoa);

      // Run the callback
      callback(uri);
    });
  }

}

module.exports = SVGToImage;
