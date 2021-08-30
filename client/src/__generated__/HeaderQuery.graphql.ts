/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HeaderQueryVariables = {
    accessToken: string;
};
export type HeaderQueryResponse = {
    readonly myInfo: {
        readonly id: string;
    } | null;
};
export type HeaderQuery = {
    readonly response: HeaderQueryResponse;
    readonly variables: HeaderQueryVariables;
};



/*
query HeaderQuery(
  $accessToken: String!
) {
  myInfo(accessToken: $accessToken) {
    id
  }
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "myInfo",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
            "name": "HeaderQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "HeaderQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "474b94799bd78e75c17f5d6ceb475854",
            "id": null,
            "metadata": {},
            "name": "HeaderQuery",
            "operationKind": "query",
            "text": "query HeaderQuery(\n  $accessToken: String!\n) {\n  myInfo(accessToken: $accessToken) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '590c96f98f46b1087de8a8e3f6aa144b';
export default node;
