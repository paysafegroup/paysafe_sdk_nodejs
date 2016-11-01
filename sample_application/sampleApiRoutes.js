/*
 * GET users listing.
 */
var PaysafeApiClient = require("../lib/PaysafeApiClient");
var PaysafeApiClient = require("../lib/PaysafeApiClient");
var PaysafeApiClient = require("../lib/PaysafeApiClient");
var PaysafeApiClient = require("../lib/PaysafeApiClient");
var PaysafeApiClient = require("../lib/PaysafeApiClient");
var PaysafeApiClient = require("../lib/PaysafeApiClient");
var config = require("./config");

//var PaysafeApiClient;
var PaysafeApiClient = new PaysafeApiClient(config.paysafeApiKeyId,
			config.paysafeApiKeySecret, config.paysafeEnvironment,
			config.paysafeAccountNumber);

//var merchantRefNumber = Math.random().toString(36).slice(2);
var randomFixedInteger = function (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}
//var achbankAccountNumber = randomFixedInteger(6);

exports.cardpayment = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var billingDet = new PaysafeApiClient.BillingDetails();
	var authorization = new PaysafeApiClient.Authorization();
	var card = new PaysafeApiClient.Card();
	var cardExp = new PaysafeApiClient.CardExpiry();
	billingDet.setStreet("Carlos Pellegrini 551");
	billingDet.setCity("Buenos Aires");
	billingDet.setState("Zulia");
	billingDet.setCountry("AR");
	billingDet.setZip("C1009ABK");
	card.setCardNum(json.cardNumber);
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	authorization.setMerchantRefNum(merchantRefNumber);
	authorization.setAmount("100");
	authorization.setSettleWithAuth("false");
	authorization.setCard(card);
	authorization.setBillingDetails(billingDet);
	PaysafeApiClient.cardServiceHandler(PaysafeApiClient).authorize(authorization,
			function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};

exports.cardCustomer = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var authorization = new PaysafeApiClient.Authorization();
	var card = new PaysafeApiClient.Card();
	card.setPaymentToken(json.paymentToken);
	authorization.setMerchantRefNum(merchantRefNumber);
	authorization.setAmount("12500");
	authorization.setCard(card);
	PaysafeApiClient.cardServiceHandler(PaysafeApiClient).authorize(authorization,
			function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};

exports.createProfile = function(req, res) {
	
	merchantRefNumber = Math.random().toString(36).slice(2);
	var profile = new PaysafeApiClient.Profiles();
	profile.setMerchantCustomerId(merchantRefNumber);
	profile.setLocale("en_US");
	profile.setFirstName("anna" + merchantRefNumber);
	profile.setLastName("Perry" + merchantRefNumber);
	profile.setEmail("anna.perry" + merchantRefNumber + "@cya.com");
	profile.setPhone("713-444-5555");
	PaysafeApiClient.CustomerServiceHandler(PaysafeApiClient)
			.createCustmerProfile(profile, function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};
/*http://localhost:3000/createCard?profileId=7c69e976-ad0a-4387-9901-9caa71123621&cardNumber=5186750368967720
*/
exports.createCard = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var profile = new PaysafeApiClient.Profiles();
	var address = new PaysafeApiClient.Address();
	profile.setId(json.profileId);
	var card = new PaysafeApiClient.Card();
	var cardExp = new PaysafeApiClient.CardExpiry();
	card.setHolderName("JS");
	card.setCardNum(json.cardNumber);
	card.setDefaultCardIndicator("true");
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	card.setProfile(profile);
	address.setStreet("Carlos Pellegrini 551");
	address.setStreet2("1009 Buenos Aires");
	address.setCity("Buenos Aires");
	address.setCountry("AR");
	address.setZip("C1009ABK");
	address.setRecipientName("Jane Doe " + merchantRefNumber);
	address.setProfile(profile);
	PaysafeApiClient.CustomerServiceHandler(PaysafeApiClient)
			.createCustmerAddress(
					address,
					function(error, response) {
						if (error) {
							res.send(JSON.stringify(error));
						} else {
							// this is for avs zip error remove
							card.setBillingAddressId(response.id);
							PaysafeApiClient.CustomerServiceHandler(PaysafeApiClient)
									.createCustmerCard(card, function(error, response) {
										if (error) {
											res.send(JSON.stringify(error));
										} else {
											res.send(JSON.stringify(response));
										}
									});
						}
					});
};


exports.createAddress = function(req, res) {
	var json = req.query;
	merchantRefNumber = Math.random().toString(36).slice(2);
	var profile = new PaysafeApiClient.Profiles();
	var address = new PaysafeApiClient.Address();
	address.setStreet("Carlos Pellegrini 551");
	address.setStreet2("1009 Buenos Aires");
	address.setCity("Buenos Aires");
	address.setCountry("AR");
	address.setZip("C1009ABK");
	address.setRecipientName("Jane Doe");
	profile.setId(json.profileId);
	address.setProfile(profile);
	PaysafeApiClient.CustomerServiceHandler(PaysafeApiClient)
	.createCustmerAddress(address, function(error, resCreateAdd) {
		//console.log(resCreateAdd);
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resCreateAdd));
		}
	});
};
/*
 * http://localhost:3000/createachbankaccount?profileId=9d940635-e7df-4cd5-9bd2-be2ea42b4377&addressId=f4e17e41-0db0-43d1-88c6-70b735e29016
 * 
 */
exports.createACHBankAccount = function(req, res) {
	var achbankAccountNumber = randomFixedInteger(6);
	var json = req.query;
	var profile = new PaysafeApiClient.Profiles();
	var achbankAccount = new PaysafeApiClient.ACHBankAccounts();
	var address = new PaysafeApiClient.Address();
	profile.setId(json.profileId);
	achbankAccount.setnickName("John's RBC Business Bank Account");
	achbankAccount.setaccountHolderName("XYZ Business");
	achbankAccount.setaccountNumber(achbankAccountNumber);
	console.log(achbankAccountNumber);
	achbankAccount.setroutingNumber("123456789");
	achbankAccount.setbillingAddressId(json.addressId);
	achbankAccount.setaccountType("CHECKING");
	
	achbankAccount.setProfile(profile);
	
	PaysafeApiClient.CustomerServiceHandler(PaysafeApiClient)
			.createACHBankAccount(achbankAccount, function(error, resCreateachbankaccount) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(resCreateachbankaccount));
				}
			});
};
/*
 * http://localhost:3000/createeftbankaccount?profileId=9d940635-e7df-4cd5-9bd2-be2ea42b4377&addressId=f4e17e41-0db0-43d1-88c6-70b735e29016
 * 
 */
exports.createEFTBankAccount = function(req, res) {
	var json = req.query;
	var profile = new PaysafeApiClient.Profiles();
	var eftbankAccountNumber = randomFixedInteger(6);
	console.log(eftbankAccountNumber);
	var eftbankAccount = new PaysafeApiClient.EFTBankAccounts();
	var address = new PaysafeApiClient.Address();
	profile.setId(json.profileId);
	eftbankAccount.setnickName("Sally's Bank of Montreal Account");
	eftbankAccount.setaccountHolderName("Sally");
	eftbankAccount.setaccountNumber(eftbankAccountNumber);
	eftbankAccount.settransitNumber("25039");
	eftbankAccount.setinstitutionId("001");
	eftbankAccount.setbillingAddressId(json.addressId);
	eftbankAccount.setProfile(profile);
	
	PaysafeApiClient.CustomerServiceHandler(PaysafeApiClient)
			.createEFTBankAccount(eftbankAccount, function(error, resCreateeftbankaccount) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(resCreateeftbankaccount));
				}
			});
};
/*
 * http://localhost:3000/createsepabankaccount?profileId=9d940635-e7df-4cd5-9bd2-be2ea42b4377&addressId=f4e17e41-0db0-43d1-88c6-70b735e29016
 * 
 */
exports.createSEPABankAccount = function(req, res) {
	var json = req.query;
	var profile = new PaysafeApiClient.Profiles();
	var sepabankAccount = new PaysafeApiClient.SEPABankAccounts();
	var address = new PaysafeApiClient.Address();
	profile.setId(json.profileId);
	sepabankAccount.setaccountHolderName("Sally Barnes");
	sepabankAccount.setiban("DE89370400440532013000");
	sepabankAccount.setbillingAddressId(json.addressId);
	sepabankAccount.setbic("OKOYFIHH");
	
	sepabankAccount.setProfile(profile);
	
	PaysafeApiClient.CustomerServiceHandler(PaysafeApiClient)
			.createSEPABankAccount(sepabankAccount, function(error, resCreatesepabankaccount) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(resCreatesepabankaccount));
				}
			});
};


/*
 * http://localhost:3000/submitEnrollmentLookup?cardNumber=4107857757053670
 * 
 */
exports.submitEnrollmentLookup = function(req, res){
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var enrollment = new PaysafeApiClient.Enrollmentchecks();
	var card = new PaysafeApiClient.Card();
	var cardexpiry = new PaysafeApiClient.CardExpiry();
	enrollment.setmerchantRefNum(merchantRefNumber);
	enrollment.setamount(5000);
	enrollment.setcurrency(config.currency_code);
	enrollment.setcustomerIp("172.0.0.1");
	enrollment.setuserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36");
	enrollment.setacceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
	enrollment.setmerchantUrl("https://www.merchant.com");
	
	card.setCardNum(json.cardNumber);
	
	cardexpiry.setMonth(10);
	cardexpiry.setYear(2019);
	
	card.setCardExpiry(cardexpiry);
	
	enrollment.setcard(card);
	PaysafeApiClient.ThreeDsecureServiceHandler(PaysafeApiClient)
			.submitEnrollment(enrollment, function(error, resenrollment) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(resenrollment));
				}
			});
}
/*
 * http://localhost:3000/submitAuthenticationRequest?enrollmentId=a1c26834-38c3-473f-ac62-0cdbc33ada48&paRes=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
 * 
 */
exports.submitAuthenticationRequest = function(req, res){
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var enrollment = new PaysafeApiClient.Enrollmentchecks();
	var card = new PaysafeApiClient.Card();
	var cardexpiry = new PaysafeApiClient.CardExpiry();
	var authentication = new PaysafeApiClient.authentication();

		authentication.setmerchantRefNum(merchantRefNumber);
		authentication.setpaRes(json.paRes);
		enrollment.setId(json.enrollmentId);
		authentication.setenrollment(enrollment);
		PaysafeApiClient.ThreeDsecureServiceHandler(PaysafeApiClient)
		.submitAuthentication(authentication, function(error, resauthentications) {
			if (error) {
				res.send(JSON.stringify(error));
			} else {
				res.send(JSON.stringify(resauthentications));
			}
		});
}
/*
 * http://localhost:3000/processACHpurchase
 * 
 */
exports.processACHpurchase = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var purchase = new PaysafeApiClient.Purchases();
	var profile = new PaysafeApiClient.Profiles();
	var achbankAccount = new PaysafeApiClient.ACHBankAccounts();
	var billingDetails = new PaysafeApiClient.BillingDetails();
	
	profile.setFirstName("Joe");
	profile.setLastName("Smith");
	profile.setEmail("Joe.Smith@hotmail.com");
	
	achbankAccount.setaccountHolderName("XYZ Company");
	achbankAccount.setaccountType("CHECKING");
	achbankAccount.setaccountNumber("143133");
	achbankAccount.setroutingNumber("211589828");
	achbankAccount.setpayMethod("WEB");
	
	billingDetails.setStreet("100 Queen Street West");
	billingDetails.setCity("Los Angeles");
	billingDetails.setState("CA");
	billingDetails.setCountry("US");
	billingDetails.setZip("90210");
	billingDetails.setPhone("3102649010");
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(10098);
	purchase.setcustomerIp("192.0.126.111");
	
	purchase.setach(achbankAccount);
	purchase.setprofile(profile);
	purchase.setbillingDetails(billingDetails);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessACHpurchase) {
		
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessACHpurchase));
		}
	});
}
/*
 * http://localhost:3000/processACHpurchaseWithPaymentToken?paymentToken=DNQjeb0jeBouYd5
 * 
 */
exports.processACHpurchaseWithPaymentToken = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var purchase = new PaysafeApiClient.Purchases();
	var achbankAccount = new PaysafeApiClient.ACHBankAccounts();
	
	achbankAccount.setpaymentToken(json.paymentToken);
	achbankAccount.setpayMethod("WEB");
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(100);
	purchase.setach(achbankAccount);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessACHpurchaseWithPaymentToken) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessACHpurchaseWithPaymentToken));
		}
	});
}
/*
 * http://localhost:3000/processEFTpurchase
 * 
 */
exports.processEFTpurchase = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var purchase = new PaysafeApiClient.Purchases();
	var profile = new PaysafeApiClient.Profiles();
	var eftbankAccount = new PaysafeApiClient.EFTBankAccounts();
	var billingDetails = new PaysafeApiClient.BillingDetails();
	
	profile.setFirstName("Joe");
	profile.setLastName("Smith");
	profile.setEmail("Joe.Smith@hotmail.com");
	
	eftbankAccount.setaccountHolderName("Sally");
	eftbankAccount.setaccountNumber("519090");
	eftbankAccount.settransitNumber("25039");
	eftbankAccount.setinstitutionId("001");
	
	
	billingDetails.setStreet("100 Queen Street West");
	billingDetails.setCity("Los Angeles");
	billingDetails.setState("CA");
	billingDetails.setCountry("US");
	billingDetails.setZip("90210");
	billingDetails.setPhone("3102649010");
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(10098);
	purchase.setcustomerIp("192.0.126.111");
	purchase.seteft(eftbankAccount);
	purchase.setprofile(profile);
	purchase.setbillingDetails(billingDetails);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessEFTpurchase) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessEFTpurchase));
		}
	});
}
/*
 * http://localhost:3000/processEFTpurchaseWithPaymentToken?paymentToken=
 * 
 */
exports.processEFTpurchaseWithPaymentToken = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var purchase = new PaysafeApiClient.Purchases();
	var eftbankAccount = new PaysafeApiClient.EFTBankAccounts();
	var json = req.query;
	eftbankAccount.setpaymentToken(json.paymentToken);
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(100);
	purchase.seteft(eftbankAccount);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessEFTpurchaseWithPaymentToken) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessEFTpurchaseWithPaymentToken));
		}
	});
}
/*
 * http://localhost:3000/processSEPApurchase
 * 
 */
exports.processSEPApurchase = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var purchase = new PaysafeApiClient.Purchases();
	var profile = new PaysafeApiClient.Profiles();
	var sepabankAccount = new PaysafeApiClient.SEPABankAccounts();
	var billingDetails = new PaysafeApiClient.BillingDetails();
	
	profile.setFirstName("Joe");
	profile.setLastName("Smith");
	profile.setEmail("Joe.Smith@hotmail.com");
	
	sepabankAccount.setaccountHolderName("Girish Ahirrao");
	sepabankAccount.setmandateReference("ABCDEFGHIJ10987");
	sepabankAccount.setiban("PL27114020040000300201355387");
	
	
	billingDetails.setStreet("100 Queen Street West");
	billingDetails.setCity("Los Angeles");
	billingDetails.setState("CA");
	billingDetails.setCountry("US");
	billingDetails.setZip("90210");
	billingDetails.setPhone("3102649010");
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(10098);
	purchase.setcustomerIp("192.0.126.111");
	purchase.setsepa(sepabankAccount);
	purchase.setprofile(profile);
	purchase.setbillingDetails(billingDetails);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessSEPApurchase) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessSEPApurchase));
		}
	});
}
/*
 * http://localhost:3000/processSEPApurchaseWithPaymentToken?paymentToken=
 * 
 */
exports.processSEPApurchaseWithPaymentToken = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;	
	
	var purchase = new PaysafeApiClient.Purchases();
	var sepabankAccount = new PaysafeApiClient.SEPABankAccounts();
	
	sepabankAccount.setpaymentToken(json.paymentToken);
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(100);
	purchase.setsepa(sepabankAccount);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessSEPApurchaseWithPaymentToken) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessSEPApurchaseWithPaymentToken));
		}
	});
}
/*
 * http://localhost:3000/processBACSpurchase
 * 
 */
exports.processBACSpurchase = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var purchase = new PaysafeApiClient.Purchases();
	var profile = new PaysafeApiClient.Profiles();
	var bacsbankAccount = new PaysafeApiClient.BACSBankAccounts();
	
	var billingDetails = new PaysafeApiClient.BillingDetails();
	
	profile.setFirstName("Joe");
	profile.setLastName("Smith");
	profile.setEmail("Joe.Smith@hotmail.com");
	
	bacsbankAccount.setaccountHolderName("Girish Ahirrao");
	bacsbankAccount.setsortCode("070246");
	bacsbankAccount.setaccountNumber(19706829);
	bacsbankAccount.setmandateReference("VIPINTEST1");
	
	billingDetails.setStreet("100 Queen Street West");
	billingDetails.setCity("Los Angeles");
	billingDetails.setState("CA");
	billingDetails.setCountry("US");
	billingDetails.setZip("90210");
	billingDetails.setPhone("3102649010");
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(10098);
	purchase.setcustomerIp("192.0.126.111");
	purchase.setbacs(bacsbankAccount);
	purchase.setprofile(profile);
	purchase.setbillingDetails(billingDetails);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessBACSpurchase) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessBACSpurchase));
		}
	});
}
/*
 * http://localhost:3000/processBACSpurchaseWithPaymentToken?paymentToken=
 * 
 */
exports.processBACSpurchaseWithPaymentToken = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;	
	
	var purchase = new PaysafeApiClient.Purchases();
	var bacsbankAccount = new PaysafeApiClient.BACSBankAccounts();
	
	bacsbankAccount.setpaymentToken(json.paymentToken);
	
	purchase.setmerchantRefNum(merchantRefNumber);
	purchase.setamount(100);
	purchase.setbacs(bacsbankAccount);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitPurchase(purchase, function(error, resprocessBACSpurchaseWithPaymentToken) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessBACSpurchaseWithPaymentToken));
		}
	});
}
/*
 * http://localhost:3000/processACHstandaloneCredit
 * 
 */
exports.processACHstandaloneCredit = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var standalonecredits = new PaysafeApiClient.Standalonecredits();
	var profile = new PaysafeApiClient.Profiles();
	var achbankAccount = new PaysafeApiClient.ACHBankAccounts();
	var billingDetails = new PaysafeApiClient.BillingDetails();
	
	profile.setFirstName("Joe");
	profile.setLastName("Smith");
	profile.setEmail("Joe.Smith@hotmail.com");
	
	achbankAccount.setaccountHolderName("XYZ Company");
	achbankAccount.setaccountType("CHECKING");
	achbankAccount.setaccountNumber("988772193");
	achbankAccount.setroutingNumber("211589828");
	achbankAccount.setpayMethod("WEB");
	
	billingDetails.setStreet("100 Queen Street West");
	billingDetails.setCity("Los Angeles");
	billingDetails.setState("CA");
	billingDetails.setCountry("US");
	billingDetails.setZip("90210");
	billingDetails.setPhone("3102649010");
	
	standalonecredits.setmerchantRefNum(merchantRefNumber);
	standalonecredits.setamount(10098);
	standalonecredits.setcustomerIp("192.0.126.111");
	standalonecredits.setach(achbankAccount);
	standalonecredits.setprofile(profile);
	standalonecredits.setbillingDetails(billingDetails);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitStandalone(standalonecredits, function(error, resprocessstandalonecredits) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessstandalonecredits));
		}
	});
}
/*
 * http://localhost:3000/processACHstandaloneCreditWithPaymentToken?paymentToken=
 * 
 */
exports.processACHstandaloneCreditWithPaymentToken = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;	
	
	var standalonecredits = new PaysafeApiClient.Standalonecredits();
	var achbankAccount = new PaysafeApiClient.ACHBankAccounts();
	
	achbankAccount.setpaymentToken(json.paymentToken);
	achbankAccount.setpayMethod("WEB");
	
	standalonecredits.setmerchantRefNum(merchantRefNumber);
	standalonecredits.setamount(100);
	standalonecredits.setach(achbankAccount);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitStandalone(standalonecredits, function(error, resprocessACHstandalonecreditsWithPaymentToken) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessACHstandalonecreditsWithPaymentToken));
		}
	});
}
/*
 * http://localhost:3000/processEFTstandaloneCredit
 * 
 */
exports.processEFTstandaloneCredit = function(req, res){
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var standalonecredits = new PaysafeApiClient.Standalonecredits();
	var profile = new PaysafeApiClient.Profiles();
	var eftbankAccount = new PaysafeApiClient.EFTBankAccounts();
	var billingDetails = new PaysafeApiClient.BillingDetails();
	
	profile.setFirstName("Joe");
	profile.setLastName("Smith");
	profile.setEmail("Joe.Smith@hotmail.com");
	
	eftbankAccount.setaccountHolderName("Sally");
	eftbankAccount.setaccountNumber("519090");
	eftbankAccount.settransitNumber("25039");
	eftbankAccount.setinstitutionId("001");
	
	
	billingDetails.setStreet("100 Queen Street West");
	billingDetails.setCity("Los Angeles");
	billingDetails.setState("CA");
	billingDetails.setCountry("US");
	billingDetails.setZip("90210");
	billingDetails.setPhone("3102649010");
	
	standalonecredits.setmerchantRefNum(merchantRefNumber);
	standalonecredits.setamount(10098);
	standalonecredits.setcustomerIp("192.0.126.111");
	standalonecredits.seteft(eftbankAccount);
	standalonecredits.setprofile(profile);
	standalonecredits.setbillingDetails(billingDetails);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitStandalone(standalonecredits, function(error, resprocessstandalonecredits) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessstandalonecredits));
		}
	});
}
/*
 * http://localhost:3000/processEFTstandaloneCreditWithPaymentToken?paymentToken=
 * 
 */
exports.processEFTstandaloneCreditWithPaymentToken = function(req, res){
	var json = req.query;	
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var standalonecredits = new PaysafeApiClient.Standalonecredits();
	var eftbankAccount = new PaysafeApiClient.EFTBankAccounts();
	
	eftbankAccount.setpaymentToken(json.paymentToken);
	
	standalonecredits.setmerchantRefNum(merchantRefNumber);
	standalonecredits.setamount(100);
	standalonecredits.seteft(eftbankAccount);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitStandalone(standalonecredits, function(error, resprocessEFTstandalonecreditsWithPaymentToken) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessEFTstandalonecreditsWithPaymentToken));
		}
	});
}
/*
 * http://localhost:3000/processBACSstandaloneCredit
 * 
 */
exports.processBACSstandaloneCredit = function(req, res){
	var standalonecredits = new PaysafeApiClient.Standalonecredits();
	var profile = new PaysafeApiClient.Profiles();
	var bacsbankAccount = new PaysafeApiClient.BACSBankAccounts();
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var billingDetails = new PaysafeApiClient.BillingDetails();
	
	profile.setFirstName("Joe");
	profile.setLastName("Smith");
	profile.setEmail("Joe.Smith@hotmail.com");
	
	bacsbankAccount.setaccountHolderName("Girish Ahirrao");
	bacsbankAccount.setsortCode("070246");
	bacsbankAccount.setaccountNumber(19706829);
	bacsbankAccount.setmandateReference("VIPINTEST1");
	
	billingDetails.setStreet("100 Queen Street West");
	billingDetails.setCity("Los Angeles");
	billingDetails.setState("CA");
	billingDetails.setCountry("US");
	billingDetails.setZip("90210");
	billingDetails.setPhone("3102649010");
	
	standalonecredits.setmerchantRefNum(merchantRefNumber);
	standalonecredits.setamount(10098);
	standalonecredits.setcustomerIp("192.0.126.111");
	standalonecredits.setbacs(bacsbankAccount);
	standalonecredits.setprofile(profile);
	standalonecredits.setbillingDetails(billingDetails);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitStandalone(standalonecredits, function(error, resprocessBACSstandalonecredits) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessBACSstandalonecredits));
		}
	});
}
/*
 * http://localhost:3000/processBACSstandaloneCreditWithPaymentToken?paymentToken=
 * 
 */
exports.processBACSstandaloneCreditWithPaymentToken = function(req, res){
	var json = req.query;	
	var merchantRefNumber = Math.random().toString(36).slice(2);
	var standalonecredits = new PaysafeApiClient.Standalonecredits();
	var bacsbankAccount = new PaysafeApiClient.BACSBankAccounts();
	
	bacsbankAccount.setpaymentToken(json.paymentToken);
	
	standalonecredits.setmerchantRefNum(merchantRefNumber);
	standalonecredits.setamount(100);
	standalonecredits.setbacs(bacsbankAccount);
	
	PaysafeApiClient.DirectDebitServiceHandler(PaysafeApiClient)
	.submitStandalone(standalonecredits, function(error, resprocessBACSstandalonecreditsWithPaymentToken) {
		if (error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(JSON.stringify(resprocessBACSstandalonecreditsWithPaymentToken));
		}
	});
}