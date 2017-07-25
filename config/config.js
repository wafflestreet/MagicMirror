/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
 
var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
 
    language: 'en',
    timeFormat: 12,
    units: 'imperial',
 
    modules: [
        {
            module: 'alert',
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: 'clock',
            position: 'top_left'
        },
        {
            module: "calendar",
            header: "ICS Calendar",
            position: "top_left",   // This can be any of the regions. Best results in left or right regions.
            config: {
                calendars: [
                    {
                        url: 'https://calendar.google.com/calendar/ical/icscharter.com_ndtqvc2qt8mek6cnhoin28o19g%40group.calendar.google.com/public/basic.ics',
                        symbol: 'calendar',
                    },
                ],
            }
        },
        {
            module: 'compliments',
            position: 'lower_third',
 
                config: {
                updateInterval: 20000,
                compliments: {
                    morning: [
                        "Have a great day!",
                        "Looking good!",
                        "Summer rocks!",
                        "Springboard is awesome!",
                        "Go Griffins!",
                        "Welcome to Independence Charter School",
                        "Does anyone know whats 3d printing in Tr. Greg's room?",
                        "Good Morning",
                        "If you fell down yesterday, stand up today",
                        "If you can dream it, you can do it",
                        "Is it Friday Yet?"
                    ],
                    afternoon: [
                        "Keep going your almost there.",
                        "How was lunch?",
                        "Springboard is awesome!",
                        "Does anyone know whats 3d printing in Tr. Greg's room?",
                        "Summer rocks",
                        "Your doing a great job today, Keep it up!",
                        "Welcome to Independence Charter School",
                        "The best preparation for tomorrow is doing your best today.",
                        "Congratulations to our take flight travelers!",
                        "If opportunity doesn't knock, build a door.",
                        "Have you been a global citizen today?"
                    ],
                    evening: [
                        "What are you still doing here?",
                        "Go home! You deserve a break!",
                        "If you can dream it, you can do it",
                        "Have a good night!"
                    ]
                }
            }
        },
        {
            module: 'currentweather',
            position: 'top_right',
            config: {
                location: 'Philadelphia',
                locationID: '4560349',  //ID from http://www.openweathermap.org
                appid: '84df37660a1df6173a198b4848c9dc93'
            }
        },
        {
            module: 'weatherforecast',
            position: 'top_right',
            header: 'Weather Forecast',
            config: {
                location: 'Philadelphia',
                locationID: '4560349',  //ID from http://www.openweathermap.org
                appid: '84df37660a1df6173a198b4848c9dc93'
            }
        },
        // {
        //     module: 'twitControl',
        //     position: 'bottom_center',
        //     config: {
        //         maxNumTweets: 5,
        //         streamType: 'user',
        //         api_keys: {
        //             consumer_key: 'Q9FnRO7zOSMNIdkjuQzo9Mz3K',
        //             consumer_secret: 'Wnmtfr2j4dEH39l8SfTliUsSwkaM5gBOgXpeXSZkE5JUUPwXDF',
        //             access_token_key: '582869015-1GqM8xEdapVXzALhEEWmIKgPB7CXMQu2okb0Vrow',
        //             access_token_secret: 'omZP2EQarNQc9mKqmudk4QnIACj9qjwPnls1L7usm62VN',
        //         }
        //     }
        // },
    ]
};
 
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}