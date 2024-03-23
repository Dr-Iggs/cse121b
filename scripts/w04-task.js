/* LESSON 3 - Programming Tasks */

/* Profile Object  */



/* Populate Profile Object with placesLive objects */

let myProfile = {name: 'Spencer Driggs',
photo : 'images/profile.jpg',
favfoods: ['Sushi','Pavlova','Balsamic Sandwiches','Kiwis'],
hobbies: ['Clarinet','Piano','Dance','Cooking'],
placesLived: []
};

myProfile.placesLived.push({place: 'Dallas, TX',
                         length: '4 yrs'});
myProfile.placesLived.push({place: 'Chicago, IL',
                         length: '10 yrs'});
myProfile.placesLived.push({place: 'Houston, TX',
                         length: '3 yrs'});
myProfile.placesLived.push({place: 'Phoenix, AZ',
                         length: '3 yrs'});
myProfile.placesLived.push({place: 'Reno, NV',
                         length: '2 yrs'});
myProfile.placesLived.push({place: 'Rexburg, ID',
                         length: '2 yrs'});


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProfile.photo);
document.querySelector('#photo').setAttribute('alt',myProfile.name);

/* Favorite Foods List*/
myProfile.favfoods.forEach(food => {
    let new_food = document.createElement('li');
    new_food.textContent = food;
    document.querySelector('#favorite-foods').appendChild(new_food);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let new_hobby = document.createElement('li');
    new_hobby.textContent = hobby;
    document.querySelector('#hobbies').appendChild(new_hobby);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let new_place = document.createElement('dt');
    new_place.textContent = location.place;
    document.querySelector('#places-lived').appendChild(new_place);
    let new_length = document.createElement('dd');
    new_length.textContent = location.length;
    document.querySelector('#places-lived').appendChild(new_length);
})

