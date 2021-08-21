/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommentInputFormMutationVariables = {
    questionId?: number | null;
    uid?: string | null;
    content?: string | null;
};
export type CommentInputFormMutationResponse = {
    readonly addComment: {
        readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    } | null;
};
export type CommentInputFormMutation = {
    readonly response: CommentInputFormMutationResponse;
    readonly variables: CommentInputFormMutationVariables;
};



/*
mutation CommentInputFormMutation(
  $questionId: Int
  $uid: String
  $content: String
) {
  addComment(questionId: $questionId, uid: $uid, content: $content) {
    ...Comment_comment
    id
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
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "content"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "questionId"
    } as any, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "uid"
    } as any, v3 = [
        {
            "kind": "Variable",
            "name": "content",
            "variableName": "content"
        } as any,
        {
            "kind": "Variable",
            "name": "questionId",
            "variableName": "questionId"
        } as any,
        {
            "kind": "Variable",
            "name": "uid",
            "variableName": "uid"
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/),
                (v2 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "CommentInputFormMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "addComment",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "Comment_comment"
                        }
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
            "name": "CommentInputFormMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "addComment",
                    "plural": false,
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
            "cacheID": "988b017c828179de4ddd036c7d56423a",
            "id": null,
            "metadata": {},
            "name": "CommentInputFormMutation",
            "operationKind": "mutation",
            "text": "mutation CommentInputFormMutation(\n  $questionId: Int\n  $uid: String\n  $content: String\n) {\n  addComment(questionId: $questionId, uid: $uid, content: $content) {\n    ...Comment_comment\n    id\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  questionId\n  createdAt\n  uid\n  content\n  like\n  dislike\n}\n"
        }
    } as any;
})();
(node as any).hash = '03135f2e8ee4e583ae40e4d3ceae48ae';
export default node;
