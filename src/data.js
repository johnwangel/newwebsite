import { Animations, Api, Chart, Interface, Mobile } from './videos'

const videos = [

    { title: "Single-Page App (SPA) Interactivity",
      file: Interface,
      overview: "The main JamBios interface is a writing platform, featuring the ability to share your writing with friends in the JamBios community. The video shows the core functionality of the app.I developed single-page functionality for this complex set of user interactivity.",
      description: [
        { item: 'Reading view features a book-like rendering of content.', time: '1' },
        { item: 'Left sidebar displays a navigable Table of Contents.', time: '10' },
        { item: 'Easily switch to Edit mode, which opens a fuctional HTML editor and ability to upload photos.', time: '16' },
        { item: 'Real-time updates to Preview from Edit mode.', time: '20' },
        { item: 'Readers can comment on the section, with common social features Like and Reply.', time: '35' },
        { item: 'Reader management interface features ability to share by email, in-app, or on Facebook.', time: '43' },
        { item: 'Ability to hide Contents for a clean reading surface.', time: '57' },
      ],
      stack: ["jquery","html5","css","sass","api integration"]
    },
    { title: "Responsive CSS",
      file: Mobile,
      overview: 'For Jambios, I integrated responsive stylesheets to provide a seamless cross-device browser experience.',
      description: [
        { item: 'Same UI features, slightly rearranged. Mobile portrait view defaults to Table of Contents.', time: '1' },
        { item: 'Reader mode switches to single-page rather than facing-page layout', time: '8' },
        { item: 'Controls adjust to a compact mode.', time: '15' },
      ],
      stack: ["jquery","html5","css"]
    },
    { title: "Animation",
      file: Animations,
      overview: 'For the Nobscot site, I integrated custom animations on the homepage, triggered individually on scroll.',
      description: [
        { item: 'Javascript listeners trigger animations as target section scrolls into view.', time: '1' },
        { item: 'Customized timing of individual elements within section.', time: '16' },
      ],
      stack: ["jquery","html5","css"]
    },
    { title: "API Integrations",
      file: Api,
      overview: 'For JamBios book covers, I integrated a photo search and download feature using the Pexels API. Pexels.com is a free photo download site that offers an API for photo searches.',
      description: [
        { item: 'Provide interface for inputting search criteria on Jambios site.', time: '2' },
        { item: 'Search criteria includes color search to help users match photo options to their book theme colors.', time: '9' },
        { item: 'Results retrieved from the API are displayed and paginated.', time: '13' },
        { item: 'Search criteria can be easily edited for new search.', time: '17' },
        { item: 'User can select photos and add to their library of photos on the JamBios site.', time: '22' },
        { item: 'Downloaded photos can be selected for book cover.', time: '29' },

      ],
      stack: ["jquery","html5","css"]
    },
    { title: "Interactive Visualizations",
      file: Chart,
      overview: 'For Nobscot, I created visualizations for employment data retrieved in real-time from the API of the Bureau of Labor Statistics (bls.gov/data). ',
      description: [
        { item: 'On page load, raw BLS data is retrieved from a daily cache.', time: '1' },
        { item: 'Visualizations are created using ZingChart JavaScript plugin.', time: '1' },
        { item: 'Map visualization displays employment data by state.', time: '6' },
        { item: 'Data for other dates can be selected for comparison.', time: '13' },
        { item: 'Bar chart compares employment data by company size.', time: '25' },
        { item: 'Bar chart displays 12-month data by industry, size, or location.', time: '30' },
        { item: 'Line graph shows employment trend over selected time period, by industry.', time: '54' },
      ],
      stack: ["jquery","html5","css"]
    },

  ]

export default videos;
