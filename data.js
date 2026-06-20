/**
 * ============================================================
 *  data.js — All 365 Reasons + Special Day Content
 * ============================================================
 *
 *  HOW TO EDIT:
 *  - Find the day you want to edit (e.g., day: 1)
 *  - Change the "reason" text to whatever you want
 *  - Add your own reasons for days 51–365 below
 *
 *  SPECIAL DAYS:
 *  - Edit the SPECIAL_DAYS object to add audio/video/letters
 *  - Keys are the day numbers (as strings)
 *
 * ============================================================
 */

// ─── Configuration ──────────────────────────────────────────
// !! EDIT THIS: The password = the day of the month you started dating
const CONFIG = {
  PASSWORD: "22",                        // Change this to your start date day

  // The calendar date when Day 1 started (YYYY-MM-DD)
  START_DATE: "2026-05-22",             // !! CHANGE to your actual start date

  // Reunion countdown — !! CHANGE to your actual meeting dates
  MEET_START_DATE: "2026-06-15",        // When you're apart (now)
  MEET_END_DATE:   "2026-11-28",        // When you'll meet again

  // Her name, shown in the greeting
  HER_NAME: "My Love",                  // !! CHANGE to her name

  // Your name
  YOUR_NAME: "Always Yours",            // !! CHANGE to your name

  // Background music file
  BACKGROUND_MUSIC: "audio/background.mp3",

  // Secret easter egg password (hidden feature)
  EASTER_EGG_CODE: "forever",           // She can type this anywhere
};


// ─── 365 Reasons ────────────────────────────────────────────
// !! EDIT THESE: Replace the reasons with your own words.
//    Keep the format exactly the same.
//    Day 1 = Day 1 of your relationship, not Jan 1st.

const REASONS = [
  { day: 1, reason: "I love that a movie shoot called Parchhayi brought you into my life." },
{ day: 2, reason: "I love how you always know exactly what to say when I'm feeling lost." },
{ day: 3, reason: "I love the cute faces you make without even realizing it." },
{ day: 4, reason: "I love how you call me buddhu." },
{ day: 5, reason: "I love how you call me kutta." },
{ day: 6, reason: "I love hearing you say 'Areey buddhu'." },
{ day: 7, reason: "I love how you ragebait me just to get a reaction." },
{ day: 8, reason: "I love that you enjoy annoying me a little." },
{ day: 9, reason: "I love how you smile when you know you're right." },
{ day: 10, reason: "I love how you calm me down when I'm angry." },

{ day: 11, reason: "I love how patient you are with me." },
{ day: 12, reason: "I love that you understand me even when I struggle to explain myself." },
{ day: 13, reason: "I love that you never make my stressful days harder." },
{ day: 14, reason: "I love how understanding you are when life gets busy." },
{ day: 15, reason: "I love that you always wait for me no matter how busy I get." },
{ day: 16, reason: "I love how much effort you put into our relationship." },
{ day: 17, reason: "I love that distance has never stopped you from loving me." },
{ day: 18, reason: "I love your good morning texts." },
{ day: 19, reason: "I love your random cute texts throughout the day." },
{ day: 20, reason: "I love how loved you make me feel." },

{ day: 21, reason: "I love that you've made me your go-to person." },
{ day: 22, reason: "I love the trust you place in me." },
{ day: 23, reason: "I love that you value my advice." },
{ day: 24, reason: "I love how you share your achievements with me first." },
{ day: 25, reason: "I love how you tell me about your day." },
{ day: 26, reason: "I love how excited you get when something good happens." },
{ day: 27, reason: "I love your dedication to academics." },
{ day: 28, reason: "I love how hard you work for your goals." },
{ day: 29, reason: "I love that you always strive to be your best." },
{ day: 30, reason: "I love your discipline and determination." },

{ day: 31, reason: "I love how focused you become when you want something." },
{ day: 32, reason: "I love how seriously you take your studies." },
{ day: 33, reason: "I love seeing you succeed." },
{ day: 34, reason: "I love how ambitious you are." },
{ day: 35, reason: "I love that you never settle for average." },
{ day: 36, reason: "I love your commitment to the gym." },
{ day: 37, reason: "I love how you keep setting new fitness goals." },
{ day: 38, reason: "I love your consistency." },
{ day: 39, reason: "I love how motivated you are." },
{ day: 40, reason: "I love how strong you are becoming every day." },

{ day: 41, reason: "I love that you always challenge yourself to improve." },
{ day: 42, reason: "I love your determination to become better every day." },
{ day: 43, reason: "I love how disciplined you are with your routine." },
{ day: 44, reason: "I love how proud I feel when you achieve something." },
{ day: 45, reason: "I love that you inspire me to be better too." },
{ day: 46, reason: "I love your leadership qualities." },
{ day: 47, reason: "I love that you are part of the Junior Council." },
{ day: 48, reason: "I love how responsible you are." },
{ day: 49, reason: "I love how dependable you are." },
{ day: 50, reason: "I love how capable you are of handling any situation." },

{ day: 51, reason: "I love your maturity." },
{ day: 52, reason: "I love how people naturally trust you." },
{ day: 53, reason: "I love how calm you stay under pressure." },
{ day: 54, reason: "I love your confidence." },
{ day: 55, reason: "I love your kindness." },
{ day: 56, reason: "I love your caring nature." },
{ day: 57, reason: "I love how much you care about the people you love." },
{ day: 58, reason: "I love how thoughtful you are." },
{ day: 59, reason: "I love how genuine you are." },
{ day: 60, reason: "I love how beautiful your heart is." },

{ day: 61, reason: "I love our 3-month date in Connaught Place." },
{ day: 62, reason: "I love remembering every moment of that day." },
{ day: 63, reason: "I love how happy you looked that day." },
{ day: 64, reason: "I love the memories we made together." },
{ day: 65, reason: "I love every picture from that day." },
{ day: 66, reason: "I love every conversation from that date." },
{ day: 67, reason: "I love how excited I was to see you." },
{ day: 68, reason: "I love how excited you were to meet me." },
{ day: 69, reason: "I love that we created a memory I'll never forget." },
{ day: 70, reason: "I love looking forward to making more memories with you." },

{ day: 71, reason: "I love how you send me cute videos." },
{ day: 72, reason: "I love the songs you send me." },
{ day: 73, reason: "I love that every reel somehow reminds you of us." },
{ day: 74, reason: "I love your random messages." },
{ day: 75, reason: "I love that even a simple text from you can make my day." },
{ day: 76, reason: "I love hearing about the little things in your day." },
{ day: 77, reason: "I love how excited you get about things you love." },
{ day: 78, reason: "I love your sense of humor." },
{ day: 79, reason: "I love laughing with you." },
{ day: 80, reason: "I love how comfortable I am around you." },

{ day: 81, reason: "I love your love for Italian food." },
{ day: 82, reason: "I love that Diggin is one of your favorite places." },
{ day: 83, reason: "I love your taste in food." },
{ day: 84, reason: "I love how beautiful you look in white." },
{ day: 85, reason: "I love that white is your favorite color." },
{ day: 86, reason: "I love how adorable you are when you're excited." },
{ day: 87, reason: "I love how you make ordinary days feel special." },
{ day: 88, reason: "I love your little habits." },
{ day: 89, reason: "I love that you're completely yourself around me." },
{ day: 90, reason: "I love your personality." },

{ day: 91, reason: "I love that you reply to one message and ignore the other five." },
{ day: 92, reason: "I love pretending to be annoyed by it." },
{ day: 93, reason: "I love how you make me wait for your replies sometimes." },
{ day: 94, reason: "I love our inside jokes." },
{ day: 95, reason: "I love 'December me jab milenge tab tujhe pta chalega'." },
{ day: 96, reason: "I love how that sentence always makes me smile." },
{ day: 97, reason: "I love that we stopped ending calls with simple goodbyes." },
{ day: 98, reason: "I love ending calls with 'I love you'." },
{ day: 99, reason: "I love that you dream of a beautiful life together with me." },
{ day: 100, reason: "I love that you are the woman who loves me the most." },
  { day: 101, reason: "I love how your face lights up when you're genuinely happy." },
{ day: 102, reason: "I love the way you look at life with so much determination." },
{ day: 103, reason: "I love how you somehow manage to make me smile even on bad days." },
{ day: 104, reason: "I love hearing your voice after a long day." },
{ day: 105, reason: "I love how comfortable our silence can be." },
{ day: 106, reason: "I love that you understand me without needing long explanations." },
{ day: 107, reason: "I love how naturally caring you are." },
{ day: 108, reason: "I love that you're always rooting for me." },
{ day: 109, reason: "I love how proud you are of my achievements." },
{ day: 110, reason: "I love that you never stop believing in me." },

{ day: 111, reason: "I love how you make distance feel smaller." },
{ day: 112, reason: "I love waiting for your texts." },
{ day: 113, reason: "I love seeing your name pop up on my phone." },
{ day: 114, reason: "I love that a single text from you can improve my mood instantly." },
{ day: 115, reason: "I love how excited I get when we finally get time to talk." },
{ day: 116, reason: "I love our late-night conversations." },
{ day: 117, reason: "I love how we can talk about absolutely anything." },
{ day: 118, reason: "I love that you're my favorite notification." },
{ day: 119, reason: "I love how every call with you feels too short." },
{ day: 120, reason: "I love missing you because it reminds me how much you mean to me." },

{ day: 121, reason: "I love the way you laugh." },
{ day: 122, reason: "I love hearing you laugh at my stupid jokes." },
{ day: 123, reason: "I love how you pretend to be annoyed by me sometimes." },
{ day: 124, reason: "I love how cute you are when you're angry." },
{ day: 125, reason: "I love the way you react when I tease you." },
{ day: 126, reason: "I love how competitive you can be." },
{ day: 127, reason: "I love how stubborn you are when you know you're right." },
{ day: 128, reason: "I love how expressive your face is." },
{ day: 129, reason: "I love how impossible it is to stay upset when talking to you." },
{ day: 130, reason: "I love how naturally funny you are." },

{ day: 131, reason: "I love that you always try to improve yourself." },
{ day: 132, reason: "I love how seriously you take your fitness journey." },
{ day: 133, reason: "I love that you keep raising the bar for yourself." },
{ day: 134, reason: "I love your work ethic." },
{ day: 135, reason: "I love your dedication." },
{ day: 136, reason: "I love that you never give up easily." },
{ day: 137, reason: "I love how determined you become when chasing a goal." },
{ day: 138, reason: "I love that you're constantly growing." },
{ day: 139, reason: "I love how much potential you have." },
{ day: 140, reason: "I love watching you become the person you want to be." },

{ day: 141, reason: "I love imagining our future together." },
{ day: 142, reason: "I love talking about our future dates." },
{ day: 143, reason: "I love dreaming about life after distance." },
{ day: 144, reason: "I love knowing that you're waiting for me too." },
{ day: 145, reason: "I love counting down the days until we meet." },
{ day: 146, reason: "I love thinking about seeing you again." },
{ day: 147, reason: "I love imagining your smile when we meet." },
{ day: 148, reason: "I love planning things we'll do together." },
{ day: 149, reason: "I love the thought of creating countless memories with you." },
{ day: 150, reason: "I love that our story is still just beginning." },

{ day: 151, reason: "I love that you trust me with your thoughts." },
{ day: 152, reason: "I love that you come to me when something important happens." },
{ day: 153, reason: "I love that you value my opinions." },
{ day: 154, reason: "I love how open you are with me." },
{ day: 155, reason: "I love how honest you are." },
{ day: 156, reason: "I love that we can talk about difficult things." },
{ day: 157, reason: "I love how safe you make me feel emotionally." },
{ day: 158, reason: "I love the trust we've built together." },
{ day: 159, reason: "I love how strong our bond feels." },
{ day: 160, reason: "I love that we choose each other every day." },

{ day: 161, reason: "I love how beautiful you look in photos." },
{ day: 162, reason: "I love how beautiful you look even when you're not trying." },
{ day: 163, reason: "I love your confidence." },
{ day: 164, reason: "I love your smile." },
{ day: 165, reason: "I love your eyes when you're excited." },
{ day: 166, reason: "I love your expressions during our calls." },
{ day: 167, reason: "I love how photogenic you are." },
{ day: 168, reason: "I love how naturally pretty you are." },
{ day: 169, reason: "I love that you're beautiful inside and out." },
{ day: 170, reason: "I love how you never realize how amazing you are." },

{ day: 171, reason: "I love that Diggin will always remind me of you." },
{ day: 172, reason: "I love your love for Italian food." },
{ day: 173, reason: "I love imagining future food dates with you." },
{ day: 174, reason: "I love trying to remember your favorite orders." },
{ day: 175, reason: "I love how excited you get around good food." },
{ day: 176, reason: "I love that food becomes a memory when it's with you." },
{ day: 177, reason: "I love sharing recommendations with you." },
{ day: 178, reason: "I love discovering new places together." },
{ day: 179, reason: "I love that our dates feel special no matter where we are." },
{ day: 180, reason: "I love every meal that turns into a memory with you." },

{ day: 181, reason: "I love how you listen to me." },
{ day: 182, reason: "I love how you remember little details." },
{ day: 183, reason: "I love that you care about the things that matter to me." },
{ day: 184, reason: "I love how supportive you are." },
{ day: 185, reason: "I love how encouraging you are." },
{ day: 186, reason: "I love that you make me want to work harder." },
{ day: 187, reason: "I love how motivated I feel because of you." },
{ day: 188, reason: "I love that you're one of my biggest supporters." },
{ day: 189, reason: "I love that I can always count on you." },
{ day: 190, reason: "I love how dependable you are." },

{ day: 191, reason: "I love how you make ordinary conversations memorable." },
{ day: 192, reason: "I love the stories you tell me." },
{ day: 193, reason: "I love hearing about your day." },
{ day: 194, reason: "I love hearing about your wins." },
{ day: 195, reason: "I love hearing about your challenges." },
{ day: 196, reason: "I love being part of your life." },
{ day: 197, reason: "I love that you let me into your world." },
{ day: 198, reason: "I love that you've become such an important part of mine." },
{ day: 199, reason: "I love the life we're building together." },
{ day: 201, reason: "I love that Parchhayi gave me a role I never auditioned for—being your boyfriend." },
{ day: 202, reason: "I love remembering the first time I saw you during the shoot." },
{ day: 203, reason: "I love that neither of us knew where that movie shoot would lead." },
{ day: 204, reason: "I love that my favorite story started behind the scenes." },
{ day: 205, reason: "I love how fate somehow put us in the same place at the right time." },
{ day: 206, reason: "I love that out of everything from Parchhayi, I got to keep you." },
{ day: 207, reason: "I love how effortlessly you became important to me." },
{ day: 208, reason: "I love how natural everything feels with you." },
{ day: 209, reason: "I love that our story feels unique." },
{ day: 210, reason: "I love that you're my favorite part of a memory that changed my life." },

{ day: 211, reason: "I love how you always find new ways to ragebait me." },
{ day: 212, reason: "I love that you enjoy seeing my reaction." },
{ day: 213, reason: "I love how proud you look when your ragebait works." },
{ day: 214, reason: "I love pretending I'm annoyed when I'm actually smiling." },
{ day: 215, reason: "I love how you can make me laugh even when I'm trying not to." },
{ day: 216, reason: "I love that you're a professional troublemaker." },
{ day: 217, reason: "I love your mischievous side." },
{ day: 218, reason: "I love how playful you are." },
{ day: 219, reason: "I love that life is never boring with you." },
{ day: 220, reason: "I love how much fun we have together." },

{ day: 221, reason: "I love hearing you say 'Areey buddhu'." },
{ day: 222, reason: "I love being your buddhu." },
{ day: 223, reason: "I love that you call me kutta." },
{ day: 224, reason: "I love that those nicknames mean you're comfortable with me." },
{ day: 225, reason: "I love how our nicknames have become a language of their own." },
{ day: 226, reason: "I love every nickname I have for you." },
{ day: 227, reason: "I love calling you Rashu." },
{ day: 228, reason: "I love calling you Dumbo." },
{ day: 229, reason: "I love calling you Wifey." },
{ day: 230, reason: "I love calling you the love of my life." },

{ day: 231, reason: "I love that you send me cute videos randomly." },
{ day: 232, reason: "I love how every song you send becomes special." },
{ day: 233, reason: "I love that you think of me when you see a cute reel." },
{ day: 234, reason: "I love opening Instagram and finding something from you." },
{ day: 235, reason: "I love that your messages always brighten my day." },
{ day: 236, reason: "I love how excited I get when you send something." },
{ day: 237, reason: "I love that you make effort even through a screen." },
{ day: 238, reason: "I love how loved I feel because of those little gestures." },
{ day: 239, reason: "I love that you never stop reminding me that you care." },
{ day: 240, reason: "I love every reel, meme, and video you've ever sent me." },

{ day: 241, reason: "I love that our calls don't end with simple goodbyes anymore." },
{ day: 242, reason: "I love ending calls with 'I love you'." },
{ day: 243, reason: "I love the day I asked if we could stop ending calls with plain bye." },
{ day: 244, reason: "I love that you said yes." },
{ day: 245, reason: "I love that such a small moment became so important." },
{ day: 246, reason: "I love how meaningful our calls feel." },
{ day: 247, reason: "I love hearing your voice before sleeping." },
{ day: 248, reason: "I love hearing about your day." },
{ day: 249, reason: "I love that no matter how long we talk, I always want more time." },
{ day: 250, reason: "I love that you're my favorite person to call." },

{ day: 251, reason: "I love how beautiful you look in white." },
{ day: 252, reason: "I love that white is your favorite color." },
{ day: 253, reason: "I love how elegant you look." },
{ day: 254, reason: "I love that you don't always realize how beautiful you are." },
{ day: 255, reason: "I love your smile in photographs." },
{ day: 256, reason: "I love your smile on video calls." },
{ day: 257, reason: "I love your smile in person the most." },
{ day: 258, reason: "I love the confidence you're building every day." },
{ day: 259, reason: "I love how you're becoming stronger mentally and physically." },
{ day: 260, reason: "I love watching your growth." },

{ day: 261, reason: "I love that you trust me enough to share your insecurities." },
{ day: 262, reason: "I love that I get to remind you how amazing you are." },
{ day: 263, reason: "I love that you don't see yourself the way I see you." },
{ day: 264, reason: "I love that you're much stronger than you think." },
{ day: 265, reason: "I love how hard you work despite your doubts." },
{ day: 266, reason: "I love how brave you are." },
{ day: 267, reason: "I love how resilient you are." },
{ day: 268, reason: "I love how you keep moving forward." },
{ day: 269, reason: "I love how determined you are to improve yourself." },
{ day: 270, reason: "I love everything that makes you uniquely you." },

{ day: 271, reason: "I love our date in Connaught Place." },
{ day: 272, reason: "I love that we celebrated three months together." },
{ day: 273, reason: "I love how excited I was before meeting you that day." },
{ day: 274, reason: "I love how quickly time passed when we were together." },
{ day: 275, reason: "I love how happy that day made me." },
{ day: 276, reason: "I love that we created a memory we'll always have." },
{ day: 277, reason: "I love remembering the details of that date." },
{ day: 278, reason: "I love imagining future anniversaries with you." },
{ day: 279, reason: "I love the thought of celebrating many more milestones together." },
{ day: 280, reason: "I love that our best memories are still ahead of us." },

{ day: 281, reason: "I love your dream of building a beautiful life together." },
{ day: 282, reason: "I love that your future includes me." },
{ day: 283, reason: "I love imagining life after academy." },
{ day: 284, reason: "I love counting down to December." },
{ day: 285, reason: "I love the excitement of meeting you again." },
{ day: 286, reason: "I love imagining our reunion." },
{ day: 287, reason: "I love that distance has made us stronger." },
{ day: 288, reason: "I love that we're fighting for something worth having." },
{ day: 289, reason: "I love how committed you are to us." },
{ day: 290, reason: "I love that we're a team." },

{ day: 291, reason: "I love when you say 'December me jab milenge tab tujhe pta chalega'." },
{ day: 292, reason: "I love wondering what exactly I'll find out in December." },
{ day: 293, reason: "I love how that sentence instantly makes me smile." },
{ day: 294, reason: "I love that we have our own inside jokes." },
{ day: 295, reason: "I love how easily we make each other laugh." },
{ day: 296, reason: "I love that we're best friends as well as partners." },
{ day: 297, reason: "I love how comfortable we are together." },
{ day: 298, reason: "I love the way you understand me." },
{ day: 299, reason: "I love the way you appreciate me." },
{ day: 300, reason: "I love that no one has ever made me feel as loved as you do." },
  { day: 301, reason: "I love that even after a bad day, talking to you makes everything feel lighter." },
{ day: 302, reason: "I love how you make me feel understood." },
{ day: 303, reason: "I love that I never have to pretend to be someone else around you." },
{ day: 304, reason: "I love how you accept me, flaws and all." },
{ day: 305, reason: "I love that you know my strengths and weaknesses and still choose me." },
{ day: 306, reason: "I love how safe I feel with you." },
{ day: 307, reason: "I love that you genuinely care about my happiness." },
{ day: 308, reason: "I love that your happiness matters so much to me." },
{ day: 309, reason: "I love how naturally you became part of my daily life." },
{ day: 310, reason: "I love that I can't imagine my days without you anymore." },

{ day: 311, reason: "I love how excited I get when I see your name on my screen." },
{ day: 312, reason: "I love how even your shortest texts make me smile." },
{ day: 313, reason: "I love the way you make ordinary moments memorable." },
{ day: 314, reason: "I love that we can laugh about absolutely nothing." },
{ day: 315, reason: "I love that we have countless inside jokes." },
{ day: 316, reason: "I love that some things only make sense to us." },
{ day: 317, reason: "I love how effortlessly we connect." },
{ day: 318, reason: "I love how talking to you feels like home." },
{ day: 319, reason: "I love that you're the first person I want to tell things to." },
{ day: 320, reason: "I love that you're the last person I want to talk to before sleeping." },

{ day: 321, reason: "I love how supportive you've been of my journey." },
{ day: 322, reason: "I love that you believe in me even when I doubt myself." },
{ day: 323, reason: "I love how proud you make me feel." },
{ day: 324, reason: "I love that you celebrate my victories with me." },
{ day: 325, reason: "I love how you stand by me during difficult times." },
{ day: 326, reason: "I love that you're my partner in every sense of the word." },
{ day: 327, reason: "I love that we're building something real." },
{ day: 328, reason: "I love how strong our relationship feels despite the distance." },
{ day: 329, reason: "I love that we've never let distance define us." },
{ day: 330, reason: "I love that we've chosen love over convenience." },

{ day: 331, reason: "I love imagining our future dates together." },
{ day: 332, reason: "I love imagining our future adventures together." },
{ day: 333, reason: "I love imagining celebrating birthdays together." },
{ day: 334, reason: "I love imagining watching sunsets with you." },
{ day: 335, reason: "I love imagining traveling with you." },
{ day: 336, reason: "I love imagining introducing you as my wife someday." },
{ day: 337, reason: "I love imagining growing old with you." },
{ day: 338, reason: "I love imagining all the stories we'll create together." },
{ day: 339, reason: "I love imagining all the laughter that still awaits us." },
{ day: 340, reason: "I love imagining a future where distance is only a memory." },

{ day: 341, reason: "I love that you're my favorite person." },
{ day: 342, reason: "I love that you're my favorite conversation." },
{ day: 343, reason: "I love that you're my favorite notification." },
{ day: 344, reason: "I love that you're my favorite memory." },
{ day: 345, reason: "I love that you're my favorite daydream." },
{ day: 346, reason: "I love that you're my favorite hello." },
{ day: 347, reason: "I love that you're my favorite goodnight." },
{ day: 348, reason: "I love that you're my favorite habit." },
{ day: 349, reason: "I love that you're my favorite distraction." },
{ day: 350, reason: "I love that you're my favorite person to miss." },

{ day: 351, reason: "I love how much you've changed my life in just a few months." },
{ day: 352, reason: "I love how many memories we've already made together." },
{ day: 353, reason: "I love that every month with you feels special." },
{ day: 354, reason: "I love that you've given me countless reasons to smile." },
{ day: 355, reason: "I love that you've made me feel deeply loved." },
{ day: 356, reason: "I love that you've made my world brighter." },
{ day: 357, reason: "I love that you've become such an important part of my life." },
{ day: 358, reason: "I love that I get to call you mine." },
{ day: 359, reason: "I love that you chose me." },
{ day: 360, reason: "I love that every day with you feels like a gift." },

{ day: 361, reason: "I love you because you're Rashu." },
{ day: 362, reason: "I love you because you're my Dumbo." },
{ day: 363, reason: "I love you because you're my Wifey." },
{ day: 364, reason: "I love you because you're the woman who loves me the most." },

{ day: 365, reason: "I love you because after 364 reasons, I still haven't found enough words to explain how much you mean to me. Happy Birthday, Rashu. Thank you for every smile, every memory, every call, every laugh, every 'Areey buddhu', every moment of love, and for being the most beautiful part of my life. I love you today, tomorrow, and every day after that. ❤️" },
];


// ─── Special Day Content ────────────────────────────────────
// !! EDIT THIS: Add your special content for milestone days.
//    The key is the day number (as a number).
//
//  Supported types:
//    audio:  { type: "audio", file: "audio/day15.mp3",  label: "A voice note for you 🎙️" }
//    video:  { type: "video", file: "videos/day30.mp4", label: "A video for you 🎬" }
//    letter: { type: "letter", title: "My Letter to You", body: "Dear love, ..." }
//    final:  { type: "final" }  — triggers the Day 365 experience

const SPECIAL_DAYS = {
  15: {
    type: "video",
    file: "videos/day15.mp4",
    label: "A video note just for you ",
  },
  30: {
    type: "video",
    file: "videos/day30.mp4",
    label: "Happy Birthday meri jaan",
  },
  45: {
    type: "video",
    file: "videos/day45.mp4",
    label: "Somethings you used to send me",
  },
  60: {
    type: "video",
    file: "videos/day60.mp4",
    label: "60 days — here's something special 🎬",
  },
  75: {
    type: "video",
    file: "videos/day75.mp4",
    label: "Somethings you used to send me,hehehe i miss you so much",
  },
  90: {
    type: "letter",
    title: "Three Months",
    body: `My love,

Few months have passed since the day I decided to make sure you knew how much you mean to me. And sitting here, writing this letter, I find myself struggling to put into words what you've become to my life.

You are not just a chapter of my story. You are the part of the story that makes everything else make sense.

I joined the academy knowing it would be hard. What I didn't know is that your voice would become the thing I miss most. That your messages would be the first thing I reach for every morning, and the last thing I think about every night.

Three months. And I am more certain of you than I am of almost anything else in my life.

I promise you this: every day apart is a day being invested in a future that includes you. Every sacrifice I make inside those walls, I make knowing you are on the other side of it.

Wait for me. I'm already running toward you.

Always yours,
${CONFIG.YOUR_NAME}`,
  },
  100: {
    type: "letter",
    title: "100 Days",
    body: `My love,

One hundred days of writing to you. One hundred reasons. And I haven't even scratched the surface.

You have no idea what you've done to my life. The way I think, the way I carry myself, the things I work toward — all of it, shaped quietly by the fact that you exist and that you're mine.

100 days in. I am not tired. I am not running out of reasons.

I am simply, completely, irreversibly in love with you.

Yours,
${CONFIG.YOUR_NAME}`,
  },
  105: {
    type: "video",
    file: "videos/day105.mp4",
    label: "A little bit fun we used to have",
  },
   120: {
    type: "video",
    file: "videos/day120.mp4",
    label: "Your funny dance which you made me do as well",
  },
  135: {
    type: "video",
    file: "videos/day135.mp4",
    label: "Our cute moment.ruk aarha hun firse recreate krenge",
  },
  150: {
    type: "video",
    file: "videos/day150.mp4",
    label: "Tujhe kitna mann tha pottery ka",
  },
  165: {
    type: "video",
    file: "videos/day165.mp4",
    label: "Our perfect date",
  },
  180: {
    type: "video",
    file: "videos/day180.mp4",
    label: "Six months. A video from me to you 🎬",
  },
  195: {
    type: "video",
    file: "videos/day195.mp4",
    label: "Our last meeting",
  },
  200: {
    type: "letter",
    title: "200 Days",
    body: `My love,

Two hundred days. 

I want you to know that none of this has been easy. Distance is hard. Waiting is hard. Not being able to hold your hand when I want to is hard.

But you have made every single day of this feel worth it.

You have done something extraordinary — you've made love feel like the most stable, certain thing in an otherwise uncertain world.

200 days of you. And I would choose every one of them again.

Yours entirely,
${CONFIG.YOUR_NAME}`,
  },
  210: {
    type: "video",
    file: "videos/day210.mp4",
    label: "The cute edit you made",
  },
  225: {
    type: "video",
    file: "videos/day225.mp4",
    label: "My favourite aunty",
  },
  240: {
    type: "video",
    file: "videos/day240.mp4",
    label: "Hmari thori si bakchodi",
  },
  255: {
    type: "video",
    file: "videos/day255.mp4",
    label: "oops did we kiss in the end",
  },
   270: {
    type: "video",
    file: "videos/day270.mp4",
    label: "uff teri aankhen kitni sexy hai",
  },
   285: {
    type: "video",
    file: "videos/day285.mp4",
    label: "ooye hoye meri dancer",
  },
  300: {
    type: "letter",
    title: "300 Days",
    body: `My love,

Three hundred days.

I've thought about what to say here. I've rewritten this a dozen times. And every version comes back to the same truth:

You are the best thing that has ever happened to me.

Not just the best person I've loved. The best thing. The decision that made everything else make more sense. The reason I work as hard as I do. The reason I believe in the future.

300 days of proof that what we have is real, and rare, and worth every moment of the wait.

65 more reasons to go. And I mean every single one of them.

Forever yours,
${CONFIG.YOUR_NAME}`,
  },
  315: {
    type: "video",
    file: "videos/day315.mp4",
    label: "ooye hoye meri singer",
  },
   330: {
    type: "video",
    file: "videos/day330.mp4",
    label: "outfit check is must",
  },
   345: {
    type: "video",
    file: "videos/day345.mp4",
    label: "firse propose krke kiss leli hehe",
  },
   360: {
    type: "video",
    file: "videos/day360.mp4",
    label: "ooye hoye kitni zyada sundar hai tu",
  },
  365: {
    type: "finally",
  },
};


// ─── Memory Timeline (Optional Section) ─────────────────────
// !! EDIT THIS: Add shared memories for the timeline section.
// These appear in a horizontal scrollable timeline on the page.

const MEMORIES = [
  {
    date: "Day 1",
    title: "The Beginning",
    description: "Tomorrow everything is going to change.",
    emoji: "✨",
  },
  {
    date: "Day 3",
    title: "Our Anniversary Date",
    description: "The number that unlocked everything.",
    emoji: "🔑",
  },
  {
    date: "Day 30",
    title: "One Month",
    description: "One month of Real wala long distance.",
    emoji: "🌹",
  },
  {
    date: "Day 100",
    title: "100 Days",
    description: "A hundred reasons. A hundred days. Still going.",
    emoji: "💯",
  },
  {
    date: "Day 180",
    title: "Half a Year",
    description: "Six months of love across every mile.",
    emoji: "🌍",
  },
  {
    date: "Day 365",
    title: "One Full Year",
    description: "365 reasons. Only the beginning.",
    emoji: "♾️",
  },
];