/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionDetailPageQueryVariables = {
    questionId: number;
};
export type QuestionDetailPageQueryResponse = {
    readonly questionDetail: {
        readonly " $fragmentRefs": FragmentRefs<"QuestionDetailCard_question">;
    } | null;
};
export type QuestionDetailPageQuery = {
    readonly response: QuestionDetailPageQueryResponse;
    readonly variables: QuestionDetailPageQueryVariables;
};



/*
query QuestionDetailPageQuery(
  $questionId: Int!
) {
  questionDetail(questionId: $questionId) {
    ...QuestionDetailCard_question
    id
  }
}

fragment QuestionDetailCard_question on Question {
  id
  content
  author {
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
            "name": "questionId"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "questionId",
            "variableName": "questionId"
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
            "name": "QuestionDetailPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionDetail",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionDetailCard_question"
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
            "name": "QuestionDetailPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionDetail",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "content",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "QuestionAuthor",
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "gitHubURL",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "profileImageURL",
                                    "storageKey": null
                                },
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
            "cacheID": "cb3f3f5a40c5e31e2f6ffbe2d5baa279",
            "id": null,
            "metadata": {},
            "name": "QuestionDetailPageQuery",
            "operationKind": "query",
            "text": "query QuestionDetailPageQuery(\n  $questionId: Int!\n) {\n  questionDetail(questionId: $questionId) {\n    ...QuestionDetailCard_question\n    id\n  }\n}\n\nfragment QuestionDetailCard_question on Question {\n  id\n  content\n  author {\n    name\n    gitHubURL\n    profileImageURL\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9d9c4239620d2dce90737ba5a562cc3d';
export default node;
