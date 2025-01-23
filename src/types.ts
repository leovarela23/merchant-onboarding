export interface LoginCredentials {
  username: string;
  password: string;
}

export interface MerchantData {
  domain: string;
  name: string;
  merchant: {
    merchantJurisdiction: string;
    legalEntityName: string;
    companyRegistrationNumber: string;
    primaryUseCase: string;
    iban: string;
  };
}

export const USE_CASE_OPTIONS = [
  "AIS: Accounting package integration",
  "AIS: Cash flow management",
  "AIS: Credit risk analysis",
  "AIS: Customer onboarding / verification",
  "AIS: Personal finance management",
  "PIS: eCommerce merchant payment",
  "PIS: Funding an account",
  "PIS: In store merchant payment",
  "PIS: Paying a bill",
  "PIS: Paying off debt"
] as const;