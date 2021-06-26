/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExamplePageQueryVariables = {};
export type ExamplePageQueryResponse = {
    readonly allQuestions: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Question_question">;
    }>;
};
export type ExamplePageQuery = {
    readonly response: ExamplePageQueryResponse;
    readonly variables: ExamplePageQueryVariables;
};



/*
query ExamplePageQuery {
  allQuestions {
    id
    ...Question_question
  }
}

fragment Question_question on Question {
  id
  title
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
            "name": "ExamplePageQuery",
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
                            "name": "Question_question"
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
            "name": "ExamplePageQuery",
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
                            "name": "title",
                            "storageKey": null
                        },
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
            "cacheID": "231ec4c6ac4274a006852806db2eb6bb",
            "id": null,
            "metadata": {},
            "name": "ExamplePageQuery",
            "operationKind": "query",
            "text": "query ExamplePageQuery {\n  allQuestions {\n    id\n    ...Question_question\n  }\n}\n\nfragment Question_question on Question {\n  id\n  title\n  content\n}\n"
        }
    } as any;
})();
(node as any).hash = '40221d1bac5950061c4a438b459c73ec';
export default node;
