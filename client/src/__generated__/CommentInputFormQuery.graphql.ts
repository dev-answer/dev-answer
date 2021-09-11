/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CommentInputFormQueryVariables = {
    accessToken: string;
};
export type CommentInputFormQueryResponse = {
    readonly myInfo: {
        readonly id: string;
    } | null;
};
export type CommentInputFormQuery = {
    readonly response: CommentInputFormQueryResponse;
    readonly variables: CommentInputFormQueryVariables;
};



/*
query CommentInputFormQuery(
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
            "name": "CommentInputFormQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "CommentInputFormQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "4cb1ff13b3b2f31d7a26aaa70571b137",
            "id": null,
            "metadata": {},
            "name": "CommentInputFormQuery",
            "operationKind": "query",
            "text": "query CommentInputFormQuery(\n  $accessToken: String!\n) {\n  myInfo(accessToken: $accessToken) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '1bad94b6d98f39f22a762083812b79a5';
export default node;
