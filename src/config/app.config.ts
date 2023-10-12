interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Inventory Manager', 'IT Staff', 'Finance Manager', 'End User'],
  tenantName: 'Company',
  applicationName: 'laptop inventory application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read laptop details',
    'Read inventory status',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage laptop data', 'Manage finance data'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/ae4fa608-de75-4b42-87b9-b8bb4389645b',
};
