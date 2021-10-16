/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionCard_question = {
    readonly content: string;
    readonly votes: ReadonlyArray<{
        readonly userId: string;
    }>;
    readonly comments: ReadonlyArray<{
        readonly id: string;
    }>;
    readonly " $refType": "QuestionCard_question";
};
export type QuestionCard_question$data = QuestionCard_question;
export type QuestionCard_question$key = {
    readonly " $data"?: QuestionCard_question$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionCard_question">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionCard_question",
    "selections": [
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
                }
            ],
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Question",
    "abstractKey": null
} as any;
(node as any).hash = 'b7981611fa8216b724fb5eaf49d18c6b';
export default node;
