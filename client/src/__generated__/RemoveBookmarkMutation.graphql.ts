/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RemoveBookmarkMutationVariables = {
    bookmarkId: number;
};
export type RemoveBookmarkMutationResponse = {
    readonly removeBookmark: {
        readonly id: string;
    } | null;
};
export type RemoveBookmarkMutation = {
    readonly response: RemoveBookmarkMutationResponse;
    readonly variables: RemoveBookmarkMutationVariables;
};



/*
mutation RemoveBookmarkMutation(
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
            "name": "RemoveBookmarkMutation",
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
            "name": "RemoveBookmarkMutation",
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
            "cacheID": "fb3084638cf9752a93072c72aac5dd05",
            "id": null,
            "metadata": {},
            "name": "RemoveBookmarkMutation",
            "operationKind": "mutation",
            "text": "mutation RemoveBookmarkMutation(\n  $bookmarkId: Int!\n) {\n  removeBookmark(bookmarkId: $bookmarkId) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '0901f6d778edc41861dd3cb4cba0dd4c';
export default node;
