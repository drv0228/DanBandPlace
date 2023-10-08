let usersComments = [
    {
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
       comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
     {
         name: 'Miles Acosta',
         date: '12/20/2020',
         comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }
]

const form = document.querySelector('.form');
const commentButton = document.querySelector('.form__button');
const date = new Date(Date.now());
const dateF = date.toLocaleDateString();

function displayComment(){
    const container = document.querySelector('.comments');
    container.innerHTML = '';

    for( let i = 0; i < usersComments.length; i++ ){
        let userComment = document.createElement('div');
        userComment.classList.add('comments__card');
        container.appendChild(userComment);

        let userName = document.createElement('h2');
        userName.classList.add('user__name');
        container.appendChild(userName);

        userName.innerText = usersComments[i].name;

        let commentDate = document.createElement('h2');
        commentDate.classList.add('comments__date');
        container.appendChild(commentDate);

        commentDate.innerText = usersComments[i].date;

        let userDescription = document.createElement('p');
        userDescription.classList.add('comments__description');
        container.appendChild(userDescription);

        userDescription.innerText = usersComments[i].comment;
    }
}

function makeNewComment (userName, dateF, userComment) {
    let newComment = {
        name: userName,
        date: dateF,
        comment: userComment
    }

    usersComments.unshift(newComment);
    displayComment();
}

function handleNewComments(event) {
    event.preventDefault();
   

    const userName = event.target.userName.value;
    const userComment = event.target.userComment.value;

    makeNewComment(userName, dateF, userComment);

    form.reset();
}


form.addEventListener('submit', handleNewComments);
displayComment();