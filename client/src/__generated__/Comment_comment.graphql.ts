/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Comment_comment = {
    readonly id: string;
    readonly questionId: number | null;
    readonly createdAt: string | null;
    readonly uid: string | null;
    readonly content: string | null;
    readonly like: ReadonlyArray<string | null> | null;
    readonly dislike: ReadonlyArray<string | null> | null;
    readonly " $refType": "Comment_comment";
};
export type Comment_comment$data = Comment_comment;
export type Comment_comment$key = {
    readonly " $data"?: Comment_comment$data;
    readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Comment_comment",
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
    "type": "Comment",
    "abstractKey": null
} as any;
(node as any).hash = 'ac26b5404e10d6ba332b5fb72818da04';
export default node;
