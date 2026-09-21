export const JOBS = [
  {
    id: 'sales-advisor-nungwi',
    title: 'Sales Advisor — Branded Residences',
    department: 'Sales & Client Relations',
    location: 'Zanzibar, Tanzania (Nungwi / Stone Town)',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    posted: '2026-09-01',
    summary:
      'Represent The Hills and Majestic’s residential portfolio to international and regional buyers, guiding prospects from first enquiry through reservation and closing.',
    responsibilities: [
      'Qualify inbound enquiries and conduct consultative sales presentations for titled residences.',
      'Maintain an accurate CRM pipeline, follow-ups, and weekly forecasting for management review.',
      'Coordinate site visits, unit allocations, and handovers with operations and legal counterparts.',
      'Prepare proposals, payment schedules, and supporting materials in line with company disclosure standards.',
      'Uphold brand standards and confidentiality when dealing with high-net-worth clients and partners.',
    ],
    requirements: [
      'Proven experience in luxury real estate, hospitality sales, or high-value B2C advisory roles.',
      'Fluent English; Swahili and/or additional European languages are a strong advantage.',
      'Comfortable presenting financial and contractual concepts clearly to international buyers.',
      'Valid right to work in Tanzania; willingness to travel between Stone Town and Nungwi as required.',
      'Bachelor’s degree in business, hospitality, marketing, or equivalent professional experience.',
    ],
    applyEmail: 'careers@majestic.tz',
  },
  {
    id: 'site-engineer-hills',
    title: 'Site Engineer — The Hills, Nungwi',
    department: 'Construction & Delivery',
    location: 'Nungwi, Zanzibar, Tanzania',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    posted: '2026-08-18',
    summary:
      'Support delivery of The Hills residential programme on site, ensuring workmanship, programme, and HSE standards meet Majestic’s quality expectations through to Q4 2027 opening.',
    responsibilities: [
      'Monitor daily site progress against programme, drawings, and approved method statements.',
      'Inspect works for quality, dimensional accuracy, and compliance with specifications.',
      'Coordinate subcontractors, materials deliveries, and site logistics with the Site Manager.',
      'Record snags, RFIs, and variation inputs; escalate risks early to project leadership.',
      'Champion health, safety, and environmental practices across all site activities.',
    ],
    requirements: [
      'Degree or diploma in civil / structural engineering or a closely related discipline.',
      'Minimum 3 years’ experience on mid-to-large residential or hospitality construction projects.',
      'Strong reading of architectural and structural drawings; familiarity with finishing packages is preferred.',
      'Working knowledge of site HSE requirements and documentation discipline.',
      'Based in or willing to relocate to Zanzibar for the duration of the project.',
    ],
    applyEmail: 'careers@majestic.tz',
  },
  {
    id: 'guest-experience-manager',
    title: 'Guest Experience Manager',
    department: 'Hospitality Operations',
    location: 'Zanzibar, Tanzania',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    posted: '2026-08-05',
    summary:
      'Shape owner and guest journeys across Majestic’s hospitality assets, setting service standards that will scale into The Hills residence operation.',
    responsibilities: [
      'Define and train service standards for front-of-house, owner relations, and guest recovery.',
      'Partner with sales and operations to support owner usage weeks and VIP arrivals.',
      'Monitor guest feedback, occupancy experience metrics, and continuous improvement actions.',
      'Recruit, coach, and schedule service teams in line with brand and labour requirements.',
      'Collaborate with F&B, housekeeping, and engineering to deliver seamless on-property experiences.',
    ],
    requirements: [
      '5+ years in luxury property or branded residence operations, with supervisory responsibility.',
      'Hands-on experience with PMS / CRM tools and structured guest-feedback programmes.',
      'Excellent interpersonal skills; calm under pressure with a detail-led service mindset.',
      'Fluent English; additional languages valued.',
      'Open to multi-property coverage across Majestic’s Zanzibar portfolio.',
    ],
    applyEmail: 'careers@majestic.tz',
  },
]

export function getJobById(id) {
  return JOBS.find((job) => job.id === id)
}
