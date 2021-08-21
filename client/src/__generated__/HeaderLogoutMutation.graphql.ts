/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HeaderLogoutMutationVariables = {
    accessToken: string;
};
export type HeaderLogoutMutationResponse = {
    readonly logout: boolean | null;
};
export type HeaderLogoutMutation = {
    readonly response: HeaderLogoutMutationResponse;
    readonly variables: HeaderLogoutMutationVariables;
};



/*
mutation HeaderLogoutMutation(
  $accessToken: String!
) {
  logout(accessToken: $accessToken)
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "accessToken"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "accessToken",
                    "variableName": "accessToken"
                }
            ],
            "kind": "ScalarField",
            "name": "logout",
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "HeaderLogoutMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "HeaderLogoutMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "ce046a22dcddb3c956b1d99f2efbd5a5",
            "id": null,
            "metadata": {},
            "name": "HeaderLogoutMutation",
            "operationKind": "mutation",
            "text": "mutation HeaderLogoutMutation(\n  $accessToken: String!\n) {\n  logout(accessToken: $accessToken)\n}\n"
        }
    } as any;
})();
(node as any).hash = '7fd23d1c8852c7ff14cd7427248cb769';
export default node;
