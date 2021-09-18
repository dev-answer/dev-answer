/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionBoardPageQueryVariables = {};
export type QuestionBoardPageQueryResponse = {
    readonly allQuestions: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"QuestionCard_question">;
    }>;
};
export type QuestionBoardPageQuery = {
    readonly response: QuestionBoardPageQueryResponse;
    readonly variables: QuestionBoardPageQueryVariables;
};



/*
query QuestionBoardPageQuery {
  allQuestions {
    id
    ...QuestionCard_question
  }
}

fragment QuestionCard_question on Question {
  content
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "QuestionBoardPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "allQuestions",
                    "plural": true,
                    "selections": [
                        (v0 /*: any*/),
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
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "QuestionBoardPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "allQuestions",
                    "plural": true,
                    "selections": [
                        (v0 /*: any*/),
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
            "cacheID": "f763ad3736820c51be7aa9874fc98d17",
            "id": null,
            "metadata": {},
            "name": "QuestionBoardPageQuery",
            "operationKind": "query",
            "text": "query QuestionBoardPageQuery {\n  allQuestions {\n    id\n    ...QuestionCard_question\n  }\n}\n\nfragment QuestionCard_question on Question {\n  content\n}\n"
        }
    } as any;
})();
(node as any).hash = '2201c828a14f2df7f61991f173808cf8';
export default node;
