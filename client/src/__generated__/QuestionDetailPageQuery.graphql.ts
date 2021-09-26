/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionDetailPageQueryVariables = {
    questionId: number;
    accessToken: string;
};
export type QuestionDetailPageQueryResponse = {
    readonly questionDetail: {
        readonly " $fragmentRefs": FragmentRefs<"QuestionDetailCard_question">;
    } | null;
    readonly myInfo: {
        readonly " $fragmentRefs": FragmentRefs<"QuestionDetailCard_user">;
    } | null;
};
export type QuestionDetailPageQuery = {
    readonly response: QuestionDetailPageQueryResponse;
    readonly variables: QuestionDetailPageQueryVariables;
};



/*
query QuestionDetailPageQuery(
  $questionId: Int!
  $accessToken: String!
) {
  questionDetail(questionId: $questionId) {
    ...QuestionDetailCard_question
    id
  }
  myInfo(accessToken: $accessToken) {
    ...QuestionDetailCard_user
    id
  }
}

fragment QuestionDetailCard_question on Question {
  id
  content
  votes {
    userId
    kind
  }
  author {
    name
    gitHubURL
    profileImageURL
    id
  }
}

fragment QuestionDetailCard_user on User {
  id
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "accessToken"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "questionId"
    } as any, v2 = [
        {
            "kind": "Variable",
            "name": "questionId",
            "variableName": "questionId"
        } as any
    ], v3 = [
        {
            "kind": "Variable",
            "name": "accessToken",
            "variableName": "accessToken"
        } as any
    ], v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "QuestionDetailPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionDetail",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionDetailCard_question"
                        }
                    ],
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "myInfo",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionDetailCard_user"
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
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "QuestionDetailPageQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questionDetail",
                    "plural": false,
                    "selections": [
                        (v4 /*: any*/),
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
                            "concreteType": "QuestionVote",
                            "kind": "LinkedField",
                            "name": "votes",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "userId",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "kind",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "QuestionAuthor",
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "gitHubURL",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "profileImageURL",
                                    "storageKey": null
                                },
                                (v4 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "myInfo",
                    "plural": false,
                    "selections": [
                        (v4 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "c6e97140e22cc0c6e5c77d709b105c4f",
            "id": null,
            "metadata": {},
            "name": "QuestionDetailPageQuery",
            "operationKind": "query",
            "text": "query QuestionDetailPageQuery(\n  $questionId: Int!\n  $accessToken: String!\n) {\n  questionDetail(questionId: $questionId) {\n    ...QuestionDetailCard_question\n    id\n  }\n  myInfo(accessToken: $accessToken) {\n    ...QuestionDetailCard_user\n    id\n  }\n}\n\nfragment QuestionDetailCard_question on Question {\n  id\n  content\n  votes {\n    userId\n    kind\n  }\n  author {\n    name\n    gitHubURL\n    profileImageURL\n    id\n  }\n}\n\nfragment QuestionDetailCard_user on User {\n  id\n}\n"
        }
    } as any;
})();
(node as any).hash = 'e9829f1f66787c34b5024c2941a212a5';
export default node;
