var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getUrl = (url, params = {}) => {
    const uri = new URL(url);
    Object.keys(params).forEach((key) => {
        if (!params[key])
            return;
        uri.searchParams.set(key, params[key]);
    });
    return uri.toString();
};
export const get = (url, params) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(getUrl(url, params), { method: "GET" });
});
export const post = (url, params, body) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(getUrl(url, params), {
        method: "POST",
        body: JSON.stringify(body),
    });
});
