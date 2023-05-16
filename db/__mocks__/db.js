const connect = async () => {
    console.log("MongoDB is mocked connection");
};

const disconnect = async () => {
    console.log("Mocked Disconnection");
}

const findUser = async(obj) => {
    return Promise.resolve({
        firstName: "Alan",
        lastName: "Shearer",
        address: "123 Main street",
        city: "Newcastle",
        state: "North",
        zipCode: "123lll",
        email: "as@mail.com",
        password: "123",
    });
}

const saveUser = async(newUser) => {
    return Promise.resolve({
        firstName: "Alan",
        lastName: "Shearer",
        address: "123 Main street",
        city: "Newcastle",
        state: "North",
        zipCode: "123lll",
        email: "as@mail.com",
        password: "123",
    })
}

module.exports = { connect, disconnect, findUser, saveUser }