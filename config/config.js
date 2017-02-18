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
                updateInterval: 30000,
                compliments: {
                    morning: [
                        "Have a great day!",
                        "Good Morning",
                        "Is it Friday Yet?"
                    ],
                    afternoon: [
                        "Keep going your almost there.",
                        "Welcome to Independence Charter School",
                        "Have you been a global citizen today?"
                    ],
                    evening: [
                        "What are you still doing here?",
                        "Go home! You deserve a break!",
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
        {
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
    ]
 
};
 
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}