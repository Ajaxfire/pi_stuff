/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			classes: "ONE THREE",
			config: {
				displayType: "analog",
				analogFace: "face-008" //simple, or face-xxx from 001
			}
		},
		// PAGE ONE LISTED BELOW
		{
			module: "MMM-OnThisDay",
			position: "top_left",
			classes:"ONE",
			config: {
				updateInterval: 3600,
				carousel: true,
				carouselInterval: 10, //10 seconds
				carouselProgress: true,
			}
		},
		// {
		// 	module: "calendar",
		// 	disabled: "true",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				fetchInterval: 7 * 24 * 60 * 60 * 1000,
		// 				symbol: "calendar-check",
		// 				url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: "weather",
			position: "top_right",
			classes: "ONE",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 12.9716,
				lon: 77.5946
			}
		},
		{
			module: "weather",
			position: "top_right",
			classes: "ONE",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 12.9716,
				lon: 77.5946
			}
		},
		{
			module: "MMM-MoonPhase",
			position:"top_center",
			classes: "ONE",
			config: {
				updateInterval: 43200000,
				hemisphere: "N",
				resolution: "detailed",
				basicColor: "white",
				title: true,
				phase: true,
				nextFull: false,
				size: 200,
				moonAlign: "center",
				textAlign: "center",
				alpha: 0.7,
				riseAndSet: {
					display: false,
					lon: 77.6,
					lat: 13.0,
					gmtOffset: 5.5
				}
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			classes: "ONE",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		// PAGE TWO LISTED BELOW
		{
			module: "MMM-AVStock",
			position: "top_center",
			classes: "TWO",
			hiddenOnStartup: true,
			config: {
				symbols : ["^NSEI"],
				alias: ["NIFTY"],
				chartDays: 30,
				mode : "table",                  // "table" or "ticker"
				showChart: true,
				pureLine: true,
				chartWidth: 900,
				showVolume: true,
				chartInterval: "intraday",          // choose from ["intraday", "daily", "weekly", "monthly"]
				decimals : 2,
				chartType: 'candlestick',                // 'line', 'candlestick', or 'ohlc'
				alternateGridColor: '#223344',
				chartLineColor: '#eee',
				chartLabelColor: '#eee',
				coloredCandles: true,
			}
		},
		{
			module: "MMM-AVStock",
			position: "bottom_bar",
			classes: "TWO",
			hiddenOnStartup: true,
			config: {
				symbols : ["^NSEI", "GC=F", "INR=X","RELIANCE.NS", "INFY.NS", "HINDUNILVR.NS","ICICIBANK.NS", "TATAPOWER.NS", "EASEMYTRIP.NS","IOC.NS","IREDA.NS","LT.NS","PARADEEP.NS","SBICARD.NS","TRENT.NS","VBL.NS","WESTLIFE.NS"],
				alias: ["NIFTY", "GOLD", "USDINR", "Reliance", "Infosys", "Hindustan Unilever", "ICICI Bank", "Tata Power","EaseMyTrip", "IOC", "IREDA", "Larsen & Toubro", "Paradeep Phosphates", "SBI Card", "Trent", "Varun Beverages", "Westlife Foodworld"],
				tickerDuration: 30,
				mode : "ticker",                  // "table" or "ticker"
				decimals : 2,
				alternateGridColor: '#223344',
				showChart: false
			}
		},
		
		// PAGE THREE LISTED BELOW
		{
			module: "MMM-MyScoreboard",
			position: "top_left",
			classes: "default everyone THREE",
			header: "My Scoreboard",
			hiddenOnStartup: true,
			config: {
			  showLeagueSeparators: true,
			  colored: true,
			  rolloverHours:23,
			  alwaysShowToday: true,
			  highlightWinners: true,
			  viewStyle: "mediumLogos",
			  sports: [
				{
				  league: "ENG_PREMIERE_LEAGUE",
				  label: "EPL",
				  //teams: ["ARS", "CHE", "LIV", "MCI", "MUN", "LEI"],
				},
				{
				  league: "UEFA_CHAMPIONS",
				  label: "Champions League",
				  //teams: ["ARS", "MCI", "LIV"],
				},
				{
				  league: "IND_SUPER_LEAGUE"
				  //teams: ["TOR", "CHW", "NYY"]
				}
			  ]
			}
		},
		{
			module: "MMM-MyStandings",
			position: "top_right",
			classes: "THREE",
			hiddenOnStartup: true,
			config: {
			  rotateInterval: 60 * 1000, // every minute
			  sports: [
				// See below in the README for different league and group options 
				{ league: "English Premier League", rankingLength: 10 },
				{ league: "UEFA Champions League", rankingLength: 10 },
				{ league: "Indian Super League" }
			  ]
			}
		},
		{
			module: 'MMM-Dad-Jokes',
			position: 'middle_center', // Or wherever you want
			classes: "FOUR",
			hiddenOnStartup: true,
			config: {
				updateInterval: 30 * 60 * 1000, // every 30 minutes
				fadeSpeed: 4 * 1000, // four seconds
				filters: ['poop'],
				fontSize: '1.7rem',
				textAlign: 'left',
			}
		},
		{
			module: 'MMM-Confucius-say',
			position: 'lower_third',
			classes: "FOUR",
			hiddenOnStartup: true,
			config: {
					updateInterval: 480,
					fadeSpeed: 4,
					category: 'serious',
			}
		},
		  // SCENES CONFIGURATION
		  {
			module: "MMM-Scenes2",
			position: 'bottom_bar', // Position of indicator
			life: 120 * 1000, // Time to live for each scene //change for prod - 120
			config: {
			  scenario: [ // `scenario` is REQUIRED
				{ // First scene definition
				  exit: [{role: "FOUR",
							animation: "bounceOut",
							duration: 1500,
							gap: 100
						},
						{role: "TWO",
							animation: "fadeOut",
							duration: 1500,
							gap: 100
						},
						{role: "THREE",
							animation: "fadeOut",
							duration: 1500,
							gap: 100
						}
					],
				  enter: [
					{
						role: "ONE",
						animation: "bounceIn",
						duration: 1500,
						gap: 100,
				  	}
					]
				},
				{ // Second scene definition
				  exit: [{role: "ONE",
					animation: "rotateOut",
					duration: 1500,
					gap: 100
				}],
				  enter: [{
					role: "TWO",
					animation: "slideInUp",
					duration: 1500,
					gap: 100,
				  }]
				},
				{ // third scene definition
					exit: [{role: "TWO",
						animation: "rollOut",
						duration: 1500,
						gap: 100
					}],
					enter: [{
						role: "THREE",
						animation: "flip",
						duration: 1500,
						gap: 100,
					  }]
				},
				{ // Fourth scene definition
					exit: [{role: "THREE",
						animation: "hinge",
						duration: 1500,
						gap: 100
					}],
					enter: [{
						role: "FOUR",
						animation: "rubberBand",
						duration: 1500,
						gap: 100,
					  }]
				}
			  ]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
