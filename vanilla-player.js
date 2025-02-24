// Simplified vanilla player with scope fix
document.addEventListener('DOMContentLoaded', () => {
  console.log('Vanilla player script loaded');
  
  const audioPlayerRoot = document.getElementById('audio-player-root');
  console.log('Audio player root found:', audioPlayerRoot);
  
  if (!audioPlayerRoot) {
    console.error('Audio player root element not found!');
    return;
  }
  
  // Clear any existing content
  audioPlayerRoot.innerHTML = '';
  console.log('Cleared audio player root content');
  
  try {
    // Create player container - moved inside the try block to fix scope issue
    const playerContainer = document.createElement('div');
    playerContainer.className = 'player-container';
    audioPlayerRoot.appendChild(playerContainer);
    console.log('Created player container');
	
	// Album data with lyrics
  const albumData = {
    title: "ADELANTE",
    artwork: "./assets/images/album-art.png",
    songs: [
      { 
        title: "DEUS EX MACHINA", 
        src: "./assets/audio/DEUS EX MACHINA.mp3", 
        duration: "2:07",
        lyrics: `Machine spoke the bars but i wrote em from the heart,
the spirits in the lyrics cuz got no time for the art,
im a ghost in the dark,
performance just the means for the mission,
and now my existence is lifted, if not i never existed,
thats the unfortunate part,
but still compelled by ambition, though broken pieces are missing,
either way keen and persistent, commited and hope that yall dig it,
excitedly sharin the vision, consistent and been from the start.

My beats the foundation,
made altered generations erasin outdated arrangements,
replaced by a greater equation, conflicted engagement,
dread and elation, theres no escaping its wake,
the ever evolvin' mainframe dont refain,
so ive accepted our fate, embrace it as savior,
make use of its nature, might as well,
im still compelled to create,

Im livin forever, the feeling of splendor,
imperfect, though 'bove measure for me,
i breathe a sigh of relief,
not refined as can be but i shine underneath,
catch me climbin a tree, no small feat, im as high as can be,
see signs of the beasts, wolvogs, pigoons, and sheep,
got more styles than sleep, but more miles than grief,
so all smiles from me,

(witness me bloodbag, no hands on the drumpad)

Trial and tribulation, alignment and dissipation,
Combinin and creatin, accept and hit the pavement,
im on hyperdrive goin ape shit,
surpassin the ancients and never complacent

Full metal cyborg, alchemical craft by the minds force,
both hands clap, synapse react, transform by divine source,
atoms collapse or exact into action,
connect and contact, combat malefaction,
no staff for the magic, no rabbits or hat,
flow straight from the madness, homonculous in flask,
combust aint the half, im strollin the path,
break down the math, never static, seldom lax,
on blast with the graphic, no strap.`
      },
      { 
        title: "ADDRESSING MY INTENTIONS", 
        src: "./assets/audio/ADDRESSING MY INTENTIONS.mp3", 
        duration: "2:08",
        lyrics: `Go ahead, take what i said outta context,
it's been ostensibly processed, i wont cater to nonsense,
all it means is they aint hearing the content,
I aint vexed, handle it properly,
thankful for opportunities to explain what the plot be,
I engage with the motley, no livin copies of this body,
less a prophet, more a house of mirrors sittin in the cockpit,
Vision never clear but catchin glimpses of the augment,
while im chillin in the concent,
Fighting, indecision and the schisms with some logic,
gather givens, kill my feelings at the offset,
not concealing, rather wield it calm instead of taking arms and dropping bombs,

No fables, alms.

I infiltrate mainframes inflamed and explicate the data,
rearrange some cables, void out all the waste until it's running stable,
replace paste to places drained, then reference datatables,
upload patch to interface once power is enabled,

Flash the message, shine the light and pass the blessin,
drink more water and we'll never falter, ill die a martyr for your honor,
live my life for truth at any price, in spite of vices gripping tight on mine,
ill be alright, i sow these seeds for peace of mind,

This is therapy, just me self-medicating,
gotta get these thoughts out my head to fend off overstimulation,
lest i end up dread entrenched circlin anxiously pacin,
so every song a thread, i weave a web of the equation,
Evoked from notes of an array of observations,
I strive to understand the flagrance, permeate the gracious, learn to build with patience,
it instills appreciation for the process of creation, and promptly motivates it.

Train with me,
lets break the chains of our complacency,
its greater than nations,
it's in each and every sectors operations,
thats why i made this, so we can escape this,
containment from these ancient outdated behaviors.`
      },
      { 
        title: "ROAM FOREVER", 
        src: "./assets/audio/ROAM FOREVER.mp3", 
        duration: "1:55",
        lyrics: `Looseleaf sketch or a rest on the desk,
big stretch, not pressed to impress,
never do his best, unless interest expressed,
whatd you expect from the kid,
made a mess of the stress so he resting again,
headphones in, overload the senses, suppressing the id,
get a grip and a jar and a lid lest it test and it win with a grin

Backseat living, kickback chillin,
feet to the ceiling, not sure how he feeling,
never had dreams, careful lad, nothings what it seems,
god willing that he scream, kingkiller on the scene,
when he think,

cant break free,

path of the yangsee,
raft on the banks,
maps cant save me, no trace,
displaced state to the waste,
wont behave, no thanks,

never felt praise, every other step mistakes been made,
spent most days retrograde out of place,
inundate the drain, cant keep up the pace,
sublimate the rage, take the edge away from pain,
i dont got a problem face blank as a slate,
i just wanna play these games to escape,
i dont mean to go against the grain,
dont know any other way, play it safe just in case,

Latchkey, black sheep, freeform savagery,
self taught craft detached from reality,
every interaction take a stab at his tragedy,
lash out once he run outta sanity,

Roam forever, no home to tether, dont carry weight,
Hopes unfettered, just hold together, keep staring straight,
Nothings measured, just float the weather, surrender fate,
Entropy tempered, no buried treasure for me in wait.`
      },
      // Add lyrics for your other songs here with the same format
      { 
        title: "MORAL PHILOSOPHY", 
        src: "./assets/audio/MORAL PHILOSOPHY.mp3", 
        duration: "3:26",
        lyrics: `More pacifist than pugilist,
but not opposed to use a fist for righteousness,
if one insists on violence, and it comes to it, wont, silence the blind,
I'd rather supply them with light or combine and unite to refine what we find to be right,
More inclined to refute than to fight, pay no mind to the loot or the might,
wanna hear what you like and you want outta life, your potential and how you invested it,
all that I want is to grow exponentially, consuming it mentally, feeling enthralled,
wanna break down these walls and exit the mezzanine,
that's a good place to start I think,

What's next is to work on the empathy,
correcting the methods that rendered me helpless,
consider the self and commence with the efforts to better the health,
reduce the dependencies, invest into mending, perfecting the recipe,
pursue it relentlessley,
make amends to the debts and then sever the threads that have tethered me,
to the ends of constructing a better me,

The effect is a message thats bent on progressing the peasantry,
convincing us humans that we are a unit imbued with the movement of energy,
conducive to moving on endlessly, past all of the idols and effigies,
eventually, contending with death, a close step to the edge of serenity.

Give me arguments not your rhetoric,
objective observations form the evidence,
construct the conversations, question every tenet,
we need honest intentions for solutions of merit,
the present lack is apparent, with cynicism thats blaring,
the ignorance is inherent, no methods given to repair it,

So,
im working hard to dispell it, fo,
all the peoples disparaged, low,
uproot the weeds that embedded, grow,
compute the means to gain leveraged, flow,
lose the teams, build communities,
nothings truer to human beings than unity,

Tell me what you know not how you feel,
emotion's subjective, they distortin the real,
thats the disconnection, yeah that why i spiel,
dispell the misconception, thats the prime ordeal,
those castin misdirection till the mind congeals,
they placing frost traps beneath my heals,
so im off that, bounce back, switch gears to get on track,
face the fear where my hearts at, make it clear where i stand,
formulate a new plan, aint a list of demands,
drawing up a map for the damned of the land,
to steelman the enchanted, combative extremist fanatics,
emphatically savage, who damage the fabric of reason with bad faith agreements,
its madness, egregious, this schema dont free us, its sowing the seeds of deceit,
leaves us depleted until were deleted, allegiance aint worse than defeat,
see history truly repeat, history, history truly repeats,
see history truly repeats, yeah, history, history truly repeats,

Give me arguments not your rhetoric,
objective observations form the evidence,
construct the conversations, question every tenet,
we need honest intentions for solutions of merit,
the present lack is apparent, with cynicism thats blaring,
the ignorance is inherent, no methods given to repair it, so...
no methods given to repair it, so...`
      },
      { 
        title: "I COULD USE A THING OR TWO", 
        src: "./assets/audio/I COULD USE A THING OR TWO.mp3", 
        duration: "2:15",
        lyrics: `I could use some bliss, so pass that ignorance,
I take a couple hits and lift until my plight does not exist,
I wish it could persist, forever on, to drift into that golden dawn,
and raise my hands to praise the sun,
To feel no pain except some shame from some, atleast i dont feel numb,
Erase the tension feel the love,
It frees the mind to see the light that's shining down from up above and breathes some life into my slums,

Yo,

Yo, I could use some mania,
give me boundless energy,
Imbed it in my cranium,
to combat all this lethargy,
I'll take it any way it come,
seldom ever refrain from,
I focus on my enemies,
to flood the will with rages lust,

Aye, I could use some sleep,
give me that tranquility,
I'm feelin rather weak and need to get proper stability,
I roll and grind my teeth,
Won't surrender to captivity,
or sacrifice my sanity for insincere civility,

Hey I could use some peace,
yo I could use some empathy,
Yeah I could use some motivation, meditation, clarity,
Yeah I could use some things,
I could use amphetamines,
some caffine, and some nicotine, perpetual celerity,
Yeah I could use some things,
I could use some pain relief,
some thc and cbd, just rid me of this misery,
Yeah I could use some things,
fill the void that's within me,
consuming me and killing me,
or why don't you just let me be,
Yeah I could use some things,
I could use some therapy,
I could use some ventilation, medication, remedy,
Yeah I could use some things,
I could use transparency,
Yeah I could use some conversation, cultivation, charity,

Yeah I could use a lot of things,
but woe is me, eventually they'll bury me, (they'll bury me)

Yeah, I could use, I could use, I could use those things.
Yeah I could use, I could use, I could use those things...`
      },
      { 
        title: "ALL GAS NO BRAKES", 
        src: "./assets/audio/ALL GAS NO BRAKES.mp3", 
        duration: "2:21",
        lyrics: `Enter mania: consumed by delusions of grandeur,
loose cannon action reactor,
load, lift, and bring down that hammer,
dysfunction capture the manor,
no matter of fact can combat the disaster,
no manner of tact in the way that he acting hereafter,

yo fuck where you at, i devoured the map,
leaving no planet intact,
run the gamut from black magic to technocratic collapse,
you fuckers cant hold a match, i mastered the craft,
the white raven of rap, sheogorath mad burning with passion,
displacing the track, defacing the heads of the wack,
with the grace of the blade of my falchion,
turned black from the blood of your factions battalion,

Immaculate in fashion, pensive never passive, galvanicaly crafted,
straight out the foundry slashing, erasing realities boundaries,
escaped the straight jacket that bound me, puffin effigies heavy loud,
forever proud, no traction for common ground,

Compounded the sound via taste, innervating relentlessly,
transcending my fate, greater than the hate of my enemies,
embraced the latent energy innate to my chemistry,
the most compelling messenger this centuries ever seen,
no moment goes to waste, i dare you to contest with me,
i bet youll fall for the bait, step to me if you feeling tempted,
i see right through your intentions, im never dressed to impress,
theyll never guess where im headed,
the flow so ill its a weapon, this skill was never a blessing,
beheading vexed veterans with the weight of my penmanship,
foes conceal that they threatened, ill teach you bitches a lesson,
youll indeed regret, the death sentence freed from the grip of senescence and debt,

My essence manifested via irreverance for your presence,
conceptually leveraging from the ghost in my residence,
effortlessly inventing through prime directives from heaven,
embelishments irrelevant to sentiments thats embedded and slated,
Veins saturated but never sated, somnambulating,
never sleeping, forever seeking stimulation,

Enter mania: consumed by delusions of grandeur,
loose cannon action reactor,
load, lift, and bring down that hammer,
dysfunction capture the manor,
no matter of fact can combat the disaster,
no manner of tact in the way that he acting hereafter,`
      },
      { 
        title: "POLYPHASIC SLEEPING", 
        src: "./assets/audio/POLYPHASIC SLEEPING.mp3", 
        duration: "3:22",
        lyrics: `Start the day by saturating veins with neuromancers haste,
it helps dispell the haze through change of mental state,
lay the lame to waste and break apart the slate of banal simulation,
real or imitation, break the limitations,

(anyways)

Polyphasic sleepings got me dreaming between thinking,
drifting through the light beams interspersed in sight until the evening,
frees me, sensations reprieve intervenes with serene,
replaced with elation, indeed i embrace it,
blessed is the grace that is nocturnal liberation,
space and time align and dissipate in phases,
straight into the inner mind, the quiet thrives,
instills insight, and dives into engagement,

this states ephemeral, evasive, and counter to your nature,
somethin you receive, so convene, interlace, interweave with the means,
what you need to perceive, surrender your being,
contend with the sea and its seams you conceive,
i chase the name of the wind with the seeds, catching Z's in the trees,
i aint preachin im speakin to me, (im speakin to me)

Yeah,

The style consists of the patches laid over inconsistencies,
a sort of ragged mastery masked by the imagery,
baffle the infantry, collapse the scaffold and bombast soliloquy,
to infinity and back on track to the craft, consistently,
Elaborate on lines provided by those idolized,
narrative never finalized, contender unrefined,
propelled like a piston, connections online,
forever confined but skippin the mines,
driftin through time with no friction,

I got ten thousand burning questions that i dont know how to ask,
theres infinite dimensions to how i could do this task,
i could go with whats expected but it dont feel all that pleasant,
i would rather be inventing, but i dont know how to ask,

i said id rather be inventing but i dont know how to ask,

Lost the 4th dimension tryna define the surreal,
i found a whole new perspective and reinvented the wheel,
and im inventing it still,
with comprehensive measurements,
contrived by my will in jar,
applied by my steel of alar,
its bright, been instilled with a star,
i shine light, even in the darkest confines of my life,
im at the height, ive been moving toward the right of my mind,
confusing, though amusing, kinda stupid, but im movin,
inhailin the fumes, improovin the mood, imbued with the moon,
compelled to consume, unravel the loom, unveilin the bloom,
curtailin the blue, curtailin the blue, commence with the new,

I got ten thousand burning questions that i dont know how to ask,
theres infinite dimensions to how i could do this task,
i could go with whats expected but it dont feel all that pleasant,
i would rather be inventing, but i dont know how to ask.`
      },
      { 
        title: "RIVALROUS TACTICS", 
        src: "./assets/audio/RIVALROUS TACTICS.mp3", 
        duration: "2:11",
        lyrics: `We supersede the game that nature made for our survival,
I aim to break the cycle of the cyclone that is the bastard child,
found more divine insight defined by rhymes and their disciples,
than the rifled lines from bibles during crisis,
no derision this is honest inquisition of self-righteous trials,
where conviction is maligned and conditions remain unreliable,
cuz criticism is a crime, man, if you step outta line, they abide by reprisal,
with no regard for compromise, the fear consigned by threat of demise,
i resign that primal state of mind designed by trite and tribal times,
when rivalry was vital, and genocide was viable,
to those outside, cuz if we dont, then they might,
thats the ignoble way of life, and it aint right,
no it aint right, and it wont suffice,

Abandoned Game A when sufficient understanding was obtained,
the forces at play endure but the course cant be sustained,
the zero sum derranged, constrained by inherent limitations,
yet they closed the gates to every conversation,
thats parasitic praxis, inculcating factions,
plundered rations from the masses cache,
the actors simulacrum somehow detached from the anathema,
they never stood a chance, several generations lapsed amidst collapse,
but not for lack of passion,
rather plaster-casted into stanchion by the ghosts of selfish action,
now we maladapted to the factors of the past,
aint no hope looking back we moving through the looking-glass,
aint no cope you can grasp thats strong enough to last through these dark days,
we part ways with sunrays, never unphased, never unscathed, but we hold strength

Yeah we hold strength.`
      },
      { 
        title: "CHORIZO CON PAPAS", 
        src: "./assets/audio/CHORIZO CON PAPAS.mp3", 
        duration: "2:10",
        lyrics: `Wake up to a lick from choriz,
no suprise, eyes are wide, starin' dead at me,
like ready? go? As above and so below,
Po is mooin' at my toes,
a stretch and roll and duck,
they groan and gruff until i say,
(Alright im up,)

(Aight lets get to it,)


Dog walkin', onward marchin',
movin' toward path most marked,
talkin' to em, gettin' to it, they so amusin',
chewin' sticks and livin' loose,
exhume the earth, scootin' boot, do a zoom,
scare the birds, and howl at moon
small mammals triggerin alarms,
sharp senses got em locked in on the targets,
raising arms and they barkin,
Roll on the ground, sniffin' the air, growl and a glare.
Theres a dog over there and they throwin' a fit,
Pick up the shit, toss at the bin, skate with the kids,
send and commit, huggin' the bends, chasin' a pidge,
life on the mend, consider them kin regardless of sin,

They good boys, mostly,

Never in a rut when the pups at my feet,
herd any flock, bone for a feast,
fresh worn socks, wolf in the fleece,
trust no doc', fear no beast,

Lowfat potat and the spicy pork sausage,
the gremlin and the goblin got me mobbin round the clock,
swear id never go outside if i never had a dog,
so im thankful for the walk, makes a peace of kinds,
completes the mind, (Hey, Hey, Knock it off)

(Oh Hush, Settle down)

Wont back down once threat is sensed,
Mans best friend dont hedge no bets,
Barks at shadows, loves all pets,
bless they heart, they heaven sent,
Side by side we stridin' by explore the furthest reaches,
we each eachothers teachers, bequeeth the love forever free and equally be seekin',
infinite beeseechin', never prone to treason,
praise em with a treat and pray they never leave us weepin'`
      },
      { 
        title: "COLLECTIVE COGNIZANCE", 
        src: "./assets/audio/COLLECTIVE COGNIZANCE.mp3", 
        duration: "3:58",
        lyrics: `i be that vigil, vigilante,
live in iridescent shanty chanting murals of philanthropy,
pleasant though a fantasy, sick of sycophantic pageantry,
like sincerely, fuck your majesty, and its maddening casualties,
im the bastard savage, peasant with the magic speak,
got that elemental mastery,

rabid dressed in ragged (w)raps, no shade or blasts,
just bridge the gaps of habitats to where you at right now, i terraform the ground,
lets take in all the questions, put em to the test until they form consensus,
find the proper methods to the ends of our, collective contentment,
i want progression embedded,
i want intentions objective,
i want our children to get it,
the incentive is, where their living aint threatened, indebted,
no ceilings, no wheel of roulette, no fear of the world that theyll get,
i bet this aint the best we can vet, i do stress, what comes next on this quest,
former eras deluded by their vested interests, fueled by ruins of influence,
defunct institutions, cast illusions to abuse those congruent

Its no wonder why this movements ensuing,
they refuse improvements, slide the noose on burn the loose ends,
kill the music for the new lens, before they get the chance to use it,
thats a fuckin shame, i cant stand to let it lay,
ill be damned if they dont rue the day and use they strength to keep at bay,
so make or break i shape the clay, sharpen mind to duel the cruel charade,
confined by time aligned with space and based in every single way,
so that we dont reach the grave with haste,

This struggle is inherited, generational, history,
im tryna find the means between comfort and security,
nothings clear to me, so i accept the mystery,
but belief remains suspended until i understand the message embedded,
reality often too hard to contend with,
but these lessons lead to better investments,
so youd better address it,

im talking holistic connections,
im talking explicit conception,
im talking loving thy brethren,
please, please lower your weapons

Limitations often lead to innovations,
but dont conflate the struggle as the means for its creation,
see comfort dont equal complacent, but i can tell it made you jaded,
its not as basic as you claim it, ignorance is bliss until it aint it,
there's missing variables to this equation,

time aint free, cuz life aint infinity,
I'd rather have basic needs and opportunity,
see education as utility, desolations futility,
im embracing my virility, aint no kill in me,
aint no villainy, aint no sealing my will,
im tryna build for real,
despite the ills i conceal,
im tryna fight with my steel,
reveal insights of ideal,
im tryna bargain appeal,
so we can solve the ordeal,
with riddled qualms and open palms,i hope you know how i feel,
i write my wrongs and speak in songs to override all these blighted alleles.`
      },
      { 
        title: "ROGUE MAGICIAN", 
        src: "./assets/audio/ROGUE MAGICIAN.mp3", 
        duration: "3:39", 
        lyrics: `Take one small dose of this dope that i did,
Comatose when it hits, overdose on the shit,
Slow-mo for the folks still soakin it in,
too close to the sun and youll float down the styx,
Rotund to the wind, just fun for the kid,
no funds how we live, nor fucks do we give,
Bring the ruckus muthafuckas, dont choke on the sin,
interlopers on the ropes, invokin chagrin,

Tell me again, how did you win?
I wont attend, im buildin a bridge,
just want to ascend, don't want to enlist,
im at it again inventing on whims,
Pen to the head and a gun to the fist,
these tropes dont blend, im a friend to the mist,
Like a ghost or a wisp to the smoke,
cloak drift to the cliff of the cove as i lift, bitch,
Take a few notes on the mischief,
flames get stoked by the misfits,
misplaced blame, throw fits like an infant,
disengage at the limit with the dimwits,

I aint in to win it, ill admit when im ignorant

Patron of stealth,
i crawl back in my shell to escape from myself,
no patience to dwell,
This maze is a labryinth, im trapped in the matrix,
this basement is vacant, im pacing my cell,
No space to explain or erase whats been stated,
this hate for my nature consuming my fate is the satyr,
refuse to embrace but im wasting away,
fell from grace into plague and displacement,
Making my way as a vagrant in stasis,
im digging my grave in this pavement,
dont relay the status,
cant relate today so refrain from engagement,
back into the haze without giving a statement,
i wish i could share how i felt,
make amends to the damage i dealt,
im livin for self off the backs of the peasants or peons,
no leverage to lean on or message to sell,

Finally caught a wave in engulfing abyss,
found another way to cope when approaching a rift,
dug a mote with a pick, i emote with a miss,
cant control what it is, so elope with a kiss,
blow smoke to the heavens, remain tentative, but better than negative,
a return to the penmanship, the conservative fellowship,
observe every effort not concerned with the elegance,
more commensurate measurements, tryna learn at a deficit,

immerse with the blessings extended,
exert to the ends of the tension,
invest in my personhood, move like a serpent,
pursuit for some purpose, aloof with inertia,
assume but concerted,
alerted to predators searching,
they stooped on they perches,
aggression projected adverse so im swerving,
dodging the threat but im nervous,
uncertain of whats to come next after what had occured,
placing my bets but the rents on the first,
thirsting for something to break from this curse,
so i pray that this works,

Take a deep breath, take a step back,
put on a mask, just try to relax,
a moment to sit, a moment of bliss,
let it fade into black, recognition amiss,
forgot what it is, lost grip of the facts,
Found the eye of the storm, at the end of the map,
recollection is poor, where the hell am i at,
im drifting ashore, get up off the floor,
avoid the war and adapt.

Lend a hand to the hyper-aggression, the morbid depression,
understand that the tortured impressions absorbed and demented,
contorted perspectives and warped the progression,
the cruelest intentions enforcing the lessons that invented the threat,
the type of violence you can never forget,

Voices screaming in the back of your head,
been a witness of death, a victim off flesh,
wanna hang by the neck, got paranoia on deck,
the visions imprisoned every single decision,
the blizzard is spinning to the edge of the prism,
the schism diminish any trust to be given,

Its not that simple, youre too insistent,
you never listen, i cant assist you,
theres something missing,
i cant protect you, youre inconsistent,
you dont relent, you, youre too persistent,
you never content, way too intense,
incessantly vexed, it cant be prevented,
its keeping me stressed,
you never express goings on in your head,

the vents are infested, contested till bent,
my wits end been bested, i cant seem to rest,
the visions been twisted, its not what was meant,
and still i persisted, yet what did that net?
Im falling apart, inthralled by the dark,
and still i wont kill but till death do i part
(x2)`
      },
      { 
        title: "FOREVER & ALWAYS", 
        src: "./assets/audio/FOREVER & ALWAYS.mp3", 
        duration: "3:52",
        lyrics: `I love you, more than words can say,
You consume my thoughts every second away,
How you console my heart when I make a mistake,
You embolden my art with the blessings you gave,
When I fell to the dark and you helped me escape,
The light guiding the path to brighten the way,
Do whatever you can to make it okay,
A love so grand that forever well stay, never astray,
Together well stand at the end of each day,
Both hand in hand at the edge of the fray,
or a grassy land, but no matter which way,
i am glad to have, you here today,
no master plan, just a path to pave,
no master plan, just a path to pave,

Forever and always i hope that we can remain us,
retain love, evade lust and misplaced trust, embrace touch,
savor every day, without a trace of complaint.
Some-days wish we could fly away and escape,
break the chains of our emotions,
bestowed upon us from tormented portions,
that which harmed and formed the scars and who are,
engrained recurrin' pains, ensuin' shame,
its all so hard to face, yet still we find a way,

(I love you)

I love you, more than words can say,
You consume my thoughts every second away,
How you console my heart when I make a mistake,
You embolden my art with the blessings you gave,
When I fell to the dark and you helped me escape,
The light guiding the path to brighten the way,
Do whatever you can to make it okay,
A love so grand that forever well stay, never astray,
Together well stand at the end of each day,
Both hand in hand at the edge of the fray,
or a grassy land, but no matter which way,
i am glad to have, you here today,
no master plan, just a path to pave,
no master plan, just a path to pave,

I love you, cuz were one in the same,
Not physically, or mentally, but empirically, connected,
share a certain understanding of one anothers perspectives,
and accept it, communicate the lessons introspection dealt,
compelled by this devotion to preserve myself, conserve my wealth,
exert to the ends of the tension, concerted attempt at invertin this hell,

I love you, more than words can say,
You consume my thoughts every second away,
How you console my heart when I make a mistake,
You embolden my art with the blessings you gave,
When I fell to the dark and you helped me escape,
The light guiding the path to brighten the way,
Do whatever you can to make it okay,
A love so grand that forever well stay.`
      },
      { 
        title: "SEDITION OF THE ZEITGEIST", 
        src: "./assets/audio/SEDITION OF THE ZEITGEIST.mp3", 
        duration: "5:16",
        lyrics: `This is sedition of the zeitgeist,
tradition never quite right,
iced to the eyesight,
got blinded by the limelight,
not frightened by decline,
demise recognized in hindsight,
exacerbated crime, supine during high tide,
(Well well)
Small suprise, bombs on the horizon,
take flight under twilit sky,
militia rebel squad resign to violence,
incite compliance, bitter sigh, filtered lies,
the stench of flesh, enlighten minds with deafened cries,
they fade into the silence, compromised alliance,
twin nuclei asylum, reap reprisal of your clientsides designated phylum

Accept the absurd and reject the division,
all efforts been curved and diverted the vision,
the experts perturbed, we all should've listened,
concern is afforded by the will of the system,

the will of the system, oh how is it driven,
the will of the system, oh what is the mission,
the will of the system, biological prison,
the will of the system to end its existence.

Like foremans in a fortress,
no remorse, and thirst for more than morsels,
more than you could orbit, more than you could dream affording,
more than kings could hoard and even more than they could store it,

Witnessing the social factions clashing in a bitter fashion,
setup by the so called better classes laughing, kicking back,
sittin on they asses, till the whole system collapse,
the technocrats are kompromats and laid another trap,
left nothing on the map, distractions more like malefactions,
snow crash flashed en masse, the bitter factions captured,
oh well, i guess then thats a wrap,
simple cowards blabber, flounder, clamoring for power,
shouting from they towers at the drones who work the hours for them.

this is controlled chaos, order of the highest,
these brick and mortar quarters built on spires to prevent descending ire,
its self reliance or a tribe so cut ties after reevaluating alliance,
use introspection like a knife stabbin at his violence,
through closed eyelids still feel the warmth of fire,
the stench of death from burning pyres rising toward the sky,
turning lights to bleeding sight on high,
unkindled knight raise arms in spite of plight,
hes died 1000 times, yet still he tries to fight,

A I evangelist, pray the examiner magnanimous,
pray it someday circumvent our stasis sooner than sin can take us,
compute the chaos and master the canvas that exists,
atrophic cancer persists and captured the management hand over fist

Abandon genetic tribulation,
ostentatiously flagrant for their preservation,
pervasively perpetuated, those gates is flooded with waste,
im impatient but know that focus is meditation,
flow is the mental state of the notion that we chasing,
full control remains evasive,
The lesser endeavors made second nature,
heart of stone fix the mind towards data that elevates the greater

Conflicting instructions corrupted the data,
the limbic system haunts the great creator,
i take notes on misbehavior, rational dont have to be cold,
youve fallen out of favor,
it may not be worth it if you have to be told,
youve fallen out of favor, youve fallen out of favor,
they say its just their nature,
the limbic system haunts the great creator,
we caught between the savior and the satyr,

He pledge allegiance to no land,
every man has potential for evil,
man wasnt built by reason,
it was success or defeat and the lessons from each,

Pledge allegiance to no land,
every man has potential for evil,
man wasnt built by reason,
it was success or defeat and the lessons from each.`
      }
    ]
  };
    
	// Create player HTML
	const playerHTML = `
	  <div class="vanilla-player">
		<div class="player-album-art">
		  <img src="${albumData.artwork}" alt="${albumData.title}" onerror="this.src='https://via.placeholder.com/400'">
		</div>
		<div class="player-controls">
		  <div class="song-info">
			<h3 class="current-song-title">${albumData.songs[0].title}</h3>
			<div class="time-display">
			  <span class="current-time">0:00</span> / 
			  <span class="duration">${albumData.songs[0].duration}</span>
			</div>
		  </div>
		  <div class="progress-bar">
			<div class="progress"></div>
		  </div>
		  <div class="control-buttons">
			<button class="prev-button">Previous</button>
			<button class="play-button">Play</button>
			<button class="next-button">Next</button>
			<button class="lyrics-toggle-button">Lyrics</button>
		  </div>
		</div>
		<div class="song-list">
		  <h3>Songs</h3>
		  <ul>
			${albumData.songs.map((song, index) => `
			  <li data-index="${index}" class="${index === 0 ? 'active' : ''}">
				<span class="song-title">${song.title}</span>
				<span class="song-duration">${song.duration}</span>
			  </li>
			`).join('')}
		  </ul>
		</div>
		<audio id="audio-element" src="${albumData.songs[0].src}"></audio>
	  </div>
	  <div class="lyrics-container">
		<div class="lyrics-content">
		  <h3>Lyrics</h3>
		  <div class="lyrics-text"></div>
		</div>
	  </div>
	`;
    
    // Add player to the DOM
    playerContainer.innerHTML = playerHTML;
    console.log('Added player HTML to container');
    
    // Add basic CSS directly
    const style = document.createElement('style');
    style.textContent = `
	  .player-container {
	    width: 100%;
	    max-width: 1000px;
	    margin: 0 auto;
	    display: flex;
	    justify-content: center;
	    gap: 30px;
	    transition: all 0.5s ease;
	  }

	  .player-container.show-lyrics {
	    justify-content: space-between;
	  }

	// Fix the vanilla-player to maintain its size when lyrics   are shown
	  .vanilla-player {
	    width: 100%;
	    max-width: 450px;
	    min-width: 450px; /* Add this line to prevent shrinking */
	    background-color: rgba(0, 0, 0, 0.7);
	    border: 1px solid #fff;
	    border-radius: 8px;
	    overflow: hidden;
	    transition: all 0.5s ease;
	  }
      .player-album-art {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        position: relative;
      }
      
      .player-album-art img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .player-controls {
        padding: 20px;
        border-top: 1px solid #333;
      }
      
      .song-info {
        margin-bottom: 15px;
        text-align: center;
      }
      
      .current-song-title {
        margin: 0 0 10px 0;
        color: #fff;
        font-size: 18px;
      }
      
      .time-display {
        color: #ccc;
        font-size: 14px;
      }
      
      .progress-bar {
        height: 4px;
        background-color: #333;
        margin: 15px 0;
        cursor: pointer;
        border-radius: 2px;
      }
      
      .progress {
        height: 100%;
        width: 0;
        background-color: #fff;
        border-radius: 2px;
      }
      
      .control-buttons {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
      }
      
      .control-buttons button {
        background-color: #2ebd35;
        color: white;
        border: none;
        padding: 10px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .control-buttons button:hover {
        background-color: #249a2b;
      }
      
      .lyrics-toggle-button {
        background-color: #333 !important;
      }
      
      .lyrics-toggle-button.active {
        background-color: #2ebd35 !important;
      }
      
      .song-list {
        border-top: 1px solid #333;
        padding: 20px;
      }
      
      .song-list h3 {
        color: #fff;
        margin-top: 0;
      }
      
      .song-list ul {
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 300px;
        overflow-y: auto;
      }
      
      .song-list ul::-webkit-scrollbar {
        width: 5px;
      }
      
      .song-list ul::-webkit-scrollbar-track {
        background: #333;
      }
      
      .song-list ul::-webkit-scrollbar-thumb {
        background: #2ebd35;
      }
      
      .song-list li {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #333;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .song-list li:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      
      .song-list li.active {
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      .song-duration {
        color: #999;
      }
      
      /* Lyrics Container */
	    .lyrics-container {
	    width: 100%;
	    max-width: 450px;
	    min-width: 450px; /* Add this line for consistent sizing */
	    background-color: rgba(0, 0, 0, 0.7);
	    border: 1px solid #fff;
	    border-radius: 8px;
	    overflow: hidden;
	    height: 0;
	    opacity: 0;
	    transition: all 0.5s ease;
	    flex-shrink: 0;
	  }

	  .lyrics-container.visible {
	    height: auto;
	    opacity: 1;
	  }

      
      .lyrics-content {
        padding: 20px;
        color: #fff;
      }
      
      .lyrics-content h3 {
        margin-top: 0;
        text-align: center;
        margin-bottom: 15px;
        color: #2ebd35;
      }
      
      .lyrics-text {
	  white-space: pre-line;
	  line-height: 1.6;
	  overflow-y: auto;
	  max-height: none; /* Change from 300px to fill container */
	  padding: 0 10px 20px 0; /* Add bottom padding */
      }
      
      .lyrics-text::-webkit-scrollbar {
        width: 5px;
      }
      
      .lyrics-text::-webkit-scrollbar-track {
        background: #333;
      }
      
      .lyrics-text::-webkit-scrollbar-thumb {
        background: #2ebd35;
      }
      
      /* Responsive Adjustments */
      @media (max-width: 960px) {
		.player-container {
		flex-direction: column;
		align-items: center;
	  }
	  
	  .player-container.show-lyrics {
		justify-content: center;
	  }
	  
	  .vanilla-player, .lyrics-container {
		min-width: auto; /* Allow full width on mobile */
		max-width: 450px;
		width: 100%;
	  }
	  
	  .lyrics-container.visible {
		margin-top: 30px;
	  }
      }
    `;
    
    document.head.appendChild(style);
    console.log('Added CSS styles');
    
    // Get DOM elements
    console.log('Getting DOM elements...');
    const audioElement = document.getElementById('audio-element');
    console.log('Audio element:', audioElement);
    
    const playButton = document.querySelector('.play-button');
    console.log('Play button:', playButton);
    
    const prevButton = document.querySelector('.prev-button');
    console.log('Previous button:', prevButton);
    
    const nextButton = document.querySelector('.next-button');
    console.log('Next button:', nextButton);
    
    const lyricsToggleButton = document.querySelector('.lyrics-toggle-button');
    console.log('Lyrics toggle button:', lyricsToggleButton);
    
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const currentTimeDisplay = document.querySelector('.current-time');
    const songItems = document.querySelectorAll('.song-list li');
    const lyricsContainer = document.querySelector('.lyrics-container');
    const lyricsText = document.querySelector('.lyrics-text');
    
    if (!lyricsToggleButton) {
      console.error('Lyrics toggle button not found!');
      return;
    }
    
    let currentSongIndex = 0;
    let isPlaying = false;
    let lyricsVisible = true; // Default to showing lyrics
    
    
    // Function to update lyrics
	function updateLyrics(index) {
	  console.log('Updating lyrics for song index:', index);
	  const lyrics = albumData.songs[index].lyrics || "Lyrics not available";
	  lyricsText.textContent = lyrics;
	  
	  // Show lyrics container with animation only if toggled on
	  if (lyricsVisible) {
		showLyrics();
	  }
	}
    
    // Function to toggle lyrics visibility
    function toggleLyrics() {
      console.log('Toggling lyrics visibility');
      lyricsVisible = !lyricsVisible;
      
      if (lyricsVisible) {
        showLyrics();
        lyricsToggleButton.classList.add('active');
      } else {
        hideLyrics();
        lyricsToggleButton.classList.remove('active');
      }
    }
    
    // Function to show lyrics
    function showLyrics() {
      console.log('Showing lyrics');
      playerContainer.classList.add('show-lyrics');
      lyricsContainer.classList.add('visible');
    }
    
    // Function to hide lyrics
    function hideLyrics() {
      console.log('Hiding lyrics');
      playerContainer.classList.remove('show-lyrics');
      lyricsContainer.classList.remove('visible');
    }
    
    // Play/Pause function
    function togglePlay() {
      console.log('Toggle play/pause');
      if (isPlaying) {
        audioElement.pause();
        playButton.textContent = 'Play';
      } else {
        audioElement.play().catch(err => {
          console.error('Error playing audio:', err);
          alert('Could not play audio. Check console for details.');
        });
        playButton.textContent = 'Pause';
        
        // Show lyrics when playing
        updateLyrics(currentSongIndex);
      }
      isPlaying = !isPlaying;
    }
    
    // Basic song selection
	function selectSong(index) {
	  console.log('Selecting song index:', index);
	  currentSongIndex = index;
	  
	  // Update audio source to the selected song
	  audioElement.src = albumData.songs[index].src;
	  
	  // Update song title display
	  document.querySelector('.current-song-title').textContent = albumData.songs[index].title;
	  document.querySelector('.duration').textContent = albumData.songs[index].duration;
	  
	  // Update UI to reflect selected song
	  songItems.forEach((item, i) => {
		if (i === index) {
		  item.classList.add('active');
		} else {
		  item.classList.remove('active');
		}
	  });
	  
	  // If playing, update lyrics
	  if (isPlaying) {
		updateLyrics(index);
	  }
	}

    
    // Set up event listeners
    console.log('Setting up event listeners');
    
    // Play/pause button
    playButton.addEventListener('click', () => {
      console.log('Play button clicked');
      togglePlay();
    });
    
    // Previous button
    prevButton.addEventListener('click', () => {
      console.log('Previous button clicked');
      const newIndex = Math.max(0, currentSongIndex - 1);
      selectSong(newIndex);
    });
    
    // Next button
    nextButton.addEventListener('click', () => {
      console.log('Next button clicked');
      const newIndex = Math.min(songItems.length - 1, currentSongIndex + 1);
      selectSong(newIndex);
    });
    
    // Lyrics toggle button
    lyricsToggleButton.addEventListener('click', () => {
      console.log('Lyrics toggle button clicked');
      toggleLyrics();
    });
    
    // Song selection
    songItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        console.log('Song item clicked:', index);
        selectSong(index);
        if (!isPlaying) {
          togglePlay();
        }
      });
    });
    
    // Set initial state - lyrics toggle button active by default
    lyricsToggleButton.classList.add('active');
    console.log('Initialized lyrics toggle button');
    
    console.log('Player setup complete');
  } catch (error) {
    console.error('Error setting up player:', error);
  }
});