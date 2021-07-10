/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginCallbackPageQueryVariables = {
    code: string;
};
export type LoginCallbackPageQueryResponse = {
    readonly login: {
        readonly accessToken: string | null;
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
    accessToken
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
                    "name": "accessToken",
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
            "cacheID": "6904e19cbf64c83357bc639de58cec6f",
            "id": null,
            "metadata": {},
            "name": "LoginCallbackPageQuery",
            "operationKind": "query",
            "text": "query LoginCallbackPageQuery(\n  $code: String!\n) {\n  login(code: $code) {\n    accessToken\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '1bb1189fb373a0c09b6917d0565e78bb';
export default node;
