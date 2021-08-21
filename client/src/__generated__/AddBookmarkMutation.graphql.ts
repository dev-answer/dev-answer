/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddBookmarkMutationVariables = {
    userId?: number | null;
    questionId?: number | null;
};
export type AddBookmarkMutationResponse = {
    readonly addBookmark: {
        readonly user: {
            readonly id: string;
        } | null;
        readonly question: {
            readonly id: string;
        } | null;
    } | null;
};
export type AddBookmarkMutation = {
    readonly response: AddBookmarkMutationResponse;
    readonly variables: AddBookmarkMutationVariables;
};



/*
mutation AddBookmarkMutation(
  $userId: Int
  $questionId: Int
) {
  addBookmark(userId: $userId, questionId: $questionId) {
    user {
      id
    }
    question {
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "questionId"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "userId"
    } as any, v2 = [
        {
            "kind": "Variable",
            "name": "questionId",
            "variableName": "questionId"
        } as any,
        {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
        } as any
    ], v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v4 = [
        (v3 /*: any*/)
    ], v5 = {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": (v4 /*: any*/),
        "storageKey": null
    } as any, v6 = {
        "alias": null,
        "args": null,
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "question",
        "plural": false,
        "selections": (v4 /*: any*/),
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "AddBookmarkMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "Bookmark",
                    "kind": "LinkedField",
                    "name": "addBookmark",
                    "plural": false,
                    "selections": [
                        (v5 /*: any*/),
                        (v6 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "AddBookmarkMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "Bookmark",
                    "kind": "LinkedField",
                    "name": "addBookmark",
                    "plural": false,
                    "selections": [
                        (v5 /*: any*/),
                        (v6 /*: any*/),
                        (v3 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "306e9d103c5ad2f4c6053d7930bc1de5",
            "id": null,
            "metadata": {},
            "name": "AddBookmarkMutation",
            "operationKind": "mutation",
            "text": "mutation AddBookmarkMutation(\n  $userId: Int\n  $questionId: Int\n) {\n  addBookmark(userId: $userId, questionId: $questionId) {\n    user {\n      id\n    }\n    question {\n      id\n    }\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b85a225d14b038d4b82947c9347f7b92';
export default node;
