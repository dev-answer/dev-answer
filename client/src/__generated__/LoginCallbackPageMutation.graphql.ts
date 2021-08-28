/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginCallbackPageMutationVariables = {
    code: string;
};
export type LoginCallbackPageMutationResponse = {
    readonly login: {
        readonly accessToken: string | null;
    };
};
export type LoginCallbackPageMutation = {
    readonly response: LoginCallbackPageMutationResponse;
    readonly variables: LoginCallbackPageMutationVariables;
};



/*
mutation LoginCallbackPageMutation(
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
            "name": "LoginCallbackPageMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "LoginCallbackPageMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "c58574df36106dbfc9b06cf0d3b42be8",
            "id": null,
            "metadata": {},
            "name": "LoginCallbackPageMutation",
            "operationKind": "mutation",
            "text": "mutation LoginCallbackPageMutation(\n  $code: String!\n) {\n  login(code: $code) {\n    accessToken\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '867c9c832943ed00b9edbe7c53d138aa';
export default node;
