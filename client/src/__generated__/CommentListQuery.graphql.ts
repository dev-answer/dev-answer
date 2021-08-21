/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommentListQueryVariables = {
    questionId?: number | null;
};
export type CommentListQueryResponse = {
    readonly comments: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    }>;
};
export type CommentListQuery = {
    readonly response: CommentListQueryResponse;
    readonly variables: CommentListQueryVariables;
};



/*
query CommentListQuery(
  $questionId: Int
) {
  comments(questionId: $questionId) {
    id
    ...Comment_comment
  }
}

fragment Comment_comment on Comment {
  id
  questionId
  createdAt
  uid
  content
  like
  dislike
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
            "name": "CommentListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "comments",
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
            "name": "CommentListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "comments",
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
                            "name": "uid",
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
                            "name": "dislike",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "591bbe67f8c7152d54df8b892ff18e62",
            "id": null,
            "metadata": {},
            "name": "CommentListQuery",
            "operationKind": "query",
            "text": "query CommentListQuery(\n  $questionId: Int\n) {\n  comments(questionId: $questionId) {\n    id\n    ...Comment_comment\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  questionId\n  createdAt\n  uid\n  content\n  like\n  dislike\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd0a6df47b24ee9d8d387780282723044';
export default node;
