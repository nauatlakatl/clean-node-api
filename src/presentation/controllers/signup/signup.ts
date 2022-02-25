import { badRequest, serverError, ok } from "../../helpers/http/http-helper";
import { Validation } from "../../protocols/validation";
import { Controller, HttpRequest, HttpResponse, AddAccount } from "./signup-protocols";

export class SignUpController implements Controller {

    private readonly addAccount: AddAccount
    private readonly validation: Validation

    constructor(addAccount: AddAccount, validation: Validation) {
        this.addAccount = addAccount
        this.validation = validation
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { password, email, username } = httpRequest.body

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