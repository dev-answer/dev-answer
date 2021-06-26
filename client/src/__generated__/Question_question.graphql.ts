/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Question_question = {
    readonly id: string;
    readonly title: string | null;
    readonly content: string | null;
    readonly " $refType": "Question_question";
};
export type Question_question$data = Question_question;
export type Question_question$key = {
    readonly " $data"?: Question_question$data;
    readonly " $fragmentRefs": FragmentRefs<"Question_question">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Question_question",
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
            "name": "content",
            "storageKey": null
        }
    ],
    "type": "Question",
    "abstractKey": null
} as any;
(node as any).hash = '373c5847c637e5ae0dc6da744ba8dd13';
export default node;
