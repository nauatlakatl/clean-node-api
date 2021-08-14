import { SignUpController } from "./signup"
import { MissingParamError } from "../errors/missing-param-error";

describe("SignUp Controller", () => {
    test("Should return 400 if no username is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: "any_email@mail.com",
                password: "any_password",
                passwordConfirmation: "any_password"
            }
        }

        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError("username"))
    })

    test("Should return 400 if no email is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                username: "any_username",
                password: "any_password",
                passwordConfirmation: "any_password"
            }
        }

        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError("email"))
    })

    test("Should return 400 if no password is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                username: "any_username",
                email: "any_email@mail.com",
                passwordConfirmation: "any_password"
            }
        }

        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError("password"))
    })
})