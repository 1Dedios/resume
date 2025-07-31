import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import './driver.css';

/* TODO: make popovers dark like resume background and text color green */

export const driverObj = driver({
  overlayColor: '#eefce4',
  overlayOpacity: 0.75,
  showButtons: ['next', 'previous'],
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
          "<img src='https://i.gifer.com/5Dam.gif' style='height: 215px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: left;'><span style='font-size: 15px; display: block; margin-top: 10px; text-align: left;'>This is the beginning of begging. Do you like it?! 😂 What do I mean by technologically agnostic? I am not a 'Java' Developer or a 'JavaScript' developer. I am an Engineer. That means I can solve problems with code regardless of the technological language that was chosen for the project.</span>",
      },
    },
    {
      element: '#skills',
      popover: {
        title: 'The Bread & Butter',
        description:
          "<img src='https://i.gifer.com/3b4.gif' style='height: 215px; width: 300px;' />If it's listed here, I either have a project linked to that skill or am working on a project utilizing that skill. I really do enjoy learning 🤓.",
      },
    },
  ],
});

const walkthroughButton = document.getElementById('guidedWalkthroughButton');
walkthroughButton.addEventListener('click', () => {
  driverObj.drive();
});

//https://i.imgur.com/EAQhHu5.gif -- spongebob
//https://i.imgur.com/zed-H9qIiSm.gif
