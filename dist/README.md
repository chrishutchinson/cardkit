# CardKit `./dist` directory

The files in here can be used in `<script>` tags in any HTML page. `React` and `ReactDOM` must be included in the page manually.

### Example

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min.js"></script>
    <script type="text/javascript" src="/path/to/dist/cardkit.js"></script>
    <script type="text/javascript" src="/path/to/dist/dom.js"></script>

    <script type="text/javascript">
      // Your CardKit code here
      var cardkit = new CardKit();
      var renderer = new CardKitDOM(cardkit);

      // ...
    </script>