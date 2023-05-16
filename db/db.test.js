const {connect, disconnect, saveUser, findUser} = require("./db");
const User = require("../models/userModel");
const mongoose = require("mongoose");

jest.mock("./db");
beforeAll(async () => {
    return await connect();
});

describe("User Test Suite", () => {
        test("As a user I want to save a user to the databse", async () => {
            const newUser = new User({
                firstName: "Alan",
                lastName: "Shearer",
                address: "123 Main street",
                city: "Newcastle",
                state: "North",
                zipCode: "123lll",
                email: "as@mail.com",
                password: "123",
            });
            const user = await saveUser(newUser);
            expect(user.firstName).toEqual("Alan");
            expect(user.lastName).toEqual("Shearer");
            expect(user.address).toEqual("123 Main street");
            expect(user.city).toEqual("Newcastle");
            expect(user.state).toEqual("North");
            expect(user.zipCode).toEqual("123lll");
            expect(user.email).toEqual("as@mail.com");
            expect(user.password).toEqual("123");
        });

        test("As a user I want to find a user by any property", async () => {
            const obj = {firstName:"Alan"};
            await findUser(obj).then(user => {
                expect(user.firstName).toBe("Alan");
            }).catch(err => { });
        })
});


afterAll(async () => {
    return await disconnect();
});