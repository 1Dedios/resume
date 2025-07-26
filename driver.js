import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const driverObj = driver({
  overlayColor: 'blue',
  showProgress: true,
  steps: [
    {
      element: '#my-name',
      popover: {
        title: 'Welcome!!',
        description: 'Start of your driver.js experience.',
        side: 'right',
        align: 'start',
      },
    },
  ],
});

//TODO: uncomment below for driver.js to work
/* document.addEventListener('DOMContentLoaded', () => {
  driverObj.drive();
});
 */
