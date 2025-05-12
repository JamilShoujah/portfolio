import { ExperienceItem } from '@/models/interfaces';

export const getExperienceData = (t: (key: string) => string): ExperienceItem[] => [
  {
    id: 1,
    role: t('experience.roles.talentManager'),
    company: t('experience.companies.esportWorldCup'),
    location: t('experience.locations.riyadh'),
    period: t('experience.periods.julyAug2024'),
    description: [
      t('experience.descriptions.ewc.item1'),
      t('experience.descriptions.ewc.item2'),
      t('experience.descriptions.ewc.item3'),
      t('experience.descriptions.ewc.item4'),
      t('experience.descriptions.ewc.item5'),
    ],
  },
  {
    id: 2,
    role: t('experience.roles.mobileEngineer'),
    company: t('experience.companies.et3labs'),
    location: t('experience.locations.hazmieh'),
    period: t('experience.periods.novJun2024'),
    description: [
      t('experience.descriptions.et3labs.item1'),
      t('experience.descriptions.et3labs.item2'),
      t('experience.descriptions.et3labs.item3'),
      t('experience.descriptions.et3labs.item4'),
      t('experience.descriptions.et3labs.item5'),
      t('experience.descriptions.et3labs.item6'),
      t('experience.descriptions.et3labs.item7'),
      t('experience.descriptions.et3labs.item8'),
      t('experience.descriptions.et3labs.item9'),
    ],
  },
  {
    id: 3,
    role: t('experience.roles.iosIntern'),
    company: t('experience.companies.iquad'),
    location: t('experience.locations.beirut'),
    period: t('experience.periods.mayAug2023'),
    description: [
      t('experience.descriptions.iquad.item1'),
      t('experience.descriptions.iquad.item2'),
      t('experience.descriptions.iquad.item3'),
    ],
  },
];
