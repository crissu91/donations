const request = require("supertest");
const app = require("../app");

describe("GET api/supporters", () => {
    test("with a status 200, it should return all the supporters", () => {
        return request(app)
            .get('/supporters')
            .expect(200)
            .then(({ body }) => {
                expect(body.supporters).toBeInstanceOf(Array)
                expect(body.supporters.length).toBe(500)
                body.supporters.forEach((supporter) => {
                    expect(supporter).toHaveProperty(
                        'object', expect.any(String),
                        'id', expect.any(String),
                        'created_at', expect.any(String),
                        'name', expect.any(String),
                        'address_1', expect.any(String),
                        'address_2', expect.any(String),
                        'city', expect.any(String),
                        'postcode', expect.any(String)
                    )
                })
            })
    })
})
describe("GET api/donations", () => {
    test("with a status 200, it should return all the donations", () => {
        return request(app)
            .get('/donations')
            .expect(200)
            .then(({ body }) => {
                expect(body.donations).toBeInstanceOf(Array)
                expect(body.donations.length).toBe(3050)
                body.donations.forEach((donation) => {
                    expect(donation).toHaveProperty(
                        'object', expect.any(String),
                        'id', expect.any(String),
                        'created_at', expect.any(String),
                        'supporter_id', expect.any(String),
                        'amount', expect.any(Number)
                    )
                })
            })
    })
})
describe("GET api/supporter-donations", () => {
    test.skip("with a status 200, it should return all the supporters with a key of donations and a key of totalDonations", () => {
        return request(app)
            .get('/supporter-donations')
            .expect(200)
            .then(({ body }) => {
                expect(body.supporters).toBeInstanceOf(Array)
                expect(body.supporters.length).toBe(500)
                body.supporters.forEach((supporter) => {
                    expect(supporter).toHaveProperty(
                        'donations', expect.any(Array),
                        'totalDonations', expect.any(Number),
                    )
                })
            })
    })
})