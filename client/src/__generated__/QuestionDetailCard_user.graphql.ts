/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionDetailCard_user = {
    readonly id: string;
    readonly " $refType": "QuestionDetailCard_user";
};
export type QuestionDetailCard_user$data = QuestionDetailCard_user;
export type QuestionDetailCard_user$key = {
    readonly " $data"?: QuestionDetailCard_user$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionDetailCard_user">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionDetailCard_user",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        }
    ],
    "type": "User",
    "abstractKey": null
} as any;
(node as any).hash = '2443418938360a32c208d6956fb45bf3';
export default node;
