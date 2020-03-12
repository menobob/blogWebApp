var mongoose    = require('mongoose'),
Blogs           = require("./models/blogs");

var data = [
    {
        title: "The map to your destination",
        image: "https://images.unsplash.com/photo-1517842264405-72bb906a1936?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        body: "Sint excepteur exercitation nulla occaecat nostrud in. Adipisicing minim elit commodo minim ipsum velit ut. Labore do incididunt velit nisi. Mollit, officia in qui do Lorem non quis qui eiusmod cillum. Mollit esse do ipsum labore non adipisicing nostrud do irure adipisicing aliqua. In proident occaecat consequat incididunt minim sunt cupidatat ea exercitation sint aute nulla. In esse ex tempor sit do qui elit do sint consectetur."
    },

    {
        title:"My Adventure at Disneyland Paris",
        image:"https://images.unsplash.com/photo-1530564522-eef4991d344b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        body: "Duis deserunt ex id in consectetur. Labore pariatur nulla eiusmod elit mollit aliquip esse dolore cillum enim aliquip officia mollit. Mollit officia aute dolore est ad. Minim commodo in aute excepteur velit id ad voluptate aliquip adipisicing qui reprehenderit. Mollit velit cillum proident nostrud ipsum exercitation dolor. Ad consequat qui cupidatat Lorem anim voluptate laboris pariatur veniam. Id fugiat deserunt ullamco tempor veniam exercitation.Ipsum aliqua tempor velit aute occaecat culpa mollit. Eiusmod id elit anim sint ipsum aliqua consectetur cillum non culpa ex dolore. Nulla ad veniam incididunt consequat nostrud dolor minim esse. Eiusmod labore elit est esse sit labore exercitation. Elit non reprehenderit officia reprehenderit nisi enim sunt do mollit aliquip magna ullamco proident. Mollit est sint tempor ex amet ipsum velit magna minim amet voluptate officia. Culpa veniam voluptate sunt cupidatat excepteur officia cillum ut magna ea pariatur magna sunt."
    },

    {
        title: "A walk through Fushimi Inari Taisha in Kyoto-shi, Japan",
        image: "https://images.unsplash.com/photo-1505069446780-4ef442b5207f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        body:"Exercitation consectetur nisi culpa veniam non proident commodo. Nostrud magna occaecat sit reprehenderit elit. Deserunt tempor veniam aute excepteur eiusmod laboris ullamco do. Mollit fugiat ut voluptate reprehenderit sunt.Commodo laboris ullamco laborum non sint dolor excepteur. Sunt esse nulla do proident reprehenderit quis enim incididunt Lorem ex id nostrud. Amet velit ea enim reprehenderit officia tempor dolor nisi nulla Lorem dolor labore deserunt."
    },

    {
        title: "The girl with baloon",
        image:"https://images.unsplash.com/photo-1502842294453-95e49a5ce544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        body: "Ad laboris adipisicing irure est sit ullamco ut nulla in ex ea elit nisi cupidatat. Officia dolore commodo duis adipisicing. Incididunt labore eu enim ea tempor elit tempor laboris officia consequat ea. Elit sit id labore culpa adipisicing ex Lorem. Ex mollit adipisicing veniam minim. Duis esse nostrud eiusmod id ipsum ullamco nulla.Nostrud et in ullamco ut ullamco sunt. In veniam sint anim pariatur laboris ex adipisicing. Sit ut sint nulla in adipisicing quis proident est laborum."
    },

    {
        title: "The Stuttgart Library",
        image: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
        body: "Sint excepteur exercitation nulla occaecat nostrud in. Adipisicing minim elit commodo minim ipsum velit ut. Labore do incididunt velit nisi. Mollit, officia in qui do Lorem non quis qui eiusmod cillum. Mollit esse do ipsum labore non adipisicing nostrud do irure adipisicing aliqua. In proident occaecat consequat incididunt minim sunt cupidatat ea exercitation sint aute nulla. In esse ex tempor sit do qui elit do sint consectetur."
    },

    {
        title:"Indian Holi Tradition",
        image:"https://images.unsplash.com/photo-1530564522-eef4991d344b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        body: "Duis deserunt ex id in consectetur. Labore pariatur nulla eiusmod elit mollit aliquip esse dolore cillum enim aliquip officia mollit. Mollit officia aute dolore est ad. Minim commodo in aute excepteur velit id ad voluptate aliquip adipisicing qui reprehenderit. Mollit velit cillum proident nostrud ipsum exercitation dolor. Ad consequat qui cupidatat Lorem anim voluptate laboris pariatur veniam. Id fugiat deserunt ullamco tempor veniam exercitation.Ipsum aliqua tempor velit aute occaecat culpa mollit. Eiusmod id elit anim sint ipsum aliqua consectetur cillum non culpa ex dolore. Nulla ad veniam incididunt consequat nostrud dolor minim esse. Eiusmod labore elit est esse sit labore exercitation. Elit non reprehenderit officia reprehenderit nisi enim sunt do mollit aliquip magna ullamco proident. Mollit est sint tempor ex amet ipsum velit magna minim amet voluptate officia. Culpa veniam voluptate sunt cupidatat excepteur officia cillum ut magna ea pariatur magna sunt."
    },

    {
        title: "6 Rond-Point des Arenes",
        image: "https://images.unsplash.com/photo-1548689775-de410782ac3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        body:"Exercitation consectetur nisi culpa veniam non proident commodo. Nostrud magna occaecat sit reprehenderit elit. Deserunt tempor veniam aute excepteur eiusmod laboris ullamco do. Mollit fugiat ut voluptate reprehenderit sunt.Commodo laboris ullamco laborum non sint dolor excepteur. Sunt esse nulla do proident reprehenderit quis enim incididunt Lorem ex id nostrud. Amet velit ea enim reprehenderit officia tempor dolor nisi nulla Lorem dolor labore deserunt."
    }

];

function seedDB() {
    // remove all cmpgrounds
    Blogs.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        // add a few campgrounds

        console.log("Removed Blogs");
    });
    data.forEach(function(seed) {
        Blogs.create(seed, function(err, blog){
            if (err) {
                console.log(err);
            } else {
                console.log("added a blog");
            }
        });
    });
}

module.exports = seedDB;