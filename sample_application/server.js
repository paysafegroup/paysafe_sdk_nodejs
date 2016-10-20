
/**
 * Module dependencies.
 */
var express = require('express')
  , sampleApiRoutes = require('./sampleApiRoutes')
  , http = require('http');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);

app.get('/createProfile', sampleApiRoutes.createProfile);
app.get('/createCard', sampleApiRoutes.createCard);
app.get('/cardPayment', sampleApiRoutes.cardpayment);
app.get('/cardCustomer', sampleApiRoutes.cardCustomer);

app.get('/createAddressInProfile', sampleApiRoutes.createAddress);
app.get('/createachbankaccount', sampleApiRoutes.createACHBankAccount);
app.get('/createeftbankaccount', sampleApiRoutes.createEFTBankAccount);
app.get('/createsepabankaccount', sampleApiRoutes.createSEPABankAccount);

app.get('/submitEnrollmentLookup', sampleApiRoutes.submitEnrollmentLookup);
app.get('/submitAuthenticationRequest', sampleApiRoutes.submitAuthenticationRequest);

app.get('/processACHpurchase', sampleApiRoutes.processACHpurchase);
app.get('/processACHpurchaseWithPaymentToken', sampleApiRoutes.processACHpurchaseWithPaymentToken);

app.get('/processEFTpurchase', sampleApiRoutes.processEFTpurchase);
app.get('/processEFTpurchaseWithPaymentToken', sampleApiRoutes.processEFTpurchaseWithPaymentToken);

app.get('/processSEPApurchase', sampleApiRoutes.processSEPApurchase);
app.get('/processSEPApurchaseWithPaymentToken', sampleApiRoutes.processSEPApurchaseWithPaymentToken);

app.get('/processBACSpurchase', sampleApiRoutes.processBACSpurchase);
app.get('/processBACSpurchaseWithPaymentToken', sampleApiRoutes.processBACSpurchaseWithPaymentToken);

app.get('/processACHstandaloneCredit', sampleApiRoutes.processACHstandaloneCredit);
app.get('/processACHstandaloneCreditWithPaymentToken', sampleApiRoutes.processACHstandaloneCreditWithPaymentToken);

app.get('/processEFTstandaloneCredit', sampleApiRoutes.processEFTstandaloneCredit);
app.get('/processEFTstandaloneCreditWithPaymentToken', sampleApiRoutes.processEFTstandaloneCreditWithPaymentToken);

app.get('/processBACSstandaloneCredit', sampleApiRoutes.processBACSstandaloneCredit);
app.get('/processBACSstandaloneCreditWithPaymentToken', sampleApiRoutes.processBACSstandaloneCreditWithPaymentToken);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
