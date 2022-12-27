import v1 from './teslamart.herokuapp.com_listings.png'
import v2 from './Cover.png'


const websites = [
    {
        name: 'Tesla Mart V2',
        url: 'https://teslamartv2.herokuapp.com',
        detailsUrl: '/sw/portfolio/teslamartv2',
        github: 'https://github.com/andrwmg/teslamart',
        image: v2,
        description: "I rebuilt Tesla Mart from scratch after completing my React bootcamp to use React, MUI and modular components to make the code easier to follow and the web app more polished.  New features include: profile pictures, reordering of listing images, messaging between users, and more!"
    },
    {
        name: 'Tesla Mart',
        url: 'https://teslamart.herokuapp.com',
        image: v1,
        description: "Tesla Mart was build following my first web dev bootcamp.  Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.  The frontend was built using HTML, CSS, Bootstrap, and JavaScript, while the backend was built using NodeJS, Express, and MongoDB."
    }
]

export default websites