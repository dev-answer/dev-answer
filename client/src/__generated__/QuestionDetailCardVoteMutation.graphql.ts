/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionDetailCardVoteMutationVariables = {
    questionId: number;
    userId: string;
    kind: string;
};
export type QuestionDetailCardVoteMutationResponse = {
    readonly vote: {
        readonly votes: ReadonlyArray<{
            readonly userId: string;
            readonly kind: string;
        }>;
    } | null;
};
export type QuestionDetailCardVoteMutation = {
    readonly response: QuestionDetailCardVoteMutationResponse;
    readonly variables: QuestionDetailCardVoteMutationVariables;
};



/*
mutation QuestionDetailCardVoteMutation(
  $questionId: Int!
  $userId: String!
  $kind: String!
) {
  vote(questionId: $questionId, userId: $userId, kind: $kind) {
    votes {
      userId
      kind
    }
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "kind"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "questionId"
    } as any, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "userId"
    } as any, v3 = [
        {
            "kind": "Variable",
            "name": "kind",
            "variableName": "kind"
        } as any,
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
    ], v4 = {
        "alias": null,
        "args": null,
        "concreteType": "QuestionVote",
        "kind": "LinkedField",
        "name": "votes",
        "plural": true,
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "userId",
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
                "storageKey": null
            }
        ],
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/),
                (v2 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "QuestionDetailCardVoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "vote",
                    "plural": false,
                    "selections": [
                        (v4 /*: any*/)
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
                (v2 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "QuestionDetailCardVoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "vote",
                    "plural": false,
                    "selections": [
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
            "cacheID": "2a33e91e9eee7298ba22fcb02fdc7e20",
            "id": null,
            "metadata": {},
            "name": "QuestionDetailCardVoteMutation",
            "operationKind": "mutation",
            "text": "mutation QuestionDetailCardVoteMutation(\n  $questionId: Int!\n  $userId: String!\n  $kind: String!\n) {\n  vote(questionId: $questionId, userId: $userId, kind: $kind) {\n    votes {\n      userId\n      kind\n    }\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '760e674f02f0de47a1204fd9dc4e7c56';
export default node;
