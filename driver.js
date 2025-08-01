import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import './driver.css';

export const driverObj = driver({
  overlayColor: '#eefce4',
  overlayOpacity: 0.75,
  showButtons: ['next', 'previous'],
  steps: [
    {
      element: '#my-name',
      popover: {
        title:
          '<span style="display: block; text-align: center">Welcome!!</span>',
        description:
          "<img src='https://i.gifer.com/JUl.gif' style='height: 202.5px; width: 250px;' /> Thank you for opting for the walkthrough version of my resume!",
        side: 'bottom',
        align: 'end',
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
        title:
          '<span style="display: block; text-align: center">Social Media for Pros 🤝🏽</span>',
        description: 'Lets connect, we never know what the future holds.',
      },
    },
    {
      element: '#summary',
      popover: {
        title:
          '<span style="display: block; text-align: center">Elevator Pitch</span>',
        description:
          "<img src='https://i.gifer.com/5Dam.gif' style='height: 215px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: left;'><span style='font-size: 15px; display: block; margin-top: 10px; text-align: left;'>This is the beginning of begging. Do you like it?! 😂 What do I mean by technologically agnostic? I am not a 'Java' Developer or a 'JavaScript' developer. I am an Engineer. That means I can solve problems with code regardless of the technological language that was chosen for the project.</span>",
      },
    },
    {
      element: '#skills',
      popover: {
        title:
          '<span style="display: block; text-align: center">The Bread & Butter</span>',
        description:
          "<img src='https://i.gifer.com/3b4.gif' style='height: 215px; width: 270px;' />If it's listed here, I either have a project linked to that skill or am working on a project utilizing that skill. I really do enjoy learning 🤓.",
        side: 'top',
        align: 'middle',
      },
    },
    {
      element: '.experience',
      popover: {
        title:
          '<span style="display: block; text-align: center">The Main Course 🥘</span>',
        description:
          "<img src='https://i.gifer.com/14ba.gif' style='height: 215px; width: 270px;' /> You've found the goods!",
        side: 'top',
      },
    },
    {
      element: '.education',
      popover: {
        title:
          '<span style="display: block; text-align: center">I have an edumacation! Err...Umm...</span>',
        description:
          "<img src='https://i.gifer.com/40OU.gif' style='height: 215px; width: 270px;' />",
        side: 'top',
      },
    },
    {
      element: '.certs',
      popover: {
        title:
          "<span style='display: block; text-align: center'>It's goodbye for now...</span>",
        description:
          "<img src='https://i.gifer.com/65SE.gif' style='height: 215px; width: 250px;' /> Certifications, the gems on an Engineer's crown. But I am also sad you're leaving... I hope you enjoyed my walkthrough. 👋🏽",
        side: 'top',
      },
    },
  ],
});

const walkthroughButton = document.getElementById('guidedWalkthroughButton');
walkthroughButton.addEventListener('click', () => {
  driverObj.drive();
});
