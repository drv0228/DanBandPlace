const key = "api_key=e106b022-3c18-4662-af84-1a28ac07b97d";
const form = document.querySelector('.form');
const commentButton = document.querySelector('.form__button');
const date = new Date(Date.now());
const dateF = date.toLocaleDateString();

const backend = new BandSiteAPI(key);
const container = document.querySelector('.comments');



function displayComment(newComment) {
        let userComment = document.createElement('div');
        userComment.classList.add('comments__card');
        container.appendChild(userComment);

        let userName = document.createElement('h2');
        userName.classList.add('user__name');
        container.appendChild(userName);

        userName.innerText = newComment.name;

        let commentDate = document.createElement('h2');
        commentDate.classList.add('comments__date');
        const readableDate = new Date(Number( newComment.timestamp)).toLocaleDateString();
        commentDate.innerText = readableDate;
        container.appendChild(commentDate);

        let userDescription = document.createElement('p');
        userDescription.classList.add('comments__description');
        userDescription.innerText = newComment.comment;
        container.appendChild(userDescription);
}

async function displayComments() {
    const comments = await backend.getComment()
    console.log(comments);
    container.innerHTML = '';
    for (const comment of comments){
        displayComment(comment)
    }
}

async function builtNewComment(event) {
    event.preventDefault();

    let newComment = {
        name: event.target.userName.value,
        comment: event.target.userComment.value,
    }
   
    await backend.postComment(newComment);
    form.reset();
    displayComments(newComment);
    
}

form.addEventListener('submit', builtNewComment);
displayComments();

// const postComment = async (newComment) => {
//     try {
//     const response = await axios.post(`https://project-1-api.herokuapp.com/comments?api_key=e106b022-3c18-4662-af84-1a28ac07b97d`, newComment);
//     let otherComments = response.data;
//     displayComments();   
//     } 
//     catch (error) {
//           console.log(error);  
//     }
