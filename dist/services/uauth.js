var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { get, getUrl, post } from "./https";
import { UHost } from "./uhost";
import { UPath } from "./upath";
export class UAuth {
    constructor(host, path) {
        this.host = new UHost("local");
        this.path = new UPath();
        if (host)
            this.host = host;
        if (path)
            this.path = path;
    }
    signUp(name, email, password, platform) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield post(this.host.host + this.path.signup, {}, { name, email, password, platform });
            const result = (yield response.json());
            if (!((_a = result.data) === null || _a === void 0 ? void 0 : _a.token))
                throw new Error(result.message);
            window.cookieStore.set({ name: "token", value: result.data.token });
            return result.data.token;
        });
    }
    signIn(email, password, platform) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield post(this.host.host + this.path.signin, {}, { email, password, platform });
            const result = (yield response.json());
            if (!((_a = result.data) === null || _a === void 0 ? void 0 : _a.token))
                throw new Error(result.message);
            window.cookieStore.set({ name: "token", value: result.data.token });
            return result.data.token;
        });
    }
    signOut(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (token)
                window.cookieStore.set({ name: "token", value: token });
            const response = yield get(getUrl(this.host.host + this.path.signout), {});
            const result = (yield response.json());
            if (response.status != 200)
                throw new Error(result.message);
            window.cookieStore.delete({ name: "token" });
            return true;
        });
    }
    signOff(email, password, platform, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (token)
                window.cookieStore.set({ name: "token", value: token });
            const response = yield post(getUrl(this.host.host + this.path.signoff), {}, { email, password, platform });
            const result = (yield response.json());
            if (response.status != 200)
                throw new Error(result.message);
            window.cookieStore.delete({ name: "token" });
            return true;
        });
    }
}
