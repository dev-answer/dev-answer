/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type BookmarkButtonRemoveMutationVariables = {
    bookmarkId: number;
};
export type BookmarkButtonRemoveMutationResponse = {
    readonly removeBookmark: {
        readonly id: string;
    } | null;
};
export type BookmarkButtonRemoveMutation = {
    readonly response: BookmarkButtonRemoveMutationResponse;
    readonly variables: BookmarkButtonRemoveMutationVariables;
};



/*
mutation BookmarkButtonRemoveMutation(
  $bookmarkId: Int!
) {
  removeBookmark(bookmarkId: $bookmarkId) {
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "bookmarkId"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "bookmarkId",
            "variableName": "bookmarkId"
        } as any
    ], v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "BookmarkButtonRemoveMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Bookmark",
                    "kind": "LinkedField",
                    "name": "removeBookmark",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "BookmarkButtonRemoveMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Bookmark",
                    "kind": "LinkedField",
                    "name": "removeBookmark",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "filters": null,
                            "handle": "deleteRecord",
                            "key": "",
                            "kind": "ScalarHandle",
                            "name": "id"
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "c0028a0efed17a57e4538f778efe8ebf",
            "id": null,
            "metadata": {},
            "name": "BookmarkButtonRemoveMutation",
            "operationKind": "mutation",
            "text": "mutation BookmarkButtonRemoveMutation(\n  $bookmarkId: Int!\n) {\n  removeBookmark(bookmarkId: $bookmarkId) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd2df1444663b3efc40c44c508e3adc65';
export default node;
