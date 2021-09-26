/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionsPageQueryVariables = {
    userId: number;
};
export type QuestionsPageQueryResponse = {
    readonly allQuestions: ReadonlyArray<{
        readonly id: string;
        readonly content: string;
    }>;
    readonly bookmarks: ReadonlyArray<{
        readonly id: string;
        readonly question: {
            readonly id: string;
            readonly content: string;
        } | null;
    } | null> | null;
};
export type QuestionsPageQuery = {
    readonly response: QuestionsPageQueryResponse;
    readonly variables: QuestionsPageQueryVariables;
};



/*
query QuestionsPageQuery(
  $userId: Int!
) {
  allQuestions {
    id
    content
  }
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
        (v1 /*: any*/),
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
        } as any
    ], v3 = [
        {
            "alias": null,
            "args": null,
            "concreteType": "Question",
            "kind": "LinkedField",
            "name": "allQuestions",
            "plural": true,
            "selections": (v2 /*: any*/),
            "storageKey": null
        } as any,
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
                    "selections": (v2 /*: any*/),
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
            "name": "QuestionsPageQuery",
            "selections": (v3 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "QuestionsPageQuery",
            "selections": (v3 /*: any*/)
        },
        "params": {
            "cacheID": "715dfd30e4616249db33cc10fa645eec",
            "id": null,
            "metadata": {},
            "name": "QuestionsPageQuery",
            "operationKind": "query",
            "text": "query QuestionsPageQuery(\n  $userId: Int!\n) {\n  allQuestions {\n    id\n    content\n  }\n  bookmarks(userId: $userId) {\n    id\n    question {\n      id\n      content\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'c83ebe2bebc29205469720b0cf9898db';
export default node;
