/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionBoardPageQueryVariables = {
    categoryId: string;
};
export type QuestionBoardPageQueryResponse = {
    readonly allQuestionCategories: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
    }>;
    readonly questionsByCategoryId: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"QuestionCard_question">;
    }>;
};
export type QuestionBoardPageQuery = {
    readonly response: QuestionBoardPageQueryResponse;
    readonly variables: QuestionBoardPageQueryVariables;
};



/*
query QuestionBoardPageQuery(
  $categoryId: String!
) {
  allQuestionCategories {
    id
    title
  }
  questionsByCategoryId(categoryId: $categoryId) {
    id
    ...QuestionCard_question
  }
}

fragment QuestionCard_question on Question {
  content
  votes {
    userId
  }
  comments {
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "categoryId"
        } as any
    ], v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v2 = {
        "alias": null,
        "args": null,
        "concreteType": "QuestionCategory",
        "kind": "LinkedField",
        "name": "allQuestionCategories",
        "plural": true,
        "selections": [
            (v1 /*: any*/),
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
            }
        ],
        "storageKey": null
    } as any, v3 = [
        {
            "kind": "Variable",
            "name": "categoryId",
            "variableName": "categoryId"
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "QuestionBoardPageQuery",
            "selections": [
                (v2 /*: any*/),
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionsByCategoryId",
                    "plural": true,
                    "selections": [
                        (v1 /*: any*/),
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionCard_question"
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
            "name": "QuestionBoardPageQuery",
            "selections": [
                (v2 /*: any*/),
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionsByCategoryId",
                    "plural": true,
                    "selections": [
                        (v1 /*: any*/),
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
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Comment",
                            "kind": "LinkedField",
                            "name": "comments",
                            "plural": true,
                            "selections": [
                                (v1 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "5480f8428af49a132954793ab4c58580",
            "id": null,
            "metadata": {},
            "name": "QuestionBoardPageQuery",
            "operationKind": "query",
            "text": "query QuestionBoardPageQuery(\n  $categoryId: String!\n) {\n  allQuestionCategories {\n    id\n    title\n  }\n  questionsByCategoryId(categoryId: $categoryId) {\n    id\n    ...QuestionCard_question\n  }\n}\n\nfragment QuestionCard_question on Question {\n  content\n  votes {\n    userId\n  }\n  comments {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '07f782819345f636f10bd22052ae9250';
export default node;
