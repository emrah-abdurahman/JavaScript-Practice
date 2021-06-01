Link of practice source - https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started

I followed the following information from the above link to further practice AJAX:

Simple timed XHR example
Another simple example follows — here we are loading a text file via XHR, the structure of which is assumed to be like this:

TIME: 312.05
TIME: 312.07
TIME: 312.10
TIME: 312.12
TIME: 312.14
TIME: 312.15
Once the text file is loaded, we split() the items into an array at each newline character (\n — basically where each line break is in the text file), and then print the complete list of timestamps, and the last timestamp, onto the page.

This is repeated every 5 seconds, using a setInterval() call. The idea would be that a server-side script of some kind would continually update the text file with new timestamps, and our XHR code would be used to report the latest timestamp on the client-side.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>XHR log time</title>
    <style>

    </style>
  </head>
  <body>
    <p id="writeData" class="data">Off-Line</p>
    <p id="lastStamp">No Data yet</p>

    <script>

    const fullData = document.getElementById('writeData');
    const lastData = document.getElementById('lastStamp');

    function fetchData() {
      console.log('Fetching updated data.');
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "time-log.txt", true);
      xhr.onload = function() {
        updateDisplay(xhr.response);
      }
      xhr.send();
    }

    function updateDisplay(text) {
      fullData.textContent = text;

      let timeArray = text.split('\n');

      // included because some file systems always include a blank line at the end of text files.
      if(timeArray[timeArray.length-1] === '') {
        timeArray.pop();
      }

      lastData.textContent = timeArray[timeArray.length-1];
    }

    setInterval(fetchData, 5000);
    </script>
  </body>
</html>