
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rants').del()
    .then(function () {
      // Inserts seed entries
      return knex('rants').insert([
        {
          id: 1,
          title: "High-Fives - Failure's greatest Ally",
          rant: "SCENARIO: You've just finishe something great. You just cut a tumour out of a dying child, you've just paid off your student loan for the second time, you've just managed to get out of bed and get into the shower for the first time this year. CONGRATULATIONS! Better celebrate that success with a CHANCE AT FAILURE! Seriously, FreeOnlineStatistics.com says that 42/6% of ALL high-fives are either missess or disappoint near-misses. Why do people celebrate their success by setting themselves up for ANOTHER CHANCE AT FAILURE?! It just makes no sense at all! Fire a musket into the air, their chance of misfiring is a little under 10% and when they do misfire you can just blame it on the old technology. Nothing old about the technology in your hands, hell the skin on them is renewed completely every 2.3 days according to FreeOnlineStatistics.com. Seriously guys, if any of this is new to you then checkout the Stats, because the News, Media and ALL your friends will lie to you, but FreeOnlineStatistics.com is cold hard facts.",
          author: "Joss - FreeOnlineStatistics.com",
          date: 0
        },
        {
          id: 2,
          title: "What's up with Git",
          rant: "Seriously, what's up with it?! I thought that it was supposed to make life easier and greater but all it's done has made me lose my hair! ALL OF MY HAIR! Someone, please, anyone, lets have some more clear terms and directions, or just automate it all. It's 2020, we shouldn't have to be asking for things like this the robotos should just be doing it.",
          author: "Anonymous",
          date: 0
        },
        {
          id: 3,
          title: "Square Pizza",
          rant: "Why is there not a greater supply of Pizza in alternative shapes to a circle? Surely a square would allow for easier division of the entire pie into smaller shapes? I'm sure there's other people out there who have a serious fear of Circles and are interested in getting Pizza in any other shape? If this is you, lets meet up, there's definitely a hole in the market here and I have a lot of money that I just inherited from my grandma's cat dyiung so I think that i should put it to good use and invest it in a good idea like this. Meet my by the lamp-post, in the park, on Thursday Evening. I'll be wearing a scarf and reading a German Dictionary.",
          author: "Mr. S. Quare",
          date: 0
        },
        {
          id: 4,
          title: "What's up with the 'Stink-eye'?",
          rant: "Why is it called the 'Stink-eye'? As someone who has a permanently scrunched up left side of my face I take offence to such a term being used so broadly to describe the windows into my soul. There is nothing 'stinky' nor smelly about myself or my eyes or my face. Surely people know what such words are hurtful, far more hurtful than falling asleep with half your face in a chillybin full of dry ice and waking up in the emergency room in a small fishing town in Tonga with the staff going through your pockets trying to see if you're on drugs or drunk or just plain stupid. Either way, I'm not sure what we should change it to but lets change it!",
          author: "S. T. Inkeye",
          date: 0
        },
        {
          id: 5,
          title: "Handlebars",
          rant: "Bring back Handlebars. I've only just managed to grow out my moustache to a state that I am happy to declare fulfills the conditions of 'Handlebars' according to the online moustache growing and shaping guide that I found on WikiHow. But of course I arrive on Monday to find that we're MOVING ON from Handlebars and in fact probably not going to be using it again... ever! What a travesty!! Or should I say {{travesty}}!! Seriously guys, if it ain't broke, DON'T FIX IT!!",
          author: "Robbie Hamilton",
          date: 0
        }
      ]);
    });
};
