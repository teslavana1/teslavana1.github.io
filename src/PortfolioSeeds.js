import v1 from './teslamart.herokuapp.com_listings.png'
import v2 from './Cover.png'


const websites = [
    {
        name: 'Tesla Mart V2',
        url: 'https://teslamartv2.herokuapp.com',
        detailsUrl: '/sw/portfolio/teslamartv2',
        image: v2,
        description: "After completing my React bootcamp, I rebuilt Tesla Mart from scratch to solidify my new skills.  I used MUI to create a polished, responsive website. Storing data from API RESTful requests in the state and breaking the website down into components made the code easier to follow and organize.  New features includes: profile pictures, reordering of the listing images, messaging between users, and more!"
    },
    {
        name: 'Tesla Mart',
        url: 'https://teslamart.herokuapp.com',
        image: v1,
        description: "Using the skills I learned from my first web development bootcamp, I built Tesla Mart.  Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.  The frontend was built using HTML, CSS, Bootstrap, and JavaScript, while the backend was built using NodeJS, Express, and MongoDB."
    }
]

export default websites