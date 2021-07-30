/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type BookmarksPageQueryVariables = {
    userId: number;
};
export type BookmarksPageQueryResponse = {
    readonly bookmarks: ReadonlyArray<{
        readonly id: string;
        readonly question: {
            readonly content: string | null;
        } | null;
    } | null> | null;
};
export type BookmarksPageQuery = {
    readonly response: BookmarksPageQueryResponse;
    readonly variables: BookmarksPageQueryVariables;
};



/*
query BookmarksPageQuery(
  $userId: Int!
) {
  bookmarks(userId: $userId) {
    id
    question {
      content
      id
    }
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
        "name": "id",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "BookmarksPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Bookmark",
                    "kind": "LinkedField",
                    "name": "bookmarks",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Question",
                            "kind": "LinkedField",
                            "name": "question",
                            "plural": false,
                            "selections": [
                                (v3 /*: any*/)
                            ],
                            "storageKey": null
                        }
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
            "name": "BookmarksPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Bookmark",
                    "kind": "LinkedField",
                    "name": "bookmarks",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Question",
                            "kind": "LinkedField",
                            "name": "question",
                            "plural": false,
                            "selections": [
                                (v3 /*: any*/),
                                (v2 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "3ea8f4b9cadab8e4957f67ffbbfb1331",
            "id": null,
            "metadata": {},
            "name": "BookmarksPageQuery",
            "operationKind": "query",
            "text": "query BookmarksPageQuery(\n  $userId: Int!\n) {\n  bookmarks(userId: $userId) {\n    id\n    question {\n      content\n      id\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '3a723c2ea8ee9bf5938cac6631d6fdc3';
export default node;
