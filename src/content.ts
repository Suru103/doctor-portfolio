export const doctor = {
  name: 'Dr. [DOCTOR NAME]',
  initials: 'DR',
  designation: '[DESIGNATION / SPECIALITY]',
  affiliation: 'Associated with Medanta Hospital, Noida',
  intro: 'Dedicated to delivering patient-centric healthcare through clinical expertise, experience and compassionate care.',
  experience: '[YEARS OF EXPERIENCE]',
  qualifications: '[VERIFIED QUALIFICATIONS]',
  expertise: '[PRIMARY AREAS OF EXPERTISE]',
  email: '[OFFICIAL EMAIL]',
  phone: '[OFFICIAL PHONE NUMBER]',
  whatsapp: import.meta.env.VITE_DOCTOR_WHATSAPP || '91XXXXXXXXXX',
  address: '[VERIFIED HOSPITAL ADDRESS, NOIDA]',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Medanta+Hospital+Noida',
  bookingUrl: import.meta.env.VITE_OFFICIAL_BOOKING_URL || '',
};

// Replace these entries only with details verified and approved by the doctor.
export const expertise = [
  { title: '[SPECIALITY / AREA 01]', description: '[Add a concise, doctor-approved explanation of this area of care.]', icon: '✳' },
  { title: '[SPECIALITY / AREA 02]', description: '[Add a concise, doctor-approved explanation of this area of care.]', icon: '◇' },
  { title: '[SPECIALITY / AREA 03]', description: '[Add a concise, doctor-approved explanation of this area of care.]', icon: '＋' },
];
export const journey = [
  { year: '[YEAR]', title: '[MEDICAL EDUCATION]', place: '[INSTITUTION]', detail: '[Verified degree / academic milestone.]' },
  { year: '[YEAR]', title: '[POSTGRADUATE QUALIFICATION / FELLOWSHIP]', place: '[INSTITUTION]', detail: '[Verified qualification or fellowship.]' },
  { year: '[YEAR – YEAR]', title: '[PREVIOUS PROFESSIONAL APPOINTMENT]', place: '[HOSPITAL / INSTITUTION]', detail: '[Verified role and responsibilities.]' },
  { year: '[CURRENT]', title: 'Professional association', place: 'Medanta Hospital, Noida', detail: '[Add current designation after confirmation.]' },
];
export const achievements = ['[VERIFIED AWARD OR RECOGNITION]', '[PROFESSIONAL CERTIFICATION]', '[MEDICAL ASSOCIATION / FELLOWSHIP]'];
export const publications = [
  { title: '[PUBLICATION TITLE]', year: '[YEAR]', journal: '[JOURNAL NAME]', category: 'Research', description: '[Brief, factual summary.]', url: '' },
  { title: '[CONFERENCE PRESENTATION]', year: '[YEAR]', journal: '[CONFERENCE / ORGANISER]', category: 'Conference', description: '[Brief, factual summary.]', url: '' },
];
export const gallery = [
  { title: 'Medical conferences', category: 'Conferences', image: '', caption: '[Add an approved event photograph.]' },
  { title: 'Academic events', category: 'Academic', image: '', caption: '[Add an approved event photograph.]' },
  { title: 'Professional milestones', category: 'Milestones', image: '', caption: '[Add an approved event photograph.]' },
];


// Demo-only procedure content. Replace with doctor-reviewed copy before publishing.
export const procedures = [
  {
    "id": "hair-transplant",
    "name": "Hair Transplant",
    "number": "01",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "liposuction",
    "name": "Liposuction",
    "number": "02",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "gynecomastia",
    "name": "Gynecomastia",
    "number": "03",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "rhinoplasty",
    "name": "Rhinoplasty",
    "number": "04",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "blepharoplasty",
    "name": "Blepharoplasty",
    "number": "05",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "breast-uplift-reduction",
    "name": "Breast Uplift/Reduction",
    "number": "06",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "genital-surgery",
    "name": "Genital Surgery",
    "number": "07",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "face-lift",
    "name": "Face-lift",
    "number": "08",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "breast-augmentation",
    "name": "Breast Augmentation",
    "number": "09",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "burn-surgery",
    "name": "Burn Surgery",
    "number": "10",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "laser-hair-removal",
    "name": "Laser Hair Removal",
    "number": "11",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  },
  {
    "id": "non-surgical",
    "name": "Non-Surgical",
    "number": "12",
    "sections": [
      {
        "heading": "About the procedure",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien facilisis feugiat. Praesent non magna sed neque tempor posuere."
      },
      {
        "heading": "Who may be suitable",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi."
      },
      {
        "heading": "Prerequisites",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
      },
      {
        "heading": "Recovery & expected results",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean eu leo quam."
      },
      {
        "heading": "When to consider it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
      },
      {
        "heading": "Who should not undergo it",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
      }
    ]
  }
] as const;
