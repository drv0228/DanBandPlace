const key = "api_key=e106b022-3c18-4662-af84-1a28ac07b97d";
const backend = new BandSiteAPI(key);
const listShows = document.querySelector('.shows-page__shows');

function displayShow(show){

        let showContainer = document.createElement('div');
        showContainer.classList.add('shows__container');
        listShows.appendChild(showContainer);
        
        let showDateLabel = document.createElement('div');
        showDateLabel.classList.add('shows__labels');
        showContainer.appendChild(showDateLabel);

        showDateLabel.innerText = 'DATE';

        let showDate = document.createElement('p');
        showDate.classList.add('shows__date');
        const readableDate = new Date(show.date).toLocaleDateString(`en-US`, {
            weekday:`short`,
            year: `numeric`,
            month: `short`,
            day: `2-digit`
        });
        showDate.innerText = readableDate;
        showContainer.appendChild(showDate);
        
        let showVenueLabel = document.createElement('p');
        showVenueLabel.classList.add('shows__labels');
        showContainer.appendChild(showVenueLabel);

        showVenueLabel.innerText = 'VENUE';

        let showVenue = document.createElement('p');
        showVenue.classList.add('shows__venue');
        showVenue.innerText = show.place;
        showContainer.appendChild(showVenue);

        let showLocationLabel = document.createElement('p');
        showLocationLabel.classList.add('shows__labels');
        showContainer.appendChild(showLocationLabel);

        showLocationLabel.innerText = 'LOCATION';

        let showLocation = document.createElement('p');
        showLocation.classList.add('shows__location');
        showLocation.innerText = show.location;
        showContainer.appendChild(showLocation);

        let buttonTickets = document.createElement('button');
        buttonTickets.classList.add('button__tickets');
        showContainer.appendChild(buttonTickets);

        buttonTickets.innerText = "BUY TICKETS";
    }
    displayShows();
    
    async function displayShows() {
        const shows = await backend.getShows()
        console.log(shows);
        listShows.innerHTML = '';
        for (const show of shows){
        displayShow(show)
        }
    }
    

   function selectTableRow() {
        showContainer.classList.add(`shows__container--selected`);
    }
    const row = document.querySelector('.shows__container')
    
    row.addEventListener('click', async () => {
        try {
            await selectTableRow();
        }
        catch {
            console.log('omg an error is here')
        }
        });