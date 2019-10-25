Add a Countries image page
- The page will contain a input text, button “add image” and dropdown
with all the countries names (or keys)
- Adding image in as following the next steps:
- Selecting a country from the drop down list
- Inserting image url inside the input text
- clicking the add button will save the image in the application
state (redux store)

- When navigating to the country page -&gt; form countries table, the images
will be presented in the bottom of the country page
- Little help, Think about the following components:
- AddImagePage (ddl, input, button)
- CountryImage (image with size and some more design features)
- CountryImagesList (list of images)

You can hold the countries images data structure ( redux state ) as:
Images: { isr:[“url1”,”url2”], egy:[“url1”], usa:[“url1”]….. }