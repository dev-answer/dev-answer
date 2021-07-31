/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionPageQueryVariables = {};
export type QuestionPageQueryResponse = {
    readonly allQuestions: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"QuestionCard_question">;
    }>;
};
export type QuestionPageQuery = {
    readonly response: QuestionPageQueryResponse;
    readonly variables: QuestionPageQueryVariables;
};



/*
query QuestionPageQuery {
  allQuestions {
    id
    ...QuestionCard_question
  }
}

fragment QuestionCard_question on Question {
  content
  category
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
            "name": "QuestionPageQuery",
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
            "name": "QuestionPageQuery",
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
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "category",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "41d6e2c746a381ec9b7b2efb152bc51c",
            "id": null,
            "metadata": {},
            "name": "QuestionPageQuery",
            "operationKind": "query",
            "text": "query QuestionPageQuery {\n  allQuestions {\n    id\n    ...QuestionCard_question\n  }\n}\n\nfragment QuestionCard_question on Question {\n  content\n  category\n}\n"
        }
    } as any;
})();
(node as any).hash = '5064de9b13c574057fe100145aee7120';
export default node;
