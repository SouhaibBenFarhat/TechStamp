const Business = require('../models/business.model.js');

module.exports.addBusiness = (business) => {
    return new Promise((resolve, reject) => {
        Business.addBusiness(business).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.findAllBusiness = () => {
    return new Promise((resolve, reject) => {
        Business.findAllBusiness().then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.findBusinessByUser = (userId) => {
    return new Promise((resolve, reject) => {
        Business.findBusinessByUser(userId).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}
module.exports.findBusinessById = (businessId) => {
    return new Promise((resolve, reject) => {
        Business.findBusinessById(businessId).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.updateBusiness = (business) => {
    return new Promise((resolve, reject) => {
        Business.updateBusiness(business).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}