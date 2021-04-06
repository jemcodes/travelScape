const { lorem } = require("faker");

const articlesData = [
  {
    title: 'Backpacking Yosemite High-Country',
    content: `Brunch raw denim edison bulb shoreditch. Disrupt flexitarian pop-up PBR&B freegan, direct trade succulents chillwave try-hard kitsch lumbersexual whatever everyday carry vaporware. Cornhole mustache irony green juice vegan mixtape vexillologist. You probably haven't heard of them chambray chillwave small batch snackwave flannel.

    Pitchfork ennui sustainable polaroid cardigan green juice. Swag pug snackwave celiac, disrupt austin schlitz DIY helvetica. Woke VHS biodiesel air plant. +1 lyft next level pug bespoke woke snackwave williamsburg skateboard flannel fixie aesthetic. Snackwave pitchfork synth banh mi, small batch hoodie tote bag cray vaporware tbh palo santo +1. Snackwave bitters irony, hell of squid occupy cliche.
  
    Lyft fixie ramps vinyl snackwave. Chartreuse meditation letterpress etsy, tousled hot chicken seitan. Readymade man braid cold-pressed cardigan artisan hella green juice pickled copper mug fixie paleo franzen. Asymmetrical hashtag jianbing raw denim. Copper mug chia wolf, try-hard twee live-edge trust fund quinoa pickled. Snackwave butcher typewriter pok pok hexagon heirloom YOLO. Man bun pour-over YOLO mlkshk ethical.
    
    Disrupt lomo adaptogen chia schlitz offal ugh paleo brooklyn jean shorts. +1 dreamcatcher banjo roof party pabst microdosing schlitz normcore typewriter. Lumbersexual squid literally, fixie meh bitters blue bottle offal occupy. Palo santo marfa quinoa four loko, hammock retro franzen locavore schlitz. Yr enamel pin chillwave mustache flexitarian selfies mixtape vice cold-pressed kombucha normcore sustainable pug cloud bread. Fixie polaroid photo booth, authentic farm-to-table offal letterpress.
    
    Messenger bag yuccie tofu tousled scenester viral, raclette whatever glossier cold-pressed. Lumbersexual pitchfork live-edge yuccie, poke post-ironic selfies austin vegan echo park roof party. Ugh cloud bread chillwave, 3 wolf moon vice bushwick polaroid lo-fi meditation schlitz leggings letterpress sriracha hot chicken. Glossier whatever meggings irony freegan, stumptown gluten-free.
    
    Dummy text? More like dummy thicc text, amirite?
    `,
    imageSrc: 'https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'My First Solo Travel',
    content: `Palo santo humblebrag magna hell of offal edison bulb. Kickstarter butcher godard eu, hoodie venmo cliche hella vexillologist. Twee green juice cornhole dolore deserunt, cillum wolf selvage. Live-edge irure ex, XOXO biodiesel man bun tbh truffaut incididunt literally photo booth anim deserunt.

    Keffiyeh dolor tumblr woke tbh meggings banjo 8-bit lumbersexual selfies magna quis. Snackwave four dollar toast non paleo, cronut af quis vape adaptogen ut cold-pressed ea venmo tbh. Skateboard air plant tbh cornhole meh. Ut af snackwave magna blog polaroid. Cold-pressed thundercats mumblecore lorem artisan cupidatat bitters hashtag.
    
    Portland labore pug live-edge, est raw denim activated charcoal narwhal kinfolk small batch meh aute dolore williamsburg. Cornhole brunch kinfolk echo park pop-up wayfarers. Laboris keffiyeh polaroid yuccie, narwhal chambray meh labore cloud bread minim fugiat scenester vexillologist fixie kombucha. Et lumbersexual small batch authentic pop-up, cillum schlitz PBR&B qui distillery vape direct trade tacos lomo pabst. Pok pok lomo adipisicing tbh literally voluptate ut shoreditch heirloom jean shorts cardigan fixie truffaut 90's consectetur.
    
    Yuccie chicharrones slow-carb, hella before they sold out salvia adipisicing hammock. Godard officia gentrify distillery sunt laboris edison bulb single-origin coffee VHS. Put a bird on it jean shorts tote bag consectetur selvage shaman etsy. Ugh banh mi bicycle rights pinterest woke, gastropub labore vice.
    
    Single-origin coffee art party narwhal wolf sed in, artisan exercitation slow-carb. Distillery seitan irony YOLO, velit unicorn tousled. Cardigan ipsum twee reprehenderit williamsburg magna church-key occaecat qui jean shorts yuccie 90's. Beard biodiesel waistcoat hammock raw denim helvetica shabby chic ipsum, selvage non brunch echo park aesthetic flexitarian eiusmod.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Thailand During COVID-19',
    content: `Spicy jalapeno corned beef meatloaf drumstick hamburger, ham flank bresaola salami spare ribs chuck porchetta picanha rump. T-bone cow flank hamburger, bacon short ribs andouille beef ribs spare ribs tri-tip ball tip picanha venison biltong strip steak. Alcatra beef shank short ribs. Tri-tip drumstick pork chop rump tenderloin ribeye, boudin jerky corned beef. Short loin cow strip steak fatback beef ribs ribeye buffalo drumstick kevin turkey.

    Ball tip ham jerky, drumstick alcatra jowl salami biltong chuck andouille meatloaf porchetta pork loin kevin. Pancetta ball tip beef turducken chislic chuck pork belly pork tail bacon kielbasa beef ribs swine. Ribeye landjaeger pancetta t-bone, meatball burgdoggen tri-tip bacon pastrami jerky brisket flank ball tip alcatra. Ball tip tri-tip pork sirloin ribeye. Turkey bacon buffalo biltong salami beef ribs ham, kielbasa sirloin chislic andouille chicken shank short loin. Shank corned beef venison, shankle pancetta tenderloin fatback sirloin turducken tongue tri-tip. Venison ball tip shoulder, short ribs picanha bresaola drumstick.
    
    Bacon drumstick doner, pork chop hamburger flank tongue. Beef pork belly short ribs short loin, alcatra pastrami biltong ground round prosciutto kevin swine jowl hamburger cow. Spare ribs rump shank, venison turducken short ribs t-bone brisket prosciutto. Shankle short loin burgdoggen, landjaeger turducken tenderloin t-bone ground round boudin drumstick turkey. Shoulder pig frankfurter tail turducken andouille. Pancetta fatback tenderloin sausage jowl pork loin, tri-tip tail.
    
    Jowl turkey bresaola pork loin, beef ribs ham hock pork chop short ribs tail shankle. Turkey ham hock venison brisket frankfurter pancetta cupim. Pancetta pork chop ribeye, venison picanha tail alcatra bresaola cow. Corned beef jerky pork filet mignon, porchetta pork loin turducken ribeye capicola burgdoggen chislic cupim rump fatback. Pig beef ribs bacon shoulder.
    
    Kevin ball tip doner ham hock. Doner bresaola short loin pig, buffalo flank pork tenderloin cupim. Biltong pork buffalo prosciutto picanha. Tail sirloin turducken, ham jowl salami turkey sausage pig spare ribs pork belly burgdoggen. Flank kevin pig filet mignon short ribs alcatra salami. Chislic flank corned beef biltong bacon, beef pork loin hamburger doner cupim. Jerky bresaola chislic leberkas ground round turducken.
    
    Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
    `,
    imageSrc: 'https://images.unsplash.com/photo-1590119227988-a20d53ce33c0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2075&q=80',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Top 10 Roadtrips for the Family',
    content: `Bacon ipsum dolor amet bresaola hamburger pancetta, swine pork ham andouille. Alcatra pork belly biltong meatball ground round boudin. Kevin ham ham hock flank pig turkey. Corned beef alcatra turkey ham hock t-bone hamburger. Sirloin prosciutto sausage, swine shank chuck beef doner hamburger. Shank andouille filet mignon tail, meatball porchetta landjaeger corned beef cupim leberkas kevin.

    Jowl hamburger turkey buffalo tri-tip chislic kevin fatback pork belly sirloin landjaeger beef ribs pork loin rump. Turducken rump ball tip shank chuck strip steak jowl landjaeger fatback. Ham turducken shankle brisket beef porchetta. Shank ribeye sausage rump porchetta chislic. Ham hock fatback boudin, ball tip biltong porchetta pork belly andouille leberkas burgdoggen shankle turducken cupim swine. Ham hock jowl bresaola, filet mignon doner kevin shankle shank hamburger sausage bacon frankfurter fatback.
    
    Pork tenderloin cow ham ribeye, drumstick strip steak meatloaf buffalo. Kielbasa ham hock corned beef, turkey buffalo ground round boudin pork loin biltong. Doner biltong shankle brisket, ham hock andouille ribeye. Shank meatball salami sausage swine, capicola kielbasa. Filet mignon jerky kevin biltong corned beef prosciutto shank buffalo meatball hamburger capicola beef. Pastrami pork loin chuck porchetta, tongue beef brisket biltong t-bone turkey boudin meatball.
    
    Short ribs turducken prosciutto, biltong tongue picanha rump chuck sausage pork chop meatloaf beef ribs brisket corned beef burgdoggen. Kevin pork chop leberkas, chislic spare ribs ham pastrami drumstick sausage boudin short loin biltong capicola picanha burgdoggen. Kielbasa strip steak porchetta turkey chislic turducken jowl tenderloin flank. Turducken cupim pastrami turkey boudin salami ham hock beef cow shoulder tail chislic. Ribeye kielbasa pork pastrami, tongue burgdoggen hamburger turkey sirloin rump shoulder shank doner chicken tail.
    
    Meatloaf frankfurter biltong beef tenderloin landjaeger picanha alcatra. Shank prosciutto ball tip leberkas pork loin. Sausage boudin strip steak corned beef buffalo jowl. Sirloin t-bone burgdoggen, rump ham boudin pork loin tri-tip chicken pork chop capicola spare ribs pancetta.
    
    `,
    imageSrc: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1608&q=80',
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Suprise Vacation for Girlfriend: SPAIN!',
    content: `Drumstick cow meatloaf id, porchetta short loin ut elit. Pork belly irure prosciutto ullamco capicola sint ad salami officia ham bacon landjaeger. Flank shankle consequat lorem. Fatback swine quis ea pork chop strip steak anim eu kevin pork belly salami pig kielbasa. Salami qui dolor capicola bacon occaecat quis.

    Venison qui esse nostrud, ut alcatra shoulder. Pancetta tenderloin beef do corned beef, shoulder in aliquip. Ham hock deserunt pork loin tempor officia, drumstick tri-tip ball tip. Jowl beef ribs consectetur hamburger doner.
    
    Frankfurter short ribs shoulder doner ex jerky in ea venison chuck ad veniam et ut ribeye. Qui ham drumstick frankfurter brisket jowl strip steak ad elit laborum turkey corned beef landjaeger nisi. Shankle sed sunt consectetur tail lorem id do ham hock occaecat spare ribs alcatra aliquip. Ad ball tip meatball in cupim.
    
    Enim pork short loin ribeye et do capicola boudin ullamco. Cow elit pork belly meatloaf ut sed mollit spare ribs flank. Ea chislic turducken pork chop pariatur shank. Aliquip ad ribeye, ea cupidatat proident quis commodo est jerky reprehenderit bacon pork loin. Turducken eu bacon meatloaf shank tempor commodo nostrud ex.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()

  },
]

const commentsData = [
  {
    content: `Really interesting. I can't wait to go!`,
    articleId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    articleId: 2,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Wow, great insight. I want to go to Thailand!!`,
    articleId: 3,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `My favorite trip was Spain too! I went with my mom and we had the time of our lives. Thanks for sharing.`,
    articleId: 5,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `I can’t wait to backpack there next year. Beautiful.`,
    articleId: 1,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Roadtrips are my favorite thing <3`,
    articleId: 4,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Such a great idea for a surprise. Hope you had a chance to try the patatas bravas!`,
    articleId: 5,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Yessss - can't wait to checkout the coastal highways!`,
    articleId: 4,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Stepped in bear poop in Yosemite. My shoes never recovered.`,
    articleId: 1,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Number 1 should be leave the kids at home and surprise the wife with Kid free vacation. FREEEEEEEEEDDDDDOOOOOOMMMMMMM.`,
    articleId: 4,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },

];

const followData = [
  {
    followerId: 2,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 3,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 4,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 5,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 1,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 1,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 1,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 1,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 2,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 2,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 2,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 3,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 3,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 3,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 4,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 4,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 4,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 5,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 5,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 5,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 33,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 32,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 23,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 30,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 29,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

module.exports = {
  articlesData,
  commentsData,
  followData
}