import { HttpResponse, HttpRequest } from "../protocols/http"
import { MissingParamError } from "../errors/missing-param-error";

export class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.username) {
            return {
                statusCode: 400,
                body: new MissingParamError("username")
            }
        }
        if (!httpRequest.body.email) {
            return {
                statusCode: 400,
                body: new MissingParamError("email")
            }
        }
    }
}