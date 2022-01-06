import { InvalidParamError } from "../../errors";
import { badRequest, serverError, ok } from "../../helpers/http-helper";
import { Validation } from "../../helpers/validators/validation";
import { Controller, EmailValidator, HttpRequest, HttpResponse, AddAccount } from "./signup-protocols";

export class SignUpController implements Controller {

    private readonly emailValidator: EmailValidator
    private readonly addAccount: AddAccount
    private readonly validation: Validation

    constructor(emailValidator: EmailValidator, addAccount: AddAccount, validation: Validation) {
        this.emailValidator = emailValidator
        this.addAccount = addAccount
        this.validation = validation
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { password, passwordConfirmation, email, username } = httpRequest.body

            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError("passwordConfirmation"))
            }

            const isValid = this.emailValidator.isValid(email)
            if (!isValid) {
                return badRequest(new InvalidParamError("email"))
            }

            const account = await this.addAccount.add({
                username,
                email,
                password
            })

            return ok(account)
        } catch (error) {
            return serverError(error)
        }
    }
}