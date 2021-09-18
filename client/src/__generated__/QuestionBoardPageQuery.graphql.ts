/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionBoardPageQueryVariables = {
    categoryId: number;
};
export type QuestionBoardPageQueryResponse = {
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
  $categoryId: Int!
) {
  questionsByCategoryId(categoryId: $categoryId) {
    id
    ...QuestionCard_question
  }
}

fragment QuestionCard_question on Question {
  content
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "categoryId"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "categoryId",
            "variableName": "categoryId"
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
            "name": "QuestionBoardPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionsByCategoryId",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
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
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionsByCategoryId",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
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
            ]
        },
        "params": {
            "cacheID": "651e8936b0e5140fa568bd074f3a78ae",
            "id": null,
            "metadata": {},
            "name": "QuestionBoardPageQuery",
            "operationKind": "query",
            "text": "query QuestionBoardPageQuery(\n  $categoryId: Int!\n) {\n  questionsByCategoryId(categoryId: $categoryId) {\n    id\n    ...QuestionCard_question\n  }\n}\n\nfragment QuestionCard_question on Question {\n  content\n}\n"
        }
    } as any;
})();
(node as any).hash = '3ef600e29b4327e071f41f49b9a525f0';
export default node;
