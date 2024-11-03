var movies = [
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954
    },
    {
        title: 'Cape Fear',
        director: 'Martin Scorsese',
        year: 1991
    },
    {
        title: 'Fright Night',
        director: 'Tom Holland',
        year: '1985'
    },
    {
        title: 'Blue Velvet',
        director: 'David Lynch',
        year: '1986'
    }
]
/* Create a function called createWeirdTitle that takes in one parameter - array - which represents an array of movie objects. 
This function should iterate through the array of movie objects... if the movie was released in an odd year, the function 
should access the first word in the title and add it to an output string; if the movie was released in an even year, 
the function should access the second word in the title and add it to the 
output string (assume all titles will only have 2 words). The function should return the output string at the end.
*/

//I: The function takes in one array of objects
//O: The function returns an aray of strings
//C: Use for loop
//E: N/A

function createWeirdTitle(array){
//Create an output array
    var output = [];
//Use a for loop to iterate over movie array
    for (i = 0; i < array.length; i++) {
//if movie was released in an odd year, push first word in title to output array
    if (array[i].year % 2 !== 0)
        output.push(array[i].title[0]);
//if movie was released in an even year, push second word in the title to output array
    } else }
        output.push(array[i].title[1]);
}


