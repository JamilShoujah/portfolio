export type Certificate = {
  id: number;
  nameKey: string;
  issuerKey: string;
  issueDateKey: string;
  credentialId?: string;
  credentialUrl?: string;
  skillKeys: string[];
};

// import { Certificate } from './types'; // Assuming the Certificate type is exported

export const getCertificatesData = (t: (key: string) => string): Certificate[] => [
  {
    id: 1,
    nameKey: t('certificates.1.name'),
    issuerKey: t('certificates.1.issuer'),
    issueDateKey: t('certificates.1.issueDate'),
    credentialId: 'B5FRVT9H88GO',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/B5FRVT9H88GO',
    skillKeys: [
      t('certificates.1.skills.0'),
      t('certificates.1.skills.1'),
      t('certificates.1.skills.2'),
      t('certificates.1.skills.3'),
    ],
  },
  {
    id: 2,
    nameKey: t('certificates.2.name'),
    issuerKey: t('certificates.2.issuer'),
    issueDateKey: t('certificates.2.issueDate'),
    credentialId: '9MKWFMCUPLMM',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/9MKWFMCUPLMM',
    skillKeys: [
      t('certificates.2.skills.0'),
      t('certificates.2.skills.1'),
      t('certificates.2.skills.2'),
    ],
  },
  {
    id: 3,
    nameKey: t('certificates.3.name'),
    issuerKey: t('certificates.3.issuer'),
    issueDateKey: t('certificates.3.issueDate'),
    credentialId: 'Z6C0I839TIYL',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/Z6C0I839TIYL',
    skillKeys: [
      t('certificates.3.skills.0'),
      t('certificates.3.skills.1'),
      t('certificates.3.skills.2'),
      t('certificates.3.skills.3'),
    ],
  },
  {
    id: 4,
    nameKey: t('certificates.4.name'),
    issuerKey: t('certificates.4.issuer'),
    issueDateKey: t('certificates.4.issueDate'),
    credentialId: '9DZ9317DSE3DG',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/DZ9317DSE3DG',
    skillKeys: [
      t('certificates.4.skills.0'),
      t('certificates.4.skills.1'),
      t('certificates.4.skills.2'),
    ],
  },
];
