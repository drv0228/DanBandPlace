let listOfConcerts = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
     {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
  },
  {
    date: 'Sat Nov 06 2021',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA'
},
{
    date: 'Fri Nov 26 2021',
    venue: 'Moscow Center',
    location: 'San Francisco, CA'
},
{
    date: 'Wed Dec 15 2021',
    venue: 'Press Club',
    location: 'San Francisco, CA'
}
]
// const listShows = document.querySelector('.shows-page__description');
const listShows = document.querySelector('.shows-page__shows');

function displayShows(){
    for( let i = 0; i < listOfConcerts.length; i++){
        
        let showDateLabel = document.createElement('div');
        showDateLabel.classList.add('shows__labels');
        listShows.appendChild(showDateLabel);

        showDateLabel.innerText = 'DATE';

        let showDate = document.createElement('p');
        showDate.classList.add('shows__date');
        listShows.appendChild(showDate);

        showDate.innerText = listOfConcerts[i].date;

        let showVenueLabel = document.createElement('p');
        showVenueLabel.classList.add('shows__labels');
        listShows.appendChild(showVenueLabel);

        showVenueLabel.innerText = 'VENUE';

        let showVenue = document.createElement('p');
        showVenue.classList.add('shows__venue');
        listShows.appendChild(showVenue);

        showVenue.innerText = listOfConcerts[i].venue;

        let showLocationLabel = document.createElement('p');
        showLocationLabel.classList.add('shows__labels');
        listShows.appendChild(showLocationLabel);

        showLocationLabel.innerText = 'LOCATION';

        let showLocation = document.createElement('p');
        showLocation.classList.add('shows__location');
        listShows.appendChild(showLocation);

        showLocation.innerText = listOfConcerts[i].location;

        let buttonTickets = document.createElement('button');
        buttonTickets.classList.add('button__tickets');
        listShows.appendChild(buttonTickets);

        buttonTickets.innerText = "BUY TICKETS";

        let showsDivider = document.createElement('div');
        showsDivider.classList.add('shows__divider');
        listShows.appendChild(showsDivider);
    }
}
displayShows();