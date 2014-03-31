
# Submit select

This function will allow you to nominate a specific submit button, if for any reason you have more than one on a single page, which will be used when the return key is pressed.

### Usage

Call the function on any page that requires it. The function looks for the following data attributes, *data-submit-with*
and *data-btn* which should be added to the html for the text and submit type input to 'couple' them.

#### Example

    <input type="text" name id="input-search" data-submit-with="submit-search">
    <input type="submit" value="Search" data-btn="submit-search">

