/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginCallbackPageQueryVariables = {
    code: string;
};
export type LoginCallbackPageQueryResponse = {
    readonly login: {
        readonly token: string | null;
    };
};
export type LoginCallbackPageQuery = {
    readonly response: LoginCallbackPageQueryResponse;
    readonly variables: LoginCallbackPageQueryVariables;
};



/*
query LoginCallbackPageQuery(
  $code: String!
) {
  login(code: $code) {
    token
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "code"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "code",
                    "variableName": "code"
                }
            ],
            "concreteType": "Auth",
            "kind": "LinkedField",
            "name": "login",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "token",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "LoginCallbackPageQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "LoginCallbackPageQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "d10c18a17d83bd5daa47aefc1af3bcf4",
            "id": null,
            "metadata": {},
            "name": "LoginCallbackPageQuery",
            "operationKind": "query",
            "text": "query LoginCallbackPageQuery(\n  $code: String!\n) {\n  login(code: $code) {\n    token\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9b8e1fc9c4029534349dca9730fa01bd';
export default node;
