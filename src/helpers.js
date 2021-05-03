module.exports = {
  /**
   * Converts the supplied string into a slug and returns it
   *
   * @param {string} string - The string to slugify
   * @return {string} The slugified string
   */
  slugify: (string) => {
    return string.toString()                // Convert to a string
                  .toLowerCase()            // Convert to lowercase
                  .replace(/\s+/g, '-')     // Replace spaces with -
                  .replace(/[^\w-]+/g, '')  // Remove all non-word chars
                  .replace(/--+/g, '-')     // Replace multiple - with single -
                  .replace(/^-+/, '')       // Trim - from start of text
                  .replace(/-+$/, '');      // Trim - from end of text
  },

  /**
   * Converts an SVG string into its base64 encoded equivalent
   *
   * @param {string} svg - The SVG to convert
   * @param {object} btoa - The btoa method to use (either pass in a node-compatible version, or window.btoa)
   *
   * @return {string} The SVG in base64
   */
  svgToBase64: (svg, btoa) => {
    return btoa(unescape(encodeURIComponent(svg)));
  },

  /**
   * Capitalises the first letter of a string
   *
   * @param {string} string - Capitalise the first string
   *
   * @return {string} The string with its first letter capitalised
   */
  capitaliseFirstLetter: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
