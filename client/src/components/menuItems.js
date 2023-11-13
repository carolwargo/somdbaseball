export const menuItems = [
  {
    title: "Home",
    url: "/",
  },


  {
    title: "About",
    url: "/about",
    submenu: [
      {
        title: "Who we are",
        url: "who-we-are",
      },
      {
        title: "Our values",
        url: "our-values",
      },
      {
        title: "Reviews",
        url: "reviews",
      },
    ],
  },


  {
    title: "Camp",
    url: "/camp",
    submenu: [
      {
        title: "2024 Summer Camp",
        url: "summer-camp-2024",
        submenu: [
          {
            title: "2024 Registration",
            url: "camp-registration",
          },
          {
            title: "Coaching Staff",
            url: "coaching-staff",
          },
          {
            title: "Camp Information",
            submenu: [
              {
                title: "Agenda",
                url: "agenda",
              },
              {
                title: "Diretions",
                url: "directions",
              },
              {
                title: "Lodgings & Accomodations",
                url: "lodging-accomodations",
              },
            ],
          },
        ],
      },
    ],
  },

 

  {
    title: "Success",
    url: "/success",
    submenu: [
      {
        title: "Players Drafted",
        url: "players-drafted",
      },
      {
        title: "Players Signed",
        url: "players-signed",
      },
    ],
  },

  {
    title: "Exposure",
    url: "/exposure",
    submenu: [
      {
        title: "Colleges Attended",
        url: "colleges-attended",
      },
      {
        title: "Guest Speakers",
        url: "guest-speakers",
      },
    ],
  },

  {
    title: "Extras",
    url: "/extras",
    submenu: [
      {
        title: "Gallery",
        url: "gallery",
      },
      {
        title: "Scholarship",
        url: "scholarship",
      },
    ],
  },
];
