[![homepage](https://github.com/Baldpet/visit-corfu/blob/master/assets/images/visit-corfu-logo.png)](https://baldpet.github.io/visit-corfu/)

# __LW2 Talents and Memory Game__

## __Aim of the Site__

The basic aim of the site was to offer players (new or old) to be able to plan their soldier builds for their playthrough of Xcom 2: Long War 2.
I wanted to build a site that had the information all in one place to cover all the questions that they might have had.

Additionally if players wanted a change of pace they could play on the themed memory game.

Please click the following link to the live website: https://baldpet.github.io/LW2-Class-Calculator/
## __UX__

### __Client Stories__

There were a number of stories that the site was aimed at fulfilling, they are listed below:

* "I am a beginner to Long War 2 and want learn about the classes"
* "I am a beginner and need help getting started on a good soldier build"
* "I am a beginner/intermediate player that is looking to build classes with some expert advice readily available on the same website"
* "I am an intermediate/expert player who would like to plan some new soldier builds"
* "I am looking for a themed Xcom game to pass the time"
* "I want to play Xcom but I am away from the computer, let's play the next best thing a themed mobile friendly game"

### __Wireframes__

To begin the planning of how the site would look I put together a series of wireframes inlcuded below.  

During the design process a decision was made to keep the class information on one page and use javascript to relay the specific information that the user wanted quickly and easily.

Regarding the memory game the challenge was how to include the number of cards required on the smaller screen of the mobile view. On this I decided to switch from 4 cards accross the screen to 2 cards.

#### Desktop Wireframes
![Index Page-Desktop](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/index-desktop.png)

![Easter Page-Desktop](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/easter-desktop.png)

![Places Page-Desktop](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/places-desktop.png)

![Summer Page-Desktop](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/summer-desktop.png)

![Contact Page-Desktop](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/contact-desktop.png)

#### Mobile Wireframes
![Index Page - Mobile](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/index-mobile.png)

![Easter Page - Mobile](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/easter-mobile.png)

![Places Page - Mobile](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/places-mobile.png)

![Summer Page - Mobile](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/summer-mobile.png)

![Contact Page - Mobile](https://github.com/Baldpet/visit-corfu/blob/master/assets/wireframes/contact-mobile.png)

## __Features__

* Feature 1 - 

* Feature 2 - 

* Feature 3 - 

* Feature 4 - 

* Feature 5 - 

* Feature 6 - 

* Feature 7 - 

* Feature 8 - 


## __Future Goals__




## __Technology Used__

I have listed the following languages and technology used to produce this project below:

* Markdown
    * For the ReadMe file.
* HTML 5
    * For the base information and structure of the webpages.
* CSS 3
    * For the styling and beauty of the webpages.
* Javascript
    * For reducing the information clutter on the talents page and for all the fuctionality within the memory game.
* Jquery
    * For easier targetting and functionality within Javascript.
* Bootstrap 4
    * Was used as a base for the structure using the grid system.

## __Testing__

Testing was conducted throughout the project, each new feature that was added was checked and tested through using the browser and via the console log if necessary.

### Validation

The HTML code for each page has been validated on the W3C HTML Validation tool, with no issues.

The CCS code has been validated on the W3C CSS Validation tool, there is an error with the color for the Instagram logo.  
I have noted this is causing an issue on the Internet Explorer browser which has been detailed in the known issues section. Unfortunately I was not able to work around this issue.

### Screen Sizes

There was testing throughout the project to make sure that the project looks good and works on multiple screen sizes and devices.  
This was done through the Chrome developer tools by reducing the width of the screen and also utilising their mobile device view.

During this testing there were a few challenges to responsiveness which have required some media query CSS to resolve.  
Mainly this was on the talents page which the wordins were stretching out of their relevant spaces.

### Site Links

I have fully tested all the links on the site to make sure that they go through to the correct page.  
I have also made sure that any which are linked to outside sites open in a new window.  

### Memory Game

The memory game has had extensive testing with family and friends on a number of devices.

There were a couple of areas of concern which were addressed:

* Firstly on the original iteration of the game on the mobile screen the soldiers/aliens were too small to make out key differences between them.
To fix this it was decided that we change the height from trying to fit all the cards onto the screen to unfortunately having some scrolling required.
This was deemed to be a better fix for the user as otherwise they would not have been able to see the characters to play properly.

* Secondly there was a bug detected where a third card was able to be selected before the Javascript matching logic had taken place.
This was due to a missing line of code in the unflip function to state that the card was busy and unable to be flipped. Since the fixed code this part of the game has run flawlessly on further testing.

### Deployment Test

The website was tested on deployment through the GitHub Pages no bugs or problems were detected.  

### Multiple Browsers

I have undertaken some tests on other popular browsers to see if there are any bugs that I have picked up.  
The website has loaded on all browsers and devices tested which are shown:  

    * Interenet Explorer  
    * Microsoft Edge
    * Firefox
    * Chrome
    * Mobile (Android)

The bugs that were encountered have been noted below in the Known Issues section.

### Feedback

Friends and family provided useful feedback which has allowed me to adjust and add to the features.

* One issue that arose was from family who had never played Xcom 2 and therefore were unsure how the levelling of characters happened and the options you have.
    * I added in some more information in the introduction section so that it was more user friendly to beginners.
* There were some additional features added to the memory game on feedback:
    * The introduction information was made more obvious for the rules of the game.
    * Different win/lose overlays were made to accomodate the fact that you cannot reduce the stars below 1 star or increase the stars above 4 stars.
    * Added in a counter for the number of times that you have won a game at a certain difficulty which is included in the winning annoucement.

## __Known Issues & Resolutions__

* Internet Explorer 11
    * 
* Microsoft Edge
    * 
* Firefox
    * No issues detected
* Chrome
    * No issues detected
* Mobile (Android)
    * No issues detected    

## __Deployment__

There were a number of steps taken to deploy the website onto GitHub Pages.

1. The code was written on an online IDE - Gitpod, the major changes were written via branches.
2. The branches were then merged together with the master.
2. The code was then pushed to GitHub where it is stored on a public repository.
3. Under the settings section of the GitHub repository there is a sub-heading of GitHub Pages.
4. In this section the master brach of the project has been selected.
5. Then the publish to GitHub Pages button was pressed to publish the site onto Github Pages.

There is no difference between the deployed version and the development version.

The code can be run locally through clone or download.  
By opening the repository and and being in the main 'code' section there is a button 'clone or download'.  
This button will provide a link that you can use on your desktop or download as a ZIP file.

## __Credits__

There were a number of sources used throughout the project which I would like to credit:

* Twitch streamer and Youtuber Jorbs/Joinrbs courteously allowed me to link up to his videos which covered a similar ground to the site and really gave some nice touch to the first page.

* I used some code from codepen.io (Dan Mensinger) for the shimmer effects on the class selector buttons. 
These were adapted to the effect needed for this site.

* Pictures were sourced through various places:
    * The talent icons:
        * https://www.ufopaedia.org/index.php/Long_War_2
    * The soldier and alien images:
        * https://favpng.com/
        * Xcom 2 Propaganda Center
    * Background picture:
        * https://pixabay.com/
    

## __Acknoledgements__

Again I would like to acknoledge Jorbs for allowing me to use his content.

I would also like to acknoledge my mentor Anthony Ngene who has helped me out on some key points for where the project should be heading. 

Lastly I would like to acknoledge my fiancee, family and friends who have helped with the structure and the testing.

## __Disclaimer__

This project has been made solely for educational purposes and is not for commercial use.