/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommentPageQueryVariables = {
    questionId?: number | null;
};
export type CommentPageQueryResponse = {
    readonly commentsOfQuestion: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    }>;
};
export type CommentPageQuery = {
    readonly response: CommentPageQueryResponse;
    readonly variables: CommentPageQueryVariables;
};



/*
query CommentPageQuery(
  $questionId: Int
) {
  commentsOfQuestion(questionId: $questionId) {
    id
    ...Comment_comment
  }
}

fragment Comment_comment on Comment {
  id
  questionId
  createdAt
  userEmail
  content
  like
  hate
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
            "name": "CommentPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "commentsOfQuestion",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "Comment_comment"
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
            "name": "CommentPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "commentsOfQuestion",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "questionId",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "userEmail",
                            "storageKey": null
                        },
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
                            "name": "like",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hate",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "9561d8e5772a4b3c257e4b2aae883b92",
            "id": null,
            "metadata": {},
            "name": "CommentPageQuery",
            "operationKind": "query",
            "text": "query CommentPageQuery(\n  $questionId: Int\n) {\n  commentsOfQuestion(questionId: $questionId) {\n    id\n    ...Comment_comment\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  questionId\n  createdAt\n  userEmail\n  content\n  like\n  hate\n}\n"
        }
    } as any;
})();
(node as any).hash = '4e5584f9a6a5f71bbbb440b3487d85a7';
export default node;
