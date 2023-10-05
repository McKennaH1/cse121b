/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "McKenna Harker",

     
    profilePicture: 'images/mckennaharker.png',

    favoriteFoods: [
        "Strawberry Shortcake",
        "Apple Pie",
        "Steak",
        "Chicken Salad Sandwhiches",
        "Ramen",
        "Sushi",
        "Cafe Rio Salads"
    ],

    hobbies: [
        "Drawing",
        "Cross Stitching",
        "Video Games",
        "Color Guard"
    ],

    placesLived: []

}


/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        loc: 'Saratoga Springs, UT',
        dur: '20 years'
    }    
)

myProfile.placesLived.push(
    {
        loc: 'Salt Lake City, UT',
        dur: '1 year'
    }    
)

myProfile.placesLived.push(
    {
        loc: 'Rexburg, ID',
        dur: '4 years'
    }    
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.profilePicture;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(area => {
    let locs = myProfile.placesLived.length;
    for (var i=0; i <= locs; i++) {
        let dt = document.createElement('dt');
        area = myProfile.placesLived[i].loc;
        dt.textContent = area;
        document.querySelector('#places-lived').appendChild(dt);
        let dd = document.createElement('dd');
        area = myProfile.placesLived[i].dur;
        dd.textContent = area;
        document.querySelector('#places-lived').appendChild(dd);
    }

});