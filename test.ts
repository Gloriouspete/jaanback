import Baxi from "./modules/baxi.module";
import Vendify from "./modules/vend.module"

// const response = await Vendify.purchaseEsim({productCode:'RB00002',productID:5907,value:3.84,walletID:"NGN-127",providerID:5,Account:"09023469927"})
const response = await Baxi.verifyDataPrice({provider:"glo",datacode:"100_9"})
console.log(response);

//  {
  //   productId: 5907,
  //   productCode: 'RB00002',
  //   providerId: 5,
  //   name: 'Asia - Pakistan 1GB',
  //   targetValue: 6336,
  //   targetCurrencyId: 160,
  //   targetCurrencyCode: 'NGN',
  //   originalValue: 3.84,
  //   originalCurrencyId: 230,
  //   originalCurrencyCode: 'USD',
  //   value: 3.84,
  //   valueCurrencyId: 230,
  //   valueCurrencyCode: 'USD',
  //   productCost: 6336,
  //   productCostCurrencyCode: 'NGN',
  //   productCostCurrencyId: 160,
  //   walletId: 'NGN-127',
  //   category: 'eSim',
  //   categoryCode: 'esim',
  //   subCategory: 'Asia',
  //   subCategoryCode: 'Asia',
  //   serviceCode: '',
  //   brandCode: 'roambuddysandbox',
  //   providerName: 'roambuddysandbox',
  //   description: 'Usable only in Pakistan. \r\n' +
  //     'PLEASE NOTE:  Plan is Valid for 7 days after activation.',
  //   productMoreInfoUrl: '#',
  //   expirationDate: '2026-12-09',
  //   fxRate: [Object],
  //   denominations: [Array],
  //   sysComment: 'Cost converted from USD to NGN'
  // },