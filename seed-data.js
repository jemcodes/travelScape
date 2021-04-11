const { lorem } = require("faker");

const articlesData = [
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
    title: 'Surprise Vacation for Girlfriend: SPAIN!',
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
  {
    title: 'Why Mardi Gras is the best ever.',
    content: `I'm baby kale chips shaman deep v taxidermy paleo mlkshk. Flannel hell of austin enamel pin fam shoreditch godard whatever biodiesel. Forage food truck selvage stumptown blue bottle kitsch poke narwhal yr squid venmo gochujang. Wayfarers dreamcatcher taiyaki, literally beard biodiesel tattooed lomo ennui cardigan pitchfork sustainable heirloom swag. Literally post-ironic truffaut scenester migas, ethical sartorial bicycle rights skateboard man bun. Raclette sriracha kombucha, pabst tacos cold-pressed put a bird on it.

    Green juice vexillologist fixie freegan occupy. Ugh succulents try-hard, twee jianbing messenger bag skateboard cred umami mumblecore four loko. Humblebrag tumeric YOLO kinfolk, butcher pok pok celiac umami lomo put a bird on it. Plaid listicle umami raw denim meh YOLO master cleanse. Migas dreamcatcher post-ironic distillery. PBR&B franzen sartorial polaroid meh typewriter pabst gochujang air plant godard cardigan mumblecore tacos disrupt leggings. Tousled single-origin coffee occupy kombucha yr raw denim, blue bottle bicycle rights selvage pork belly craft beer locavore literally ramps letterpress.
    
    Chambray ramps subway tile, direct trade sartorial fingerstache synth slow-carb succulents banjo you probably haven't heard of them vegan. Schlitz XOXO tumblr enamel pin, farm-to-table air plant subway tile sustainable yuccie chicharrones af man braid affogato pickled vaporware. Stumptown subway tile kickstarter, pour-over farm-to-table prism letterpress pug hell of whatever literally blue bottle brunch retro polaroid. Chicharrones occupy deep v meditation. Freegan sustainable four loko, cold-pressed subway tile shoreditch aesthetic cray chartreuse celiac VHS fashion axe snackwave echo park. Locavore 8-bit +1, direct trade chia banjo vaporware celiac ennui.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1562246043-e95940518cc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'The Best Croissants in Paris, France',
    content: `Chambray drinking vinegar bushwick, sustainable distillery 90's shabby chic pop-up normcore food truck ennui coloring book shoreditch brunch. Messenger bag shaman flannel, chicharrones blue bottle cred chartreuse mlkshk disrupt fingerstache keffiyeh crucifix enamel pin. Cold-pressed 90's austin tattooed cloud bread af truffaut echo park jean shorts mlkshk slow-carb. Cronut lumbersexual taiyaki next level chia marfa prism authentic, letterpress keffiyeh literally bitters retro. Whatever hammock kickstarter af edison bulb tofu asymmetrical bitters pour-over salvia hexagon vaporware. Af paleo church-key hell of. Woke single-origin coffee vape flexitarian tbh.

    Authentic cloud bread craft beer 3 wolf moon. Locavore hoodie poke hella craft beer art party organic, subway tile iPhone PBR&B ramps vice. Tousled mixtape coloring book truffaut tofu, crucifix scenester gastropub plaid tattooed keytar helvetica keffiyeh vice copper mug. Raw denim gastropub everyday carry, iceland flannel viral green juice synth.
    
    Etsy flexitarian 8-bit, four loko chambray artisan yr gochujang. Actually pok pok hammock, squid pop-up tumeric tumblr yuccie cardigan kitsch fam kombucha air plant thundercats lyft. Normcore jean shorts tacos, mustache lumbersexual crucifix meditation VHS tousled wayfarers cronut gentrify. Cornhole lomo keytar kitsch hammock aesthetic cray irony microdosing. Palo santo tousled lumbersexual, pabst squid everyday carry flexitarian flannel kogi la croix bushwick taiyaki photo booth woke kombucha. Vape sriracha master cleanse XOXO helvetica post-ironic single-origin coffee, ramps typewriter succulents.
    
    PBR&B tumblr pork belly 8-bit, hammock pickled hashtag pitchfork. Sustainable synth man bun, letterpress readymade cornhole next level godard subway tile lo-fi chartreuse artisan. Meggings green juice twee art party, biodiesel mlkshk semiotics enamel pin sartorial poutine tilde messenger bag viral synth la croix. Palo santo bicycle rights butcher, master cleanse chartreuse bushwick distillery artisan. Chillwave wayfarers twee, paleo slow-carb fingerstache aesthetic PBR&B. Austin marfa cronut, quinoa humblebrag tousled cardigan umami.
    
    Lo-fi pickled gluten-free hexagon. Man bun green juice kombucha intelligentsia health goth pour-over, iPhone venmo blog snackwave migas godard. Gentrify tumblr af, wolf authentic mustache shoreditch put a bird on it typewriter. Neutra humblebrag pour-over tousled, literally migas cardigan truffaut live-edge hammock echo park air plant leggings +1 DIY. Letterpress cliche cronut church-key.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Hotel or Airbnb? What would you choose?',
    content: `Hashtag blue bottle listicle disrupt fanny pack chartreuse banjo brunch. Freegan selvage try-hard, prism narwhal street art shaman mixtape knausgaard hexagon gochujang tattooed everyday carry seitan pinterest. Green juice taxidermy sustainable enamel pin. Tbh pok pok truffaut, normcore roof party tacos pitchfork food truck poutine meh fixie plaid tattooed blog cardigan.

    Etsy mumblecore live-edge scenester four loko bitters gentrify prism subway tile. Flexitarian tilde quinoa, slow-carb venmo hashtag poke. Raclette kickstarter lumbersexual coloring book quinoa mixtape before they sold out put a bird on it raw denim hell of single-origin coffee. Roof party drinking vinegar umami fashion axe venmo asymmetrical hella hell of mustache cloud bread lomo yr selfies. Pork belly succulents brooklyn snackwave coloring book hella man braid, salvia twee you probably haven't heard of them. Jean shorts pok pok street art four dollar toast lumbersexual slow-carb distillery vegan.
    
    PBR&B gochujang sriracha cred. Selvage retro palo santo intelligentsia art party roof party prism farm-to-table kitsch mustache gastropub cornhole four dollar toast chia crucifix. Aesthetic palo santo post-ironic, shaman offal fanny pack fashion axe tousled. Enamel pin ramps VHS, air plant narwhal paleo organic banh mi venmo. Fixie activated charcoal austin polaroid echo park farm-to-table post-ironic snackwave salvia ethical slow-carb art party thundercats freegan. Occupy helvetica la croix, celiac iceland prism mixtape twee knausgaard kombucha lumbersexual echo park man braid portland offal. Listicle chartreuse semiotics ugh polaroid la croix photo booth sriracha pour-over vaporware cray humblebrag.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Proposing to my fiancé in Florence, Italy.',
    content: `Adaptogen tilde church-key snackwave four dollar toast microdosing. Sartorial enamel pin shaman, you probably haven't heard of them raw denim crucifix meggings lomo squid 3 wolf moon artisan paleo umami. Small batch seitan lyft health goth schlitz cardigan ugh vape lo-fi truffaut roof party cliche pitchfork cold-pressed heirloom. Fingerstache man braid la croix XOXO, keytar intelligentsia everyday carry fam hell of tacos. Selvage semiotics stumptown knausgaard tofu salvia echo park celiac.

    Copper mug celiac seitan tattooed chambray intelligentsia authentic shoreditch shabby chic gastropub forage edison bulb biodiesel chillwave. Bitters kitsch chambray umami, squid succulents lyft butcher. Sustainable lumbersexual gluten-free deep v, celiac butcher put a bird on it squid scenester flannel tattooed single-origin coffee DIY narwhal. Readymade vegan blue bottle af chartreuse. Asymmetrical sartorial mlkshk salvia master cleanse irony tousled cliche gentrify leggings drinking vinegar ennui cardigan mumblecore hoodie.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aXRhbHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Flying during Covid.',
    content: `Cold-pressed truffaut thundercats, celiac chambray occupy woke franzen tousled raclette DIY jianbing letterpress pour-over. Bespoke meggings bitters tofu pour-over pabst. Squid everyday carry pork belly keffiyeh cred selfies godard pinterest VHS ugh hoodie lomo. Iceland raclette authentic pinterest beard hexagon XOXO +1 banh mi shoreditch. You probably haven't heard of them lo-fi jean shorts, copper mug hella art party try-hard banjo hot chicken selfies viral retro health goth lyft. Farm-to-table microdosing irony, whatever butcher four dollar toast tofu.

    Prism 90's echo park meditation. Skateboard YOLO iceland pok pok, occupy typewriter vice pitchfork. 3 wolf moon 8-bit small batch freegan wayfarers, master cleanse scenester tbh heirloom swag pabst. Disrupt cred squid cardigan, tousled banjo flexitarian subway tile air plant jianbing irony palo santo green juice literally asymmetrical. Mixtape poutine authentic sartorial crucifix leggings ethical skateboard pork belly occupy trust fund offal hella. Tilde air plant hell of, locavore synth tofu pabst swag glossier heirloom copper mug shaman retro brunch.
    
    Seitan vinyl heirloom, roof party raw denim craft beer forage. Affogato tumblr neutra locavore selvage leggings green juice keffiyeh. Tumblr keytar authentic umami dreamcatcher, +1 squid flannel cold-pressed adaptogen hella direct trade listicle. Banh mi church-key lyft actually, slow-carb 8-bit lo-fi kale chips activated charcoal banjo austin. Irony disrupt asymmetrical small batch, snackwave williamsburg tacos blog 3 wolf moon la croix sriracha coloring book swag photo booth mlkshk. DIY tbh subway tile direct trade man braid gentrify.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycGxhbmV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1400&q=60',
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'What to Know About the Guidelines on Vaccinated Travel',
    content: `Raw denim air plant lo-fi mlkshk ennui copper mug shoreditch post-ironic messenger bag actually. Ethical banh mi green juice tote bag, locavore put a bird on it etsy poutine. Marfa vape hella, hell of chartreuse you probably haven't heard of them skateboard. Skateboard gentrify plaid edison bulb truffaut master cleanse fingerstache cred. Bespoke four loko vegan brooklyn you probably haven't heard of them next level hashtag. Chicharrones ennui poutine kale chips actually bitters vaporware tbh you probably haven't heard of them post-ironic occupy YOLO. Stumptown neutra pug narwhal marfa knausgaard keffiyeh yuccie taiyaki YOLO hella humblebrag fashion axe farm-to-table DIY.

    Edison bulb mlkshk lumbersexual tofu vape occupy gluten-free woke pork belly retro. Pour-over literally tote bag keffiyeh, you probably haven't heard of them wolf thundercats YOLO. Kale chips art party fingerstache polaroid tumblr blue bottle squid before they sold out snackwave chartreuse. Yuccie hot chicken trust fund enamel pin knausgaard squid semiotics lyft hammock succulents hashtag blog tumblr schlitz pop-up. Gochujang keffiyeh cliche la croix activated charcoal slow-carb, subway tile migas art party keytar woke man bun. Ethical gluten-free cray cloud bread pop-up butcher.
    
    Taxidermy pop-up dreamcatcher palo santo 3 wolf moon you probably haven't heard of them artisan quinoa ethical. Fingerstache bespoke la croix poke woke farm-to-table. Flexitarian jean shorts bicycle rights cold-pressed, four loko 8-bit kombucha activated charcoal forage skateboard organic celiac. Cronut cliche hexagon, raclette celiac readymade farm-to-table skateboard 3 wolf moon tilde.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1615843109264-d4447d67aecf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'TEXAS ROADTRIP!!!',
    content: `Coloring book chambray deserunt succulents typewriter leggings art party lomo fanny pack polaroid hella. Irure offal laboris craft beer, iceland cornhole sint truffaut officia. Poke farm-to-table waistcoat, jianbing yr chartreuse quinoa excepteur magna banjo vape green juice. Helvetica kogi bushwick bicycle rights literally elit ad leggings artisan crucifix meggings unicorn ut air plant. Deserunt man braid thundercats waistcoat hashtag plaid, fingerstache labore raw denim pok pok street art single-origin coffee velit cred.

    Occupy master cleanse post-ironic laborum humblebrag food truck. Activated charcoal lo-fi poutine kinfolk brooklyn cray messenger bag enim humblebrag fanny pack aliqua esse mlkshk food truck. Gentrify occupy wayfarers copper mug tattooed tofu officia blog echo park cray. Qui ut vice direct trade lomo vegan YOLO small batch officia elit 3 wolf moon forage actually. Ut tempor hexagon squid, hoodie neutra non dolor listicle vexillologist. Hexagon disrupt dreamcatcher taiyaki brooklyn enamel pin.
    
    Pop-up scenester swag kogi la croix. Woke salvia laborum etsy ennui +1 dreamcatcher air plant. Activated charcoal anim neutra master cleanse godard freegan. Banh mi next level gluten-free laboris celiac ut messenger bag selvage. Nostrud subway tile proident twee cold-pressed succulents eu deep v listicle raclette wolf iPhone duis kinfolk. Tumeric tumblr wolf four dollar toast tote bag in keffiyeh before they sold out deep v heirloom. Letterpress pitchfork iPhone jean shorts, dolore dolor vice.    
    `,
    imageSrc: 'https://images.unsplash.com/photo-1492635407573-27290f77f726?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGV4YXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Backpacking Across Asia.',
    content: `Elit retro quinoa thundercats, ut church-key single-origin coffee photo booth sustainable ramps air plant lorem freegan. Street art adipisicing church-key migas austin retro single-origin coffee iceland. Chartreuse cloud bread wolf intelligentsia anim. Magna yuccie +1 glossier heirloom church-key flannel food truck freegan. Tilde ethical paleo wayfarers poutine craft beer farm-to-table freegan af.

    Proident excepteur edison bulb authentic, tumblr forage roof party chambray woke kogi. Waistcoat copper mug dolore hot chicken, hammock cloud bread wolf kogi pop-up taiyaki tumeric chambray cold-pressed. Mixtape wolf butcher green juice. Laboris pop-up air plant, af yuccie qui brunch. Edison bulb direct trade cillum microdosing nostrud.
    
    Pok pok officia anim put a bird on it. Wolf health goth leggings, yr tempor tbh typewriter art party stumptown selfies wayfarers. Butcher disrupt dreamcatcher veniam lyft DIY mollit fashion axe austin flexitarian kale chips. Occaecat cornhole mollit man braid roof party qui, four loko aesthetic. Mustache prism affogato, tattooed unicorn tote bag photo booth salvia est. Retro messenger bag keytar ea DIY truffaut. Banjo in irure craft beer, officia enim bespoke pour-over literally.
    
    Mlkshk pitchfork occaecat enim esse master cleanse raclette in mustache chicharrones. Hexagon health goth shabby chic, cold-pressed pinterest lorem XOXO duis copper mug quis. Kitsch chillwave yuccie letterpress unicorn. Consequat chillwave deep v labore. +1 meditation four dollar toast, hell of tempor polaroid et. Salvia poke typewriter lyft. Occaecat raclette vice man braid lyft cloud bread, cupidatat XOXO street art vexillologist.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1528195135899-cf5d190bb3a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja3BhY2tpbmclMjBhc2lhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Wine Tasting in California.',
    content: `Chartreuse viral vinyl bespoke PBR&B single-origin coffee. Pinterest copper mug godard meditation kickstarter roof party, freegan celiac. Fashion axe kogi put a bird on it cray jianbing migas affogato, hot chicken kinfolk. PBR&B plaid migas adaptogen fam viral bushwick excepteur officia mumblecore man bun health goth 8-bit. Tacos subway tile green juice, you probably haven't heard of them schlitz salvia food truck est coloring book raw denim. Mixtape food truck tattooed live-edge vinyl hella.

    Tilde ut poke, tempor pug meditation letterpress forage listicle godard bespoke. Schlitz pork belly qui authentic poutine plaid. Consectetur godard et, pork belly iPhone fixie bushwick DIY pinterest aute. Nulla craft beer in neutra. Vaporware hammock adipisicing skateboard. Skateboard lyft single-origin coffee, tumeric tilde mixtape affogato flannel bitters taxidermy helvetica banh mi photo booth.
    
    Eiusmod farm-to-table whatever bicycle rights vice pitchfork food truck tacos cillum succulents veniam street art offal sustainable minim. Laborum crucifix tacos, affogato occupy shabby chic velit tbh cray. Small batch everyday carry squid, aesthetic tumeric fashion axe dolore sustainable hot chicken. Viral asymmetrical dolore swag, hammock hot chicken ut edison bulb incididunt wolf vape tofu la croix you probably haven't heard of them aesthetic. Bicycle rights pour-over dolore unicorn in in. Cronut tbh viral officia tumeric microdosing, cupidatat echo park post-ironic esse.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsaWZvcm5pYSUyMHdpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    title: 'Tips on Planning a Family Trip to DISNEY WORLD.',
    content: `Venmo green juice lorem jean shorts enamel pin sriracha hashtag deserunt. Vegan ut bespoke hexagon laboris dolor viral godard et tempor, air plant before they sold out synth. Trust fund quis enim fingerstache. Freegan proident ipsum paleo, raw denim prism ullamco put a bird on it vape small batch DIY ut in master cleanse. Seitan la croix meggings, disrupt unicorn synth quinoa pickled butcher plaid nostrud fingerstache. Quinoa jean shorts 90's cloud bread master cleanse sint offal tumeric, exercitation helvetica hexagon. Health goth lo-fi irure quinoa, shaman distillery selfies enamel pin.

    Taxidermy consectetur paleo shabby chic viral. Yuccie bespoke eu sunt gluten-free disrupt keytar vaporware flannel ugh minim. Umami roof party forage neutra, cliche vegan iceland fixie affogato hexagon taxidermy. Consequat flannel pop-up you probably haven't heard of them humblebrag labore artisan qui cray squid cupidatat art party sed mumblecore. Intelligentsia pitchfork letterpress aute exercitation asymmetrical sed subway tile four dollar toast sriracha succulents listicle skateboard cillum. Ex tattooed banh mi etsy, dolore et stumptown hot chicken vexillologist squid poke skateboard.
    
    Cred enim hot chicken gentrify. Pork belly raclette tumeric put a bird on it freegan man bun aliquip distillery. Shaman squid velit jianbing mixtape pop-up church-key af. Proident banjo wolf ramps magna seitan.
    
    Pariatur bespoke lumbersexual irony seitan kinfolk. Palo santo humblebrag shaman, anim YOLO vinyl in. Beard pabst iPhone aesthetic, laboris neutra minim selvage. Lomo wayfarers ea venmo, affogato fanny pack microdosing ut kogi eiusmod waistcoat thundercats mustache wolf.
    
    Et nisi quis, air plant forage enamel pin health goth pop-up laboris authentic. Irony forage bespoke master cleanse live-edge tacos four dollar toast in viral hell of vape keffiyeh. Cloud bread plaid keffiyeh id incididunt aliqua twee quinoa raclette hexagon pinterest prism freegan. Commodo meggings art party kombucha +1 VHS, retro flannel ennui do laboris voluptate iPhone typewriter 90's. Dolor marfa whatever, lyft non letterpress man bun ut glossier eu wolf master cleanse quis street art.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1607380333842-c4fbb7762b27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGRpc25leSUyMHdvcmxkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
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
  {
    content: `SO COOL.`,
    articleId: 9,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `I'm definitely intrigued.`,
    articleId: 14,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Reading this made me jealous. :')`,
    articleId: 7,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Holy smokes!`,
    articleId: 10,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    content: `Well written, truly.`,
    articleId: 11,
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
  {
    followerId: 7,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 8,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 9,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 10,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 11,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 12,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 13,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 14,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 15,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 16,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 17,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 18,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 19,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 20,
    followingId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 7,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 8,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 9,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 10,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 11,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 12,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 13,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 14,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 15,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 16,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 17,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 18,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 19,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 20,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 11,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 12,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 13,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 14,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 15,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 16,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 17,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 18,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 19,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 20,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 7,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 8,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 9,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 10,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 11,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 12,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 13,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 14,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 15,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 16,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 17,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 18,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 19,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 20,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 10,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 11,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 12,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 13,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 14,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 15,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 16,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 17,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 18,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 19,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 20,
    followingId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

const stampsData = [
  {
    articleId: 7,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 1,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 2,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 3,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 4,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 14,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 13,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 12,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 4,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 7,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 14,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 6,
    userId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 8,
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 6,
    userId: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 15,
    userId: 26,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 8,
    userId: 28,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 9,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 11,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 14,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 15,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 9,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 8,
    userId: 28,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 5,
    userId: 21,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 9,
    userId: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 15,
    userId: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 14,
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 13,
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 12,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 11,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 11,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    articleId: 13,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },

]

module.exports = {
  articlesData,
  commentsData,
  followData,
  stampsData
}