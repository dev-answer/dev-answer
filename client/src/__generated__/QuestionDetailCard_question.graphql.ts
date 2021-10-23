/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionDetailCard_question = {
    readonly id: string;
    readonly content: string;
    readonly votes: ReadonlyArray<{
        readonly userId: string;
        readonly kind: string;
    }>;
    readonly author: {
        readonly name: string;
        readonly gitHubURL: string;
        readonly profileImageURL: string;
        readonly id: string;
    };
    readonly " $refType": "QuestionDetailCard_question";
};
export type QuestionDetailCard_question$data = QuestionDetailCard_question;
export type QuestionDetailCard_question$key = {
    readonly " $data"?: QuestionDetailCard_question$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionDetailCard_question">;
};



const node: ReaderFragment = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "argumentDefinitions": [],
        "kind": "Fragment",
        "metadata": null,
        "name": "QuestionDetailCard_question",
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
                    (v0 /*: any*/)
                ],
                "storageKey": null
            }
        ],
        "type": "Question",
        "abstractKey": null
    } as any;
})();
(node as any).hash = '3a266c5b5c3e04c35e00fbf8cbac582a';
export default node;
