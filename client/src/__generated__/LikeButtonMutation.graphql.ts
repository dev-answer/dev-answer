/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LikeButtonMutationVariables = {
    commentId?: string | null;
    uid?: string | null;
};
export type LikeButtonMutationResponse = {
    readonly toggleLike: {
        readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    } | null;
};
export type LikeButtonMutation = {
    readonly response: LikeButtonMutationResponse;
    readonly variables: LikeButtonMutationVariables;
};



/*
mutation LikeButtonMutation(
  $commentId: String
  $uid: String
) {
  toggleLike(commentId: $commentId, uid: $uid) {
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
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "commentId"
        } as any,
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "uid"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "commentId",
            "variableName": "commentId"
        } as any,
        {
            "kind": "Variable",
            "name": "uid",
            "variableName": "uid"
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "LikeButtonMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "toggleLike",
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
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "LikeButtonMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "toggleLike",
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
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "61c8dc45f173631a36b3405d6deebbc8",
            "id": null,
            "metadata": {},
            "name": "LikeButtonMutation",
            "operationKind": "mutation",
            "text": "mutation LikeButtonMutation(\n  $commentId: String\n  $uid: String\n) {\n  toggleLike(commentId: $commentId, uid: $uid) {\n    ...Comment_comment\n    id\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  questionId\n  createdAt\n  uid\n  content\n  like\n}\n"
        }
    } as any;
})();
(node as any).hash = 'f1b19d11092c486339d5ee439cd4ba31';
export default node;
