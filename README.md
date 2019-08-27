# metis
## A quick automated test for Parkside
## brief
Starting with Wikipedia's https://en.wikipedia.org/wiki/Metis_(mythology) page, please test for the following:<br>
<br>
a) the headings listed in the `Contents` box are used as headings on the page<br>
b) the headings listed in the `Contents` box have functioning hyperlinks<br>
c) in the _Personified concepts_, `Nike` has a popup that contains the following text:<br>
<i>In ancient Greek religion, Nike was a goddess who personified victory. Her Roman equivalent was Victoria.</i><br>
d) in the _Personified concepts_, if you click on `Nike`, it takes you to a page that displays a family tree<br>

## How to run it
  npm install -g protractor<br>
  webdriver-manager update<br>
  webdriver-manager start<br>
  <br>
  protractor conf.js<br>
