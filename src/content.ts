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
