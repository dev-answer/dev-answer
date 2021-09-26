/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserInfoQueryVariables = {
    userId: string;
};
export type UserInfoQueryResponse = {
    readonly userInfo: {
        readonly name: string;
        readonly gitHubURL: string;
        readonly profileImageURL: string;
    } | null;
};
export type UserInfoQuery = {
    readonly response: UserInfoQueryResponse;
    readonly variables: UserInfoQueryVariables;
};



/*
query UserInfoQuery(
  $userId: String!
) {
  userInfo(userId: $userId) {
    name
    gitHubURL
    profileImageURL
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "userId"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
        } as any
    ], v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gitHubURL",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "profileImageURL",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "UserInfoQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "userInfo",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "UserInfoQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "userInfo",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "c3413e8b29dcee956076c66258adc334",
            "id": null,
            "metadata": {},
            "name": "UserInfoQuery",
            "operationKind": "query",
            "text": "query UserInfoQuery(\n  $userId: String!\n) {\n  userInfo(userId: $userId) {\n    name\n    gitHubURL\n    profileImageURL\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b06b845a8099fa20c9716a44d6bdc1da';
export default node;
