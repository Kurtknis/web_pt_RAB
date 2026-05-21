import { contactInfo, mapEmbedUrl } from './contactPageContent';

const company = {
  name: 'PT Cipta Kreasi Buana',
  shortName: 'Kreasi Buana',
  location: 'Tangerang Selatan',
  serviceArea: 'Jabodetabek and selected Indonesian cities',
  whatsapp: '6281903140377',
  calendlyUrl: 'https://calendly.com/ptciptakreasibuana/consultation',
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-static-consultation-form/viewform',
  formspreeEndpoint: 'https://formspree.io/f/your-form-id',
  contact: contactInfo,
  mapEmbedUrl,
  stats: [
    { value: '12+', label: 'Featured projects' },
    { value: '4', label: 'Core disciplines' },
    { value: '95%', label: 'Visual detail focus' },
    { value: '24h', label: 'Consultation response' },
  ],
  philosophy: [
    'We design spaces that feel calm before they feel decorated.',
    'Every line, finish, and shadow should support the way people actually live and work.',
    'The studio approach is editorial in presentation and disciplined in execution.',
  ],
};

export default company;
export { company };
