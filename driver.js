import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const driverObj = driver({
  overlayColor: 'blue',
  overlayOpacity: 0.25,
  showProgress: true,
  steps: [
    {
      element: '#my-name',
      popover: {
        title: 'Welcome!!',
        description:
          "<img src='https://i.gifer.com/JUl.gif' style='height: 202.5px; width: 250px;' /> Thank you for opting for the walkthrough version of my resume!",
        side: 'left',
        align: 'start',
      },
    },
    {
      element: '.career-title',
      popover: {
        title:
          '<span style="display: block; text-align: center">Fullstack or Fullsnack?!</span>',
        description:
          "<img src='https://i.imgur.com/EAQhHu5.gif' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: left;'>Titles serve to pigeon hole you, you've got a tech problem? I am the tech solution, 2 + 2 = 4 and the sun rises in the east and sets in the west. These are all factually correct.</span>",
        side: 'right',
      },
    },
    {
      element: '#linkedin-link',
      popover: {
        title: '',
        description: 'Social Media for Pros 🤝🏽',
      },
    },
    {
      element: '#summary',
      popover: {
        title: 'Elevator Pitch',
        description:
          "<img src='https://i.gifer.com/5Dam.gif' style='height: 215px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: left;'><span style='font-size: 15px; display: block; margin-top: 10px; text-align: left;'>This is the beginning of begging. Do you like it?!</span>",
      },
    },
  ],
});

document.addEventListener('DOMContentLoaded', () => {
  driverObj.drive();
});

//https://i.imgur.com/EAQhHu5.gif -- spongebob
//https://i.imgur.com/zed-H9qIiSm.gif
