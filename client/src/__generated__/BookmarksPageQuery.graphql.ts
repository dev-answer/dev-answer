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
            readonly id: string;
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
      id
      content
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
    ], v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v2 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "userId",
                    "variableName": "userId"
                }
            ],
            "concreteType": "Bookmark",
            "kind": "LinkedField",
            "name": "bookmarks",
            "plural": true,
            "selections": [
                (v1 /*: any*/),
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "question",
                    "plural": false,
                    "selections": [
                        (v1 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "content",
                            "storageKey": null
                        }
                    ],
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
            "name": "BookmarksPageQuery",
            "selections": (v2 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "BookmarksPageQuery",
            "selections": (v2 /*: any*/)
        },
        "params": {
            "cacheID": "48e9785676510a53f38d4b4cd3b443a8",
            "id": null,
            "metadata": {},
            "name": "BookmarksPageQuery",
            "operationKind": "query",
            "text": "query BookmarksPageQuery(\n  $userId: Int!\n) {\n  bookmarks(userId: $userId) {\n    id\n    question {\n      id\n      content\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'f13bc25a7e9b7554403ea82e605fc532';
export default node;
