/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type BookmarkButtonAddMutationVariables = {
    userId?: number | null;
    questionId?: number | null;
};
export type BookmarkButtonAddMutationResponse = {
    readonly addBookmark: {
        readonly user: {
            readonly id: string;
        } | null;
        readonly question: {
            readonly id: string;
        } | null;
    } | null;
};
export type BookmarkButtonAddMutation = {
    readonly response: BookmarkButtonAddMutationResponse;
    readonly variables: BookmarkButtonAddMutationVariables;
};



/*
mutation BookmarkButtonAddMutation(
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
            "name": "BookmarkButtonAddMutation",
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
            "name": "BookmarkButtonAddMutation",
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
            "cacheID": "857ba94c95f78c1b7daa91f2a08cd1a1",
            "id": null,
            "metadata": {},
            "name": "BookmarkButtonAddMutation",
            "operationKind": "mutation",
            "text": "mutation BookmarkButtonAddMutation(\n  $userId: Int\n  $questionId: Int\n) {\n  addBookmark(userId: $userId, questionId: $questionId) {\n    user {\n      id\n    }\n    question {\n      id\n    }\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '804e6a9a261f787c76914abbaca4e905';
export default node;
