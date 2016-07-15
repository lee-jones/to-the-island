


function journal(title,content, numEntries, entriesAvailable){
    this.entries= [];
    
    this.createEntry = function (title, content, author,time,tags){
        
            this.entries.push(new journalEntry(title, content, author,time,tags));      
    }

}


function journalEntry(title,content){
    this.title = title;
    this.content = content;
   
    
}

    

var journal1 = new journal;
journal1.createEntry("We had not prepared for this", "Nancy and I landed at Keflavik Airport early in the morning after a red-eye flight. Both of us have a hard time sleeping or eating on planes and as a result we were sleepy and hungry as hell. In light sweaters and scarves we ran outside and waited in the freezing rain for our bus to arrive, only then to realize we had booked the wrong transfer and would need to wait 5 hours for the next one. We were cold. We were tired. We were soaked. We were unprepared.");
journal1.createEntry("Another world", "After our bus arrived we drove through lava fields as the rain turned to a deep fog that would last the rest of our trip. The lava rocks were covered in moss and the formations created tumbling grooves and crevasses. It is easy to see why Iceland's landscape inspires so much romanticism. With all the mist and black rock it becomes something out of a painting, a book, a video game, your dreams? But at the same time it shocks your senses. The eyes love what they see, but the strong smell of sulfur? Whatever mystical beings are in the landscape\’s folklore, they must have gas. ");
journal1.createEntry("Eternally day", "Because it was nearing summer the sun never seemed to set. Nancy and I went for long walks at midnight that felt more like early morning than the dead of night. This constant sunlight reset our rhythms so we couldn\’t sleep. I\’d wake up at 3am, Nancy would toss and turn, and the bit of insomnia that stayed with us made everything a bit more slippery. We found ourselves losing track of time. Yet there was always the feeling of safety. We could walk wherever, whenever and feel safe at all times.");
journal1.createEntry("Energy", "The craziest part about Iceland is how self-sustainable it is. The island\’s resources are almost entirely powered by renewable energy from the hot volcanic water that gets pumped up to the surface. As Nancy and I bussed around to the different sites we saw greenhouses scattered all over the country side. They are all heated from the really cheap thermal energy, and can grow almost anything except fruit trees (since they\’re too tall to fit in the greenhouses). We were told that the thermal pipes heat the houses and run under roads and driveways gently warming them so that no one has to shovel snow in the winter.  There were gas cars, but many of the new ones seemed electric.");
journal1.createEntry("Water", "While we were on the way to the blue lagoon we found out that Iceland has more fresh water per person that any other country in the world. With this and the renewable energy it really seems like somewhere you\’d want to be in an apocalypse. As we got closer to the lagoon we were told that this beautiful place is really a man-made disaster. After pumping up the thermal water they needed somewhere to put the \'waste-water\' (the high sulfur and salt content) before sending the filtered water to the city. So they dumped it all and it formed into a lagoon with healthy properties.  But even with the filtering, the water in the city had a faint whiff of sulfur. Though it stank at times, Nancy and I noticed that by the second day our skin was glowing.   ");
journal1.createEntry("Creativity", "When we weren\’t in nature we spent our time going to Reykjavik\’s many art galleries. The creative output for a country of only 300,000 people really blew us away. The biennial at Nordic House talked a lot about how creativity and design in Iceland are fueled by the place. One designer said that in the main cultural centers she had lived in, like New York and Milan, creatives found themselves getting caught up in the \“scene\”, whereas in Iceland you have more freedom to do what you want. The most interesting part for me was how one artist talked about the landscape and seasons forcing creativity. For half the year there is almost no sunlight and without a creative outlet you would die of boredom.");
journal1.createEntry("Trails", "Most of our trip was spent walking  and we noticed very early on that the whole country was made for it.  On our first day in town we walked two hours from the city center all the way to our guesthouse out in the suburbs. You could get anywhere by biking or walking and the paths were even separated from the road. Another thing that really stuck out as we walked from place to place was how cars would stop to let us pass. Not just at the light, or at marked intersections, but wherever the walking paths went. Even if there was only a single car going by, the driver would stop immediately to let us cross. They clearly have a <i>culture</i> of walking. Along the paths there were benches, fountains, and park stops so we tended to take stretches out of the day to walk with snack breaks in between. ");
journal1.createEntry("Young parents", "Almost every museum we went to had a cafe, and at every cafe there would be a huge group of young parents hanging out drinking coffee. They were young, it was the middle of the workday, and they were all relaxing with their babies. What struck us was how strange this all seemed. These people had children yet they were so young, so cool, and so relaxed about it all. In Canada the standard route is to finish university and then you have to save up enough to even afford children (and their university education to come). We are so used to the idea that you are ready for children when you have worked hard enough to afford them. Because of the social benefits in Iceland (like almost-free education), you could be in school and have a child, and by having them young you\’re not shirking them of their future education either. ");
journal1.createEntry("5 o\'clock", "On the first day we went to Reykjavik's downtown to explore and found out that everything closed at five. There were a few food places to go for dinner, but it was interesting that the most populated area of town would have such strict regiments. Maybe I\’m idealizing a bit but the town emptying out at 5pm on a weekday felt so sane compared to our 24/7 lives back home. It\’s easier to get into a natural rhythm. You eat at 5pm because everything else is closed; you leave work at 5pm because you literally cannot stay any longer. The routine actually made everything seem more free. ");
journal1.createEntry("The smell", "Iceland is a place of strong smells. The sulfur is obvious, but there are others that really stick in my mind. Everywhere we walked in and near Reykjavik had a sweet smell of birch. It’s a smell that made me want to go outside for long walks. I’ve never smelled such a light and lovely smell. There were so many birch trees and they were everywhere we went. Along the coast the smell of sea salt was always lingering. During our trip it rained and even when it didn’t the fog brought the salt to us. It got in our hair, in our clothes, and everything smelled of it. Our hair was matted but we felt fresher. ");
journal1.createEntry("Nothing lived here", "Almost none of the animals that live in Iceland are indigenous  (except for the shy arctic fox). The deer are from Norway and were dropped off around the island until they took to one area. Mink were originally brought over for fur farming and then escaped their coops. They run wild terrorizing farm animals and the government will actually pay citizens to capture and kill them. The horses and other farm animals were all brought over from Europe before slowly adapting to the place. The same goes for plants. Because so few things lived on this giant volcanic rock, the place feels like some really long experiment. Things are dropped off, some species die, and others adapt.");
journal1.createEntry("We can't afford this", "Iceland has been one of my favourite trips yet, but as the two weeks came to a close Nancy and I were both thinking - thank goodness! We were too poor for Iceland. We went out for a fish and chip lunch that ended up being the equivalent of $100 Canadian. A small container of fruits at the downtown grocery was $7, the lagoon was $90 (each!!!!), and the list goes on. But our one indulgence was the Icelandic smoked salmon, we absolutely gorged on it and it was delicious. On our last day we went back to the blue lagoon and soaked in the hot water one last time. After getting dressed we drove through the lava fields back to the airport before catching our plane back home to Canada.");



for (var i = 0; i < 3; i++) {
   
    $('#myJournals').append('<div class = "myblogs1 col-md-4 col-sm-12"><h2>'+journal1.entries[i].title +' </h2><div class="blogContent">'+journal1.entries[i].content +' </div></div>');
  

}







for (var i = 3; i <= 5; i++) {
   
    $('#myJournals1').append('<div class = "myblogs1 col-md-4 col-sm-12"><h2>'+journal1.entries[i].title +' </h2><div class="blogContent">'+journal1.entries[i].content +' </div></div>');
  

}

for (var i = 6; i <= 8; i++) {
   
    $('#myJournals2').append('<div class = "myblogs1 col-md-4 col-sm-12"><h2>'+journal1.entries[i].title +' </h2><div class="blogContent">'+journal1.entries[i].content +' </div></div>');
  

}

for (var i = 9; i <= 11; i++) {
   
    $('#myJournals3').append('<div class = "myblogs1 col-md-4 col-sm-12"><h2>'+journal1.entries[i].title +' </i></h2><div class="blogContent">'+journal1.entries[i].content +' </div></div>');
  

}

//var post1 = new journalEntry();

console.log(journal1.entries);

//console.log(post1.title +"\n", post1.content +"\n", post1.author);






