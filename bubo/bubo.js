/* =====================================================
   BUBO ENGINE 2.0
   Interactive Quran Learning Companion
===================================================== */

const Bubo = {

    /* =================================================
       INTERNAL DATA
    ================================================= */

    element: null,
    speech: null,
    container: null,

    currentMood: "idle",

    moods: [
        "happy",
        "thinking",
        "surprised",
        "sad",
        "proud",
        "sleepy",
        "serious",
        "talking",
        "excited",
        "confused"
    ],


    /* =================================================
       INITIALIZE
    ================================================= */

    init: function(containerSelector) {

        this.container =
            document.querySelector(containerSelector);

        if (!this.container) {

            console.error(
                "🦉 Bubo Error: Container not found."
            );

            return;
        }


        this.element =
            this.container.querySelector(".bubo");

        this.speech =
            this.container.querySelector(".bubo-speech");


        if (!this.element) {

            console.error(
                "🦉 Bubo Error: Character not found."
            );

            return;
        }


        console.log(
            "🦉 Bubo Engine 2.0 Ready!"
        );

    },


    /* =================================================
       SET MOOD
    ================================================= */

    setMood: function(mood) {

        if (!this.element) return;


        /* Remove old moods */

        this.moods.forEach(
            currentMood => {

                this.element.classList.remove(
                    currentMood
                );

            }
        );


        /* Add new mood */

        if (mood !== "idle") {

            this.element.classList.add(
                mood
            );

        }


        this.currentMood =
            mood;


        return this;

    },


    /* =================================================
       SAY
    ================================================= */

    say: function(message, mood = "happy") {

        if (!this.element) return;


        this.setMood(mood);


        if (this.speech) {

            this.speech.innerHTML =
                message;


            /* Restart bubble animation */

            this.speech.style.animation =
                "none";

            void this.speech.offsetWidth;

            this.speech.style.animation =
                "buboBubbleAppear 0.4s ease";

        }


        return this;

    },


    /* =================================================
       HAPPY
    ================================================= */

    happy: function(message) {

        return this.say(
            message ||
            "Yaaay! 🎉",
            "happy"
        );

    },


    /* =================================================
       THINKING
    ================================================= */

    thinking: function(message) {

        return this.say(
            message ||
            "Hmm... 🤔 Let me think...",
            "thinking"
        );

    },


    /* =================================================
       SURPRISED
    ================================================= */

    surprised: function(message) {

        return this.say(
            message ||
            "Ohhh! 😮",
            "surprised"
        );

    },


    /* =================================================
       SAD
    ================================================= */

    sad: function(message) {

        return this.say(
            message ||
            "That's okay. 🌸 Let's try again.",
            "sad"
        );

    },


    /* =================================================
       PROUD
    ================================================= */

    proud: function(message) {

        return this.say(
            message ||
            "Excellent work! ⭐",
            "proud"
        );

    },


    /* =================================================
       SLEEPY
    ================================================= */

    sleepy: function(message) {

        return this.say(
            message ||
            "Zzz... 😴",
            "sleepy"
        );

    },


    /* =================================================
       SERIOUS
    ================================================= */

    serious: function(message) {

        return this.say(
            message ||
            "Hmm... Think carefully! 🤔",
            "serious"
        );

    },


    /* =================================================
       EXCITED
    ================================================= */

    excited: function(message) {

        return this.say(
            message ||
            "WOW!! 🤩✨",
            "excited"
        );

    },


    /* =================================================
       CONFUSED
    ================================================= */

    confused: function(message) {

        return this.say(
            message ||
            "Hmm...? 🤨",
            "confused"
        );

    },


    /* =================================================
       TALKING
    ================================================= */

    talking: function(message) {

        return this.say(
            message ||
            "Listen carefully! 👂",
            "talking"
        );

    },


    /* =================================================
       SHOW
    ================================================= */

    show: function() {

        if (!this.container) return;

        this.container.style.display =
            "flex";

        return this;

    },


    /* =================================================
       HIDE
    ================================================= */

    hide: function() {

        if (!this.container) return;

        this.container.style.display =
            "none";

        return this;

    },


    /* =================================================
       RESET
    ================================================= */

    reset: function() {

        this.setMood("idle");

        if (this.speech) {

            this.speech.innerHTML =
                "Hello! I'm Bubo! 👋<br>Are you ready to learn?";

        }

        return this;

    },


    /* =================================================
       CORRECT ANSWER
    ================================================= */

    correct: function(message) {

        return this.say(
            message ||
            "Excellent! 🎉 You got it!",
            "proud"
        );

    },


    /* =================================================
       WRONG ANSWER
    ================================================= */

    wrong: function(message) {

        return this.say(
            message ||
            "Almost! 🌸 Let's try again.",
            "sad"
        );

    },


    /* =================================================
       ASK QUESTION
    ================================================= */

    ask: function(question) {

        return this.say(
            question ||
            "What do you think? 🤔",
            "thinking"
        );

    },


    /* =================================================
       CELEBRATE
    ================================================= */

    celebrate: function(message) {

        return this.say(
            message ||
            "AMAZING!! 🎉✨⭐<br>You did it!",
            "excited"
        );

    },


    /* =================================================
       LISTEN
    ================================================= */

    listen: function(message) {

        return this.say(
            message ||
            "I'm listening! 👂😊",
            "happy"
        );

    }

};