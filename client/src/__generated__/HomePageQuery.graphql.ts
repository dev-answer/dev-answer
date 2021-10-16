/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomePageQueryVariables = {};
export type HomePageQueryResponse = {
    readonly allQuestionCategories: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly count: number;
    }>;
};
export type HomePageQuery = {
    readonly response: HomePageQueryResponse;
    readonly variables: HomePageQueryVariables;
};



/*
query HomePageQuery {
  allQuestionCategories {
    id
    title
    count
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "alias": null,
            "args": null,
            "concreteType": "QuestionCategory",
            "kind": "LinkedField",
            "name": "allQuestionCategories",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                },
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
                    "name": "count",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "HomePageQuery",
            "selections": (v0 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "HomePageQuery",
            "selections": (v0 /*: any*/)
        },
        "params": {
            "cacheID": "d8130703d2b2984d1994c675acd31ee4",
            "id": null,
            "metadata": {},
            "name": "HomePageQuery",
            "operationKind": "query",
            "text": "query HomePageQuery {\n  allQuestionCategories {\n    id\n    title\n    count\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '0ccdaae09b4df8a8ed2516c77884f9c5';
export default node;
