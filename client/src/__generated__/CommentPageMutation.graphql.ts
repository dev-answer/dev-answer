/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommentPageMutationVariables = {
    questionId?: number | null;
    userEmail?: string | null;
    content?: string | null;
};
export type CommentPageMutationResponse = {
    readonly addComment: {
        readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    } | null;
};
export type CommentPageMutation = {
    readonly response: CommentPageMutationResponse;
    readonly variables: CommentPageMutationVariables;
};



/*
mutation CommentPageMutation(
  $questionId: Int
  $userEmail: String
  $content: String
) {
  addComment(questionId: $questionId, userEmail: $userEmail, content: $content) {
    ...Comment_comment
    id
  }
}

fragment Comment_comment on Comment {
  id
  questionId
  createdAt
  userEmail
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
        "name": "userEmail"
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
            "name": "userEmail",
            "variableName": "userEmail"
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
            "name": "CommentPageMutation",
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
            "name": "CommentPageMutation",
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
                            "name": "dislike",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "d51be9613e606657038a124040c54cf8",
            "id": null,
            "metadata": {},
            "name": "CommentPageMutation",
            "operationKind": "mutation",
            "text": "mutation CommentPageMutation(\n  $questionId: Int\n  $userEmail: String\n  $content: String\n) {\n  addComment(questionId: $questionId, userEmail: $userEmail, content: $content) {\n    ...Comment_comment\n    id\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  questionId\n  createdAt\n  userEmail\n  content\n  like\n  dislike\n}\n"
        }
    } as any;
})();
(node as any).hash = 'f3d465960dc72eb2964fe3a6b28b70c3';
export default node;
