# CardKit `./dist` directory

The files in here can be used in `<script>` tags in any HTML page. `React` and `ReactDOM` must be included in the page manually.

### Example

    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.min.js" integrity="sha512-ssNhh7jlzc+K93ckIlSXFHHz6fSFv0l619WOv8xbFNRbFOujbasb42LVMOggDrQR1ScJncoWb+KAJx1uF3ipjw==" crossorigin="anonymous"></script>
    <script type="text/javascript" src="/path/to/dist/cardkit.js"></script>
    <script type="text/javascript" src="/path/to/dist/dom.js"></script>

    <script type="text/javascript">
      // Your CardKit code here
      var cardkit = new CardKit();
      var renderer = new CardKitDOM(cardkit);

      // ...
    </script>