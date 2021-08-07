/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionCard_question = {
    readonly content: string | null;
    readonly category: string | null;
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
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
        }
    ],
    "type": "Question",
    "abstractKey": null
} as any;
(node as any).hash = 'ff5a913df6d48a2ed80eef87b2567c51';
export default node;
