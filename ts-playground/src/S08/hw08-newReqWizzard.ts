// Model the New Request wizard data as types: ContactDetails, Location, RequestDetails, Attachment, 
// and one NewRequest that combines them

type RequestDetails = {
    requestTitle: string;
    requestDescription: string;
    dateOfRequest: Date;
    category: string;
    priority: string;
};

type Location = {
    city: string;
    postalCode: number;
    streetName: string;
    streetNumber: string;
    locationDescription: string;
};

type ContactDetails = {
    email: string;
    phone: string;
    mailingAddress?: string
};

type Attachment = {
    consentTerms:boolean;
    attachmnet?:string;
};

type NewRequest = {
basicInfo: RequestDetails;
locationDetails: Location;
description: RequestDetails;
contactInfo: ContactDetails;
attachment?: Attachment;
};

//Create 3 valid test data objects and 3 invalid ones (missing or wrong fields), with a comment why each is invalid

const currentDate :Date = new Date();

const requestDetails1 : RequestDetails = {
    requestTitle: "Details-1",
    requestDescription: "Some descr 1",
    dateOfRequest: currentDate,
    category: "Cat1",
    priority: "Low"
}

const location1 : Location = {
    city: "Sofia",
    postalCode: 1000,
    streetName: "Alexandar Malinov",
    streetNumber: "25",
    locationDescription: "Location descr 123",
}

const contact1 : ContactDetails = {
    email : "test@test.ts",
    phone : "+359888999000"
}

// invalid test data object - one propery has wrong type
const contact2 : ContactDetails = {
    email : "test2@test.ts",
    phone : 0888123456
}

// invalid test data object - one mandatory property is missing
const attach1 : Attachment = {
    attachmnet : "aaa"
}

// invalid test data object - propery "description" has wrong type string insead of "RequestDetails"
const request1 : NewRequest = {
basicInfo: requestDetails1,
locationDetails: location1,
description: "test123",
contactInfo: contact1,
attachment?: attach1,
};

// Write a TestDataFactory class with a method validRequest(overrides?)
// that returns a fresh object each time, using spread for the override
class TestDataFactory{
    constructor(
        public testData:string
    ){}

    validRequest(data:string):boolean {
        var isValid = data.length !== 0
        return isValid
    }
}

const data1 = new TestDataFactory ("test");
data1.validRequest("ttt"); // should return true