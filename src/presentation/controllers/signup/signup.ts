import { MissingParamError, InvalidParamError } from "../../errors";
import { badRequest, serverError } from "../../helpers/http-helper";
import { Controller, EmailValidator, HttpRequest, HttpResponse, AddAccount } from "./signup-protocols";

export class SignUpController implements Controller {

    private readonly emailValidator: EmailValidator
    private readonly addAccount: AddAccount

    constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
        this.emailValidator = emailValidator
        this.addAccount = addAccount
    }

    handle(httpRequest: HttpRequest): HttpResponse {
        try {
            const requiredFields = ["username", "email", "password", "passwordConfirmation"]
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const { password, passwordConfirmation, email, username } = httpRequest.body

            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError("passwordConfirmation"))
            }

            const isValid = this.emailValidator.isValid(email)
            if (!isValid) {
                return badRequest(new InvalidParamError("email"))
            }

            const account = this.addAccount.add({
                username,
                email,
                password
            })

            return {
                statusCode: 200,
                body: account
            }
        } catch (error) {
            return serverError()
        }
    }
}